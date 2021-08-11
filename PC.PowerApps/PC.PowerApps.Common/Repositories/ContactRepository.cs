﻿using Microsoft.Extensions.Logging;
using Microsoft.Xrm.Sdk;
using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Exceptions;
using PC.PowerApps.Common.Extensions;
using PC.PowerApps.Common.ScheduledJobs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PC.PowerApps.Common.Repositories
{
    public static class ContactRepository
    {
        private static readonly Guid debtReminderEmailTemplateId = new("f190362f-cdf3-eb11-94ef-002248834145");
        private static readonly DateTime participantFeePeriod1Start = new(2019, 4, 1);
        private static readonly Guid supporterWelcomeEmailTemplateId = new("227d1abb-95f6-eb11-94ef-002248834145");

        public static void UpdateParticipationLevel(Context context, Guid? contactId)
        {
            if (contactId is null)
            {
                return;
            }

            Contact contact = context.ServiceContext.Retrieve<Contact>(contactId.Value);
            UpdateParticipationLevel(context, contact);
        }

        public static void SendWelcomeEmail(Context context, Contact contact)
        {
            if (contact.pc_ParticipationLevel != pc_ParticipationLevel.Supporter || contact.pc_SentSupporterWelcomeEmailOn is not null)
            {
                return;
            }

            pc_Participation participation = context.ServiceContext.pc_ParticipationSet
                .Where(p => p.pc_Contact.Id == contact.Id && p.pc_Level == pc_ParticipationLevel.Supporter)
                .OrderByDescending(p => p.pc_From)
                .TakeSingle();
            EntityReference contactReference = contact.ToEntityReference();
            Email email = Utils.CreateEmailFromTemplate(context, supporterWelcomeEmailTemplateId, contactReference);
            string supporterFrom = participation.GetFormattedValue(p => p.pc_From);
            email.Description = email.Description.Replace("{!SupporterFrom;}", supporterFrom);
            email.pc_Category = pc_EmailCategory.SupporterWelcomeEmail;
            email.RegardingObjectId = contactReference;
            email.To = new List<ActivityParty> { new() { PartyId = contactReference } };
            context.OrganizationService.CreateWithoutNulls(email);
            Utils.SendEmail(context, email);
        }

        public static void CalculatePaidParticipationFee(Context context, Guid? contactId)
        {
            if (contactId is null)
            {
                return;
            }

            context.Logger.LogInformation($"Calculating a paid participation fee for the contact {contactId}.");
            Contact contact = context.ServiceContext.Retrieve<Contact>(contactId.Value);
            contact.pc_PaidParticipationFee = new(context.ServiceContext.pc_PaymentSet
                .Where(p => p.pc_Contact.Id == contactId && p.pc_Amount != null)
                .Select(p => p.pc_Amount.Value)
                .ToList()
                .Sum());
            _ = context.ServiceContext.UpdateModifiedAttributes(contact);
        }

        public static void SetSentDebtReminderOn(Context context, Email email)
        {
            if (email.StatusCode != Email_StatusCode.PendingSend)
            {
                return;
            }

            switch (email.pc_Category)
            {
                case pc_EmailCategory.DebtReminder:
                    Contact debtReminderContact = context.ServiceContext.Retrieve<Contact>(email.RegardingObjectId);
                    debtReminderContact.pc_SentDebtReminderOn = email.ModifiedOn;
                    _ = context.ServiceContext.UpdateModifiedAttributes(debtReminderContact);
                    break;

                case pc_EmailCategory.SupporterWelcomeEmail:
                    Contact supporterWelcomeEmailContact = context.ServiceContext.Retrieve<Contact>(email.RegardingObjectId);
                    supporterWelcomeEmailContact.pc_SentSupporterWelcomeEmailOn = email.ModifiedOn;
                    _ = context.ServiceContext.UpdateModifiedAttributes(supporterWelcomeEmailContact);
                    break;
            }
        }

        private static void UpdateParticipationLevel(Context context, Contact contact)
        {
            context.Logger.LogInformation($"Calculating participation level for the contact {contact.Id}...");
            DateTime localNow = context.GetCurrentOrganizationTime();
            pc_Participation participation = context.ServiceContext.pc_ParticipationSet
                .Where(p => p.pc_Contact.Id == contact.Id && p.pc_From <= localNow.Date && (p.pc_Till == null || p.pc_Till >= localNow.Date))
                .FirstOrDefault();
            contact.pc_ParticipationLevel = participation?.pc_Level;
            _ = context.ServiceContext.UpdateModifiedAttributes(contact);
        }

        public static async Task UpdateRequiredParticipationFee(Context context)
        {
            ActionQueue actionQueue = new(context);
            IQueryable<Contact> contacts = context.ServiceContext.ContactSet
                .Select(c => new Contact
                {
                    ContactId = c.ContactId,
                    pc_RequiredParticipationFee = c.pc_RequiredParticipationFee,
                });

            actionQueue.AddForAll(contacts, contact =>
            {
                UpdateRequiredParticipationFee(context, contact);
                return Task.CompletedTask;
            });
            await actionQueue.ExecuteAll();
        }

        public static void UpdateRequiredParticipationFee(Context context, Contact contact)
        {
            context.Logger.LogInformation($"Calculating a required participation fee for the contact {contact.Id}...");
            List<pc_Participation> participations = context.ServiceContext.pc_ParticipationSet
                .Where(p => p.pc_Contact.Id == contact.Id && p.pc_From != null)
                .Select(p => new pc_Participation
                {
                    pc_From = p.pc_From,
                    pc_Till = p.pc_Till,
                })
                .ToList();
            List<pc_ParticipationFeeExemption> participationFeeExemptions = context.ServiceContext.pc_ParticipationFeeExemptionSet
                .Where(pfe => pfe.pc_Contact.Id == contact.Id && pfe.pc_From != null)
                .Select(p => new pc_ParticipationFeeExemption
                {
                    pc_From = p.pc_From,
                    pc_Till = p.pc_Till,
                })
                .ToList();

            contact.pc_RequiredParticipationFee = new();

            if (participations.Count != 0)
            {
                DateTime localNow = context.GetCurrentOrganizationTime();
                DateTime startDate = participations.Min(p => p.pc_From.Value);
                DateTime fromDate = startDate >= participantFeePeriod1Start ? startDate : participantFeePeriod1Start;
                DateTime? endDate = participations.Any(p => p.pc_Till is null) ? null : participations.Max(p => p.pc_Till);
                DateTime toDate = endDate <= localNow ? endDate.Value : localNow;
                DateTime toDateMonth = new(toDate.Year, toDate.Month, 1);

                for (DateTime thisMonthStart = new(startDate.Year, startDate.Month, 1); thisMonthStart < toDateMonth; thisMonthStart = thisMonthStart.AddMonths(1))
                {
                    DateTime nextMonthStart = thisMonthStart.AddMonths(1);
                    DateTime thisMonthEnd = nextMonthStart.AddDays(-1);

                    pc_ParticipationFeeExemption participationFeeExemption = participationFeeExemptions
                        .Where(p => p.pc_From <= thisMonthStart && (p.pc_Till is null || p.pc_Till >= thisMonthEnd))
                        .FirstOrDefault();

                    if (participationFeeExemption is not null)
                    {
                        continue;
                    }

                    pc_Participation participation = participations
                        .Where(p => p.pc_From < nextMonthStart && (p.pc_Till is null || p.pc_Till >= thisMonthStart))
                        .FirstOrDefault();

                    if (participation is null)
                    {
                        continue;
                    }

                    decimal participationFee = GetParticipationFee(thisMonthStart);
                    contact.pc_RequiredParticipationFee.Value += participationFee;
                }
            }

            _ = context.ServiceContext.UpdateModifiedAttributes(contact);
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
            ActionQueue actionQueue = new(context);
            IQueryable<Contact> contacts = context.ServiceContext.ContactSet
                .Select(c => new Contact
                {
                    ContactId = c.ContactId,
                    pc_ParticipationLevel = c.pc_ParticipationLevel,
                });

            actionQueue.AddForAll(contacts, contact =>
            {
                UpdateParticipationLevel(context, contact);
                return Task.CompletedTask;
            });
            await actionQueue.ExecuteAll();
        }

        public static void SendDebtReminder(Context context, Guid contactId)
        {
            context.EnsureAttributesNotEmpty(context.Settings, s => new { s.pc_EmailSender });
            Contact contact = context.ServiceContext.Retrieve<Contact>(contactId);

            if (contact.pc_Debt is null || contact.pc_Debt.Value <= 0)
            {
                return;
            }

            EntityReference contactReference = contact.ToEntityReference();
            Email email = Utils.CreateEmailFromTemplate(context, debtReminderEmailTemplateId, contactReference);
            email.pc_Category = pc_EmailCategory.DebtReminder;
            email.RegardingObjectId = contactReference;
            email.To = new List<ActivityParty> { new() { PartyId = contactReference } };
            context.OrganizationService.CreateWithoutNulls(email);
            Utils.SendEmail(context, email);
        }

        public static void ScheduleSynchronizeGoogleSupporterGroupMembers(Context context)
        {
            SynchronizeGoogleSupporterGroupMembersBase synchronizeGoogleSupporterGroupMembersBase = new()
            {
                Context = context,
            };
            synchronizeGoogleSupporterGroupMembersBase.Schedule(allowDuplicates: false);
        }

        public static bool IsValidForGoogleSupporterGroup(Contact contact)
        {
            return contact != null && contact.pc_ParticipationLevel == pc_ParticipationLevel.Supporter && contact.pc_WishesToBeActive == true && contact.pc_PaidParticipationFee.Value >= 2 && !string.IsNullOrEmpty(contact.EMailAddress1);
        }

        public static void SetDefaults(Contact contact)
        {
            contact.pc_PaidParticipationFee ??= new();
        }

        public static void UpdateStatusCode(Contact contact)
        {
            if (contact.pc_ParticipationLevel is null)
            {
                contact.StateCode = ContactState.Inactive;
                contact.StatusCode = Contact_StatusCode.Inactive;
            }
            else
            {
                contact.StateCode = ContactState.Active;
                contact.StatusCode = Contact_StatusCode.Active;
            }
        }

        public static void ClearParticipantInfo(Contact contact)
        {
            if (contact.StatusCode == Contact_StatusCode.Active)
            {
                return;
            }

            contact.Address1_City = null;
            contact.Address1_Country = null;
            contact.Address1_County = null;
            contact.Address1_Line1 = null;
            contact.Address1_PostalCode = null;
            contact.Address1_StateOrProvince = null;
            contact.Description = "Bijušais dalībnieks.";
            contact.pc_Neighbourhood = null;
            contact.pc_WishesToBeActive = false;
        }
    }
}
