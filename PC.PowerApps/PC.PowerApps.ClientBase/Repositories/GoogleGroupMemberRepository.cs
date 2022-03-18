using Azure;
using Azure.Security.KeyVault.Secrets;
using Google.Apis.Admin.Directory.directory_v1;
using Google.Apis.Admin.Directory.directory_v1.Data;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Services;
using Microsoft.Extensions.Logging;
using PC.PowerApps.Common;
using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace PC.PowerApps.ClientBase.Repositories
{
    public static class GoogleGroupMemberRepository
    {
        public static async Task SynchronizeParticipants(CrmServiceClientContext context, bool members, bool supporters)
        {
            context.EnsureAttributesNotEmpty(context.Settings, s => new { s.pc_GoogleAdminEmail, s.pc_GoogleSupporterGroup });

            using MemoryStream memoryStream = new();
            using StreamWriter streamWriter = new(memoryStream);
            Response<KeyVaultSecret> response = await context.SecretClient.GetSecretAsync("GoogleServiceAccountKey");
            await streamWriter.WriteAsync(response.Value.Value);
            await streamWriter.FlushAsync();
            memoryStream.Position = 0;
            GoogleCredential googleCredential = GoogleCredential.FromStream(memoryStream)
                 .CreateScoped("https://www.googleapis.com/auth/admin.directory.group.member")
                 .CreateWithUser(context.Settings.pc_GoogleAdminEmail);
            BaseClientService.Initializer initializer = new()
            {
                HttpClientInitializer = googleCredential,
            };
            using DirectoryService directoryService = new(initializer);

            AsyncActionQueue asyncActionQueue = new(context);

            if (members)
            {
                asyncActionQueue.Add(async () => await SynchronizeParticipants(context, directoryService, CommonConstants.IsValidForGoogleMemberGroupExpression, context.Settings.pc_GoogleMemberGroup));
            }

            if (supporters)
            {
                asyncActionQueue.Add(async () => await SynchronizeParticipants(context, directoryService, CommonConstants.IsValidForGoogleSupporterGroupExpression, context.Settings.pc_GoogleSupporterGroup));
            }

            await asyncActionQueue.ExecuteAll();
        }

        private static async Task SynchronizeParticipants(Context context, DirectoryService directoryService, Expression<Func<Contact, bool>> contactFilterExpression, string group)
        {
            if (string.IsNullOrEmpty(group))
            {
                return;
            }

            MembersResource.ListRequest listRequest = directoryService.Members.List(group);
            Members groupMembers = await listRequest.ExecuteAsync();
            HashSet<string> groupMemberEmails = groupMembers.MembersValue
                .Select(m => m.Email)
                .ToHashSet();
            List<Contact> contacts = context.ServiceContext.ContactSet
                .Where(contactFilterExpression)
                .Select(c => new Contact
                {
                    ContactId = c.ContactId,
                    EMailAddress1 = c.EMailAddress1,
                    EMailAddress2 = c.EMailAddress2,
                })
                .ToList();
            List<string> contactEmails = contacts
                .Select(c => ContactRepository.GetEmail(c))
                .ToList();
            List<string> emailsToRemove = groupMemberEmails.Except(contactEmails).ToList();

            AsyncActionQueue asyncActionQueue = new(context);

            asyncActionQueue.AddForAll(emailsToRemove, async emailToRemove =>
            {
                context.Logger.LogInformation($"Removing {emailToRemove} from the group {group}.");
                MembersResource.DeleteRequest deleteRequest = directoryService.Members.Delete(group, emailToRemove);
                _ = await deleteRequest.ExecuteAsync();
            });

            asyncActionQueue.AddForAll(contacts, async contact =>
            {
                string email = ContactRepository.GetEmail(contact);

                if (groupMemberEmails.Contains(email))
                {
                    return;
                }

                context.Logger.LogInformation($"Adding {email} to the group {group}.");
                Member member = new()
                {
                    Email = email,
                };
                MembersResource.InsertRequest insertRequest = directoryService.Members.Insert(member, group);
                Member insertResult = await insertRequest.ExecuteAsync();
                MembersResource.GetRequest getRequest = directoryService.Members.Get(group, insertResult.Id);
                Member getResult = await getRequest.ExecuteAsync();

                if (getResult.Email != email)
                {
                    context.Logger.LogInformation($"Updating Contact {contact.Id} Email from {email} to {getResult.Email}.");
                    ContactRepository.SetEmail(contact, getResult.Email);
                    _ = context.ServiceContext.UpdateModifiedAttributes(contact);
                }
            });

            await asyncActionQueue.ExecuteAll();
        }
    }
}
