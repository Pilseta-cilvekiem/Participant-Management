using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Plugins
{
    public class PreCreateUpdateContact : PluginBase
    {
        protected override void Execute(PluginContext pluginContext)
        {
            PreCreateUpdatePluginContext<Contact> context = (PreCreateUpdatePluginContext<Contact>)pluginContext;
            Contact contact = context.PostImage;

            if (context.Message == PluginMessage.Create)
            {
                ContactRepository.SetDefaults(contact);
            }

            if (context.IsModifiedAnyAttribute(c => c.pc_ParticipationLevel))
            {
                ContactRepository.SetStatusCode(contact);
            }
        }

        protected override PluginContext GetPluginContext(IServiceProvider serviceProvider)
        {
            return new PreCreateUpdatePluginContext<Contact>(serviceProvider, OrganizationServiceUser.System, OrganizationServiceUser.User);
        }
    }
}
