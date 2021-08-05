using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Plugins
{
    public class PostDeleteContact : PluginBase
    {
        protected override void Execute(PluginContext pluginContext)
        {
            DeletePluginContext<Contact> context = (DeletePluginContext<Contact>)pluginContext;
            Contact contact = context.PreImage;

            if (ContactRepository.IsValidForGoogleSupporterGroup(contact))
            {
                ContactRepository.ScheduleSynchronizeGoogleSupporterGroupMembers(context);
            }
        }

        protected override PluginContext GetPluginContext(IServiceProvider serviceProvider)
        {
            return new DeletePluginContext<Contact>(serviceProvider, OrganizationServiceUser.System, OrganizationServiceUser.User);
        }
    }
}
