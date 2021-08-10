using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Bound.Contacts
{
    public class PreValidateCreateUpdate : PluginBase
    {
        protected override void ExecuteInternal(IServiceProvider serviceProvider)
        {
            PreCreateUpdatePluginContext<Contact> context = new(serviceProvider, OrganizationServiceUser.System, OrganizationServiceUser.User);
            context.EnsureAttributesNotModified(c => new { c.pc_PaidParticipationFee, c.pc_ParticipationLevel, c.pc_RequiredParticipationFee, c.pc_SentDebtReminderOn, c.pc_SentSupporterWelcomeEmailOn });
            Contact contact = context.PostImage;

            if (contact.StatusCode != Contact_StatusCode.Active && contact.pc_ParticipationLevel != null)
            {
                context.EnsureAttributesNotModified(c => c.StatusCode);
            }

            context.EnsureCreatedOrUpdatedAttributesNotEmpty(c => new { c.Description, c.EMailAddress1, c.FirstName, c.LastName, c.pc_IsInvitedToSlack, c.pc_PersonalIdentityNumber, c.pc_WishesToBeActive });
        }
    }
}
