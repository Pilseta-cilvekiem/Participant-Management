using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Plugins
{
    public class PostCreateUpdateContact : PluginBase
    {
        protected override void Execute(PluginContext pluginContext)
        {
            PostCreateUpdatePluginContext<Contact> context = (PostCreateUpdatePluginContext<Contact>)pluginContext;
            Contact contact = context.PostImage;

            if (!ContactRepository.IsValidForGoogleSupporterGroup(context.PreImage) != ContactRepository.IsValidForGoogleSupporterGroup(contact))
            {
                ContactRepository.ScheduleSynchronizeGoogleSupporterGroupMembers(context);
            }
        }

        protected override PluginContext GetPluginContext(IServiceProvider serviceProvider)
        {
            return new PostCreateUpdatePluginContext<Contact>(serviceProvider, OrganizationServiceUser.System, OrganizationServiceUser.User);
        }
    }
}
