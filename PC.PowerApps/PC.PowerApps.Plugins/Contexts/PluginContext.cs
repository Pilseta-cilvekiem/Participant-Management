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
        private readonly Lazy<ILogger> lazyLogger;
        private readonly Lazy<IOrganizationService> lazyOrganizationService;
        private readonly Lazy<EntityMetadata> lazyPrimaryEntityMetadata;

        protected override Guid InitiatingUserId { get; }
        public bool IsValidationDisabled => UserId == Organization.SystemUserId || DateTime.UtcNow < User.pc_DisableValidationTill;
        public override ILogger Logger => lazyLogger.Value;
        public PluginMessage Message => lazyMessage.Value;
        public override IOrganizationService OrganizationService => lazyOrganizationService.Value;
        public IPluginExecutionContext PluginExecutionContext { get; }
        public string PrimaryEntityDisplayName => GetLabelValue(PrimaryEntityMetadata.DisplayName);
        public EntityMetadata PrimaryEntityMetadata => lazyPrimaryEntityMetadata.Value;
        protected override Guid UserId { get; }

        public PluginContext(IServiceProvider serviceProvider, User organizationServiceUser, User user)
        {
            IOrganizationServiceFactory organizationServiceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            IPluginExecutionContext pluginExecutionContext = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            ITracingService tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            Guid? organizationServiceUserId = GetUserId(pluginExecutionContext, organizationServiceUser);
            Guid? userId = GetUserId(pluginExecutionContext, user);
            lazyLogger = new(() => new TraceLogger(tracingService));
            lazyMessage = new(() => (PluginMessage)Enum.Parse(typeof(PluginMessage), PluginExecutionContext.MessageName));
            lazyOrganizationService = new(() => organizationServiceFactory.CreateOrganizationService(organizationServiceUserId));
            lazyPrimaryEntityMetadata = new(() => GetEntityMetadata(PluginExecutionContext.PrimaryEntityName));
            InitiatingUserId = pluginExecutionContext.InitiatingUserId;
            PluginExecutionContext = pluginExecutionContext;
            UserId = userId.Value;
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
    }
}
