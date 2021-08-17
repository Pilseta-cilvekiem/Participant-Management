using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Bound.Contacts
{
    public class PostCreateUpdate : PluginBase
    {
        protected override void ExecuteInternal(IServiceProvider serviceProvider)
        {
            PostCreateUpdatePluginContext<Contact> context = new(serviceProvider, User.System, User.User);
            Contact contact = context.PostImage;

            if (ContactRepository.IsValidForGoogleSupporterGroup(context.PreImage) != ContactRepository.IsValidForGoogleSupporterGroup(contact))
            {
                ContactRepository.ScheduleSynchronizeGoogleSupporterGroupMembers(context);
            }

            if (context.GetIsAnyAttributeModified(c => c.pc_ParticipationLevel))
            {
                ContactRepository.SendWelcomeEmail(context, contact);
            }

            if (context.GetIsAnyAttributeModified(c => c.StatusCode))
            {
                ContactRepository.ScheduleDeleteChangeHistory(context, contact);
            }
        }
    }
}
