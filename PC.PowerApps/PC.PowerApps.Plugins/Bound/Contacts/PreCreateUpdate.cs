using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Bound.Contacts
{
    public class PreCreateUpdate : PluginBase
    {
        protected override void ExecuteInternal(IServiceProvider serviceProvider)
        {
            PreCreateUpdatePluginContext<Contact> context = new(serviceProvider, OrganizationServiceUser.System, OrganizationServiceUser.User);
            Contact contact = context.PostImage;

            if (context.Message == PluginMessage.Create)
            {
                ContactRepository.SetDefaults(contact);
            }

            if (context.GetIsAnyAttributeModified(c => c.pc_ParticipationLevel))
            {
                ContactRepository.UpdateParticipationInfo(contact);
            }
        }
    }
}
