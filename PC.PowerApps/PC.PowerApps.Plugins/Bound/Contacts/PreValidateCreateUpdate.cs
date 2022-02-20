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
            PreCreateUpdatePluginContext<Contact> context = new(serviceProvider, User.System, User.User);

            if (context.IsValidationDisabled)
            {
                return;
            }

            context.EnsureAttributesNotModified(c => new { c.pc_PaidParticipationFee, c.pc_ParticipantTill, c.pc_ParticipationLevel, c.pc_RequiredParticipationFee, c.pc_SentDebtReminderOn, c.pc_SentMemberWelcomeEmailOn, c.pc_SentSupporterWelcomeEmailOn });
            Contact contact = context.PostImage;

            if (contact.StatusCode != Contact_StatusCode.Active && contact.pc_ParticipantTill == null)
            {
                context.EnsureAttributesNotModified(c => c.StatusCode);
            }

            if (contact.StatusCode != Contact_StatusCode.Active)
            {
                context.EnsureAttributesNotModified(c => new { c.Address1_City, c.Address1_Country, c.Address1_County, c.Address1_Line1, c.Address1_PostalCode, c.Address1_StateOrProvince, c.Description, c.EMailAddress1, c.EMailAddress2, c.MobilePhone, c.pc_CalledOn, c.pc_CallResults, c.pc_ForceAddToGoogleGroup, c.pc_Neighbourhood, c.pc_WelcomeMeetingStatus, c.pc_WishesToBeActive, c.pc_WillCall });
            }

            context.EnsureCreatedOrUpdatedAttributesNotEmpty(c => new { c.Description, c.FirstName, c.LastName, c.pc_ForceAddToGoogleGroup, c.pc_IsInvitedToSlack, c.pc_PersonalIdentityNumber, c.pc_WishesToBeActive });
        }
    }
}
