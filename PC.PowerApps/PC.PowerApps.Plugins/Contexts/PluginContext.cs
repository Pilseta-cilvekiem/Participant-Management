﻿using Microsoft.Extensions.Logging;
using Microsoft.Xrm.Sdk;
using PC.PowerApps.Common;
using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Contexts
{
    public class PluginContext : Context
    {
        private readonly Lazy<PluginMessage> message;
        private readonly Lazy<IPluginExecutionContext> pluginExecutionContext;

        public PluginMessage Message => message.Value;
        public IPluginExecutionContext PluginExecutionContext => pluginExecutionContext.Value;

        public PluginContext(IServiceProvider serviceProvider, OrganizationServiceUser organizationServiceUser, OrganizationServiceUser userOrganizationServiceUser) : this(GetOrganizationServiceFactory(serviceProvider), GetPluginExecutionContext(serviceProvider), GetTracingService(serviceProvider), organizationServiceUser, userOrganizationServiceUser)
        {
        }

        private PluginContext(Lazy<IOrganizationServiceFactory> organizationServiceFactory, Lazy<IPluginExecutionContext> pluginExecutionContext, Lazy<ITracingService> tracingService, OrganizationServiceUser organizationServiceUser, OrganizationServiceUser userOrganizationServiceUser) : base(GetOrganizationService(organizationServiceFactory, pluginExecutionContext, organizationServiceUser), GetOrganizationService(organizationServiceFactory, pluginExecutionContext, userOrganizationServiceUser), GetTraceLogger(tracingService))
        {
            message = new Lazy<PluginMessage>(() => (PluginMessage)Enum.Parse(typeof(PluginMessage), PluginExecutionContext.MessageName));
            this.pluginExecutionContext = pluginExecutionContext;
            Lazy<Context> context = new(() => this);
        }

        private static Lazy<ILogger> GetTraceLogger(Lazy<ITracingService> tracingService)
        {
            return new Lazy<ILogger>(() => new TraceLogger(tracingService.Value));
        }

        private static Lazy<IOrganizationServiceFactory> GetOrganizationServiceFactory(IServiceProvider serviceProvider)
        {
            return new Lazy<IOrganizationServiceFactory>(() =>
            {
                IOrganizationServiceFactory organizationServiceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
                IProxyTypesAssemblyProvider proxyTypesAssemblyProvider = (IProxyTypesAssemblyProvider)organizationServiceFactory;
                proxyTypesAssemblyProvider.ProxyTypesAssembly = typeof(ServiceContextBase).Assembly;
                return organizationServiceFactory;
            });
        }

        private static Lazy<IOrganizationService> GetOrganizationService(Lazy<IOrganizationServiceFactory> organizationServiceFactory, Lazy<IPluginExecutionContext> pluginExecutionContext, OrganizationServiceUser organizationServiceUser)
        {
            return new Lazy<IOrganizationService>(() =>
            {
                Guid? userId = organizationServiceUser switch
                {
                    OrganizationServiceUser.InitiatingUser => pluginExecutionContext.Value.InitiatingUserId,
                    OrganizationServiceUser.System => null,
                    OrganizationServiceUser.User => Guid.Empty,
                    _ => throw new NotImplementedException($"Unknown {nameof(OrganizationServiceUser)} value {organizationServiceUser}."),
                };
                return organizationServiceFactory.Value.CreateOrganizationService(userId);
            });
        }

        private static Lazy<IPluginExecutionContext> GetPluginExecutionContext(IServiceProvider serviceProvider)
        {
            return new Lazy<IPluginExecutionContext>(() => (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext)));
        }

        private static Lazy<ITracingService> GetTracingService(IServiceProvider serviceProvider)
        {
            return new Lazy<ITracingService>(() => (ITracingService)serviceProvider.GetService(typeof(ITracingService)));
        }
    }
}
