using Microsoft.Xrm.Sdk;
using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Exceptions;
using PC.PowerApps.Common.Extensions;
using System;
using System.Linq;

namespace PC.PowerApps.Common.Repositories
{
    public static class ContactRepository
    {
        public static void UpdateParticipationLevel(Context context, Guid? contactId)
        {
            if (contactId is null)
            {
                return;
            }

            Contact contact = context.ServiceContext.Retrieve<Contact>(contactId.Value);
            DateTime localNow = context.UtcToOrganizationTime(DateTime.UtcNow);
            pc_Participation participation;

            try
            {
                participation = context.ServiceContext.pc_ParticipationSet
                    .Where(p => p.pc_Contact.Id == contactId && p.pc_From <= localNow.Date && (p.pc_Till == null || p.pc_Till >= localNow.Date))
                    .TakeSingleOrDefault();
            }
            catch (SequenceHasMoreThanOneElementException)
            {
                throw new InvalidPluginExecutionException("There are more than one current participations.");
            }

            contact.pc_ParticipationLevel = participation?.pc_Level;
            _ = context.ServiceContext.UpdateModifiedAttributes(contact);
        }
    }
}
