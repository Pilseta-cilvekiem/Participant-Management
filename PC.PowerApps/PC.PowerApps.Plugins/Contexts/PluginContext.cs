using Microsoft.Extensions.Logging;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using PC.PowerApps.Common;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Contexts
{
    public class PluginContext : Context
    {
        private readonly Lazy<PluginMessage> lazyMessage;
        private readonly Lazy<EntityMetadata> lazyPrimaryEntityMetadata;

        public PluginMessage Message => lazyMessage.Value;
        public IPluginExecutionContext PluginExecutionContext { get; }
        public string PrimaryEntityDisplayName => Utils.GetLabelValue(PrimaryEntityMetadata.DisplayName);
        public EntityMetadata PrimaryEntityMetadata => lazyPrimaryEntityMetadata.Value;
        public override Guid UserId { get; }

        public PluginContext(IServiceProvider serviceProvider, User organizationServiceUser, User userOrganizationServiceUser)
            : this(GetOrganizationServiceFactory(serviceProvider), GetPluginExecutionContext(serviceProvider), GetTracingService(serviceProvider), organizationServiceUser, userOrganizationServiceUser)
        {
        }

        private PluginContext(IOrganizationServiceFactory organizationServiceFactory, IPluginExecutionContext pluginExecutionContext, ITracingService tracingService, User organizationServiceUser, User userOrganizationServiceUser)
            : this(organizationServiceFactory, GetUserId(pluginExecutionContext, organizationServiceUser), GetUserId(pluginExecutionContext, userOrganizationServiceUser), GetLazyLogger(tracingService))
        {
            lazyMessage = new(() => (PluginMessage)Enum.Parse(typeof(PluginMessage), PluginExecutionContext.MessageName));
            lazyPrimaryEntityMetadata = new(() => Utils.GetEntityMetadata(this, PluginExecutionContext.PrimaryEntityName));
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

        private static Guid? GetUserId(IPluginExecutionContext pluginExecutionContext, User organizationServiceUser)
        {
            return organizationServiceUser switch
            {
                Enumerations.User.InitiatingUser => pluginExecutionContext.InitiatingUserId,
                Enumerations.User.System => null,
                Enumerations.User.User => pluginExecutionContext.UserId,
                _ => throw new NotImplementedException($"Unknown {nameof(Enumerations.User)} value {organizationServiceUser}."),
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
