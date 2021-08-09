using Microsoft.Extensions.Logging;
using Microsoft.Xrm.Sdk;
using PC.PowerApps.Common;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Contexts
{
    public class PluginContext : Context
    {
        public PluginMessage Message { get; }
        public IPluginExecutionContext PluginExecutionContext { get; }
        public override Guid UserId { get; }

        public PluginContext(IServiceProvider serviceProvider, OrganizationServiceUser organizationServiceUser, OrganizationServiceUser userOrganizationServiceUser)
            : this(GetOrganizationServiceFactory(serviceProvider), GetPluginExecutionContext(serviceProvider), GetTracingService(serviceProvider), organizationServiceUser, userOrganizationServiceUser)
        {
        }

        private PluginContext(IOrganizationServiceFactory organizationServiceFactory, IPluginExecutionContext pluginExecutionContext, ITracingService tracingService, OrganizationServiceUser organizationServiceUser, OrganizationServiceUser userOrganizationServiceUser)
            : this(organizationServiceFactory, GetUserId(pluginExecutionContext, organizationServiceUser), GetUserId(pluginExecutionContext, userOrganizationServiceUser), GetLazyLogger(tracingService))
        {
            Message = (PluginMessage)Enum.Parse(typeof(PluginMessage), pluginExecutionContext.MessageName);
            PluginExecutionContext = pluginExecutionContext;
        }

        private PluginContext(IOrganizationServiceFactory organizationServiceFactory, Guid? organizationServiceUserId, Guid? userOrganizationServiceUserId, Lazy<ILogger> lazyLogger)
            : base(LazyCreateOrganizationService(organizationServiceFactory, organizationServiceUserId), LazyCreateOrganizationService(organizationServiceFactory, userOrganizationServiceUserId), lazyLogger)
        {
            UserId = userOrganizationServiceUserId.Value;
        }

        private static Lazy<ILogger> GetLazyLogger(ITracingService tracingService)
        {
            return new(() => new TraceLogger(tracingService));
        }

        private static IOrganizationServiceFactory GetOrganizationServiceFactory(IServiceProvider serviceProvider)
        {
            return (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
        }

        private static Lazy<IOrganizationService> LazyCreateOrganizationService(IOrganizationServiceFactory organizationServiceFactory, Guid? organizationServiceUserId)
        {
            return new(() => organizationServiceFactory.CreateOrganizationService(organizationServiceUserId));
        }

        private static Guid? GetUserId(IPluginExecutionContext pluginExecutionContext, OrganizationServiceUser organizationServiceUser)
        {
            return organizationServiceUser switch
            {
                OrganizationServiceUser.InitiatingUser => pluginExecutionContext.InitiatingUserId,
                OrganizationServiceUser.System => null,
                OrganizationServiceUser.User => pluginExecutionContext.UserId,
                _ => throw new NotImplementedException($"Unknown {nameof(OrganizationServiceUser)} value {organizationServiceUser}."),
            };
        }

        private static IPluginExecutionContext GetPluginExecutionContext(IServiceProvider serviceProvider)
        {
            return (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
        }

        private static ITracingService GetTracingService(IServiceProvider serviceProvider)
        {
            return (ITracingService)serviceProvider.GetService(typeof(ITracingService));
        }
    }
}
