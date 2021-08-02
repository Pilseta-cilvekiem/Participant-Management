using Microsoft.Extensions.Logging;
using Microsoft.Xrm.Sdk;
using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Exceptions;
using PC.PowerApps.Common.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PC.PowerApps.Common.Repositories
{
    public static class ContactRepository
    {
        private static readonly DateTime participantFeePeriod1Start = new DateTime(2019, 4, 1);

        public static void UpdateParticipationLevel(Context context, Guid? contactId)
        {
            if (contactId is null)
            {
                return;
            }

            DateTime localNow = context.GetCurrentOrganizationTime();
            Contact contact = context.ServiceContext.Retrieve<Contact>(contactId.Value);
            UpdateParticipationLevel(context, contact, localNow);
        }

        private static void UpdateParticipationLevel(Context context, Contact contact, DateTime localNow)
        {
            pc_Participation participation;

            try
            {
                participation = context.ServiceContext.pc_ParticipationSet
                    .Where(p => p.pc_Contact.Id == contact.Id && p.pc_From <= localNow.Date && (p.pc_Till == null || p.pc_Till >= localNow.Date))
                    .TakeSingleOrDefault();
            }
            catch (SequenceHasMoreThanOneElementException)
            {
                throw new InvalidPluginExecutionException("There are more than one current participations.");
            }

            contact.pc_ParticipationLevel = participation?.pc_Level;
        }

        public static async Task UpdateRequiredParticipationFee(Context context)
        {
            DateTime localNow = context.GetCurrentOrganizationTime();
            ActionQueue actionQueue = new ActionQueue(context);
            IQueryable<Contact> contacts = context.ServiceContext.ContactSet
                .Select(c => new Contact
                {
                    ContactId = c.ContactId,
                    pc_RequiredParticipationFee = c.pc_RequiredParticipationFee,
                });

            actionQueue.AddForAll(contacts, contact =>
            {
                UpdateRequiredParticipationFee(context, contact, localNow);
                _ = context.ServiceContext.UpdateModifiedAttributes(contact);
                return Task.CompletedTask;
            });
            await actionQueue.ExecuteAll();
        }

        private static void UpdateRequiredParticipationFee(Context context, Contact contact, DateTime localTime)
        {
            context.Logger.LogInformation($"Calculating a required participation fee for the contact {contact.Id}...");
            List<pc_Participation> participations = context.ServiceContext.pc_ParticipationSet
                .Where(p => p.pc_Contact.Id == contact.Id && p.StateCode == pc_ParticipationState.Active && p.pc_From != null)
                .Select(p => new pc_Participation
                {
                    pc_From = p.pc_From,
                    pc_Till = p.pc_Till,
                })
                .ToList();
            List<pc_ParticipationFeeExemption> participationFeeExemptions = context.ServiceContext.pc_ParticipationFeeExemptionSet
                .Where(pfe => pfe.pc_Contact.Id == contact.Id && pfe.StateCode == pc_ParticipationFeeExemptionState.Active && pfe.pc_From != null)
                .Select(p => new pc_ParticipationFeeExemption
                {
                    pc_From = p.pc_From,
                    pc_Till = p.pc_Till,
                })
                .ToList();

            contact.pc_RequiredParticipationFee = new();

            if (participations.Count != 0)
            {
                DateTime startDate = participations.Min(p => p.pc_From.Value);
                DateTime fromDate = startDate >= participantFeePeriod1Start ? startDate : participantFeePeriod1Start;
                DateTime? endDate = participations.Max(p => p.pc_Till);
                DateTime toDate = endDate <= localTime ? endDate.Value : localTime;
                DateTime toDateMonth = new DateTime(toDate.Year, toDate.Month, 1);

                for (DateTime thisMonthStart = new(startDate.Year, startDate.Month, 1); thisMonthStart < toDateMonth; thisMonthStart = thisMonthStart.AddMonths(1))
                {
                    DateTime nextMonthStart = thisMonthStart.AddMonths(1);
                    DateTime thisMonthEnd = nextMonthStart.AddDays(-1);

                    pc_ParticipationFeeExemption participationFeeExemption = participationFeeExemptions
                        .Where(p => p.pc_From <= thisMonthStart && (p.pc_Till == null || p.pc_Till >= thisMonthEnd))
                        .FirstOrDefault();

                    if (participationFeeExemption != null)
                    {
                        continue;
                    }

                    pc_Participation participation = participations
                        .Where(p => p.pc_From < nextMonthStart && (p.pc_Till == null || p.pc_Till >= thisMonthStart))
                        .FirstOrDefault();

                    if (participation == null)
                    {
                        continue;
                    }

                    decimal participationFee = GetParticipationFee(thisMonthStart);
                    contact.pc_RequiredParticipationFee.Value += participationFee;
                }
            }
        }

        private static decimal GetParticipationFee(DateTime localDate)
        {
            if (localDate < participantFeePeriod1Start)
            {
                return 0;
            }

            return 2;
        }

        public static async void UpdateParticipationLevels(Context context)
        {
            DateTime localNow = context.GetCurrentOrganizationTime();
            ActionQueue actionQueue = new ActionQueue(context);
            IQueryable<Contact> contacts = context.ServiceContext.ContactSet
                .Select(c => new Contact
                {
                    ContactId = c.ContactId,
                    pc_ParticipationLevel = c.pc_ParticipationLevel,
                });

            actionQueue.AddForAll(contacts, contact =>
            {
                UpdateParticipationLevel(context, contact, localNow);
                _ = context.ServiceContext.UpdateModifiedAttributes(contact);
                return Task.CompletedTask;
            });
            await actionQueue.ExecuteAll();
        }
    }
}
