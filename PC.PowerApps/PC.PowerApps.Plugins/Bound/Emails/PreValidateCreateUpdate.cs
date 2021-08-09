using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Bound.Emails
{
    public class PreValidateCreateUpdate : PluginBase
    {
        protected override void ExecuteInternal(IServiceProvider serviceProvider)
        {
            PreCreateUpdatePluginContext<Email> context = new(serviceProvider, OrganizationServiceUser.System, OrganizationServiceUser.User);
            context.EnsureAttributesNotModified(e => e.pc_Category);
        }
    }
}
