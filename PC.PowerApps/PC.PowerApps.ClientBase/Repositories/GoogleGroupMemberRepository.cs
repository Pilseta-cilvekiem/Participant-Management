using Google.Apis.Admin.Directory.directory_v1;
using Google.Apis.Admin.Directory.directory_v1.Data;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Services;
using Microsoft.Extensions.Logging;
using PC.PowerApps.Common;
using PC.PowerApps.Common.Entities.Dataverse;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace PC.PowerApps.ClientBase.Repositories
{
    public static class GoogleGroupMemberRepository
    {
        public static async Task SynchronizeSupporters(Context context)
        {
            context.VerifyAttributesNotEmpty(context, context.Settings, s => new { s.pc_GoogleAdminEmail, s.pc_GoogleServiceAccountKey, s.pc_GoogleSupporterGroup });

            using MemoryStream memoryStream = new();
            using StreamWriter streamWriter = new(memoryStream);
            await streamWriter.WriteAsync(context.Settings.pc_GoogleServiceAccountKey);
            await streamWriter.FlushAsync();
            memoryStream.Position = 0;
            GoogleCredential googleCredential = GoogleCredential.FromStream(memoryStream)
                 .CreateScoped("https://www.googleapis.com/auth/admin.directory.group.member")
                 .CreateWithUser(context.Settings.pc_GoogleAdminEmail);
            BaseClientService.Initializer initializer = new()
            {
                HttpClientInitializer = googleCredential,
            };
            using DirectoryService service = new(initializer);
            MembersResource.ListRequest listRequest = service.Members.List(context.Settings.pc_GoogleSupporterGroup);
            Members members = await listRequest.ExecuteAsync();
            HashSet<string> groupMemberEmails = members.MembersValue
                .Select(m => m.Email)
                .ToHashSet();
            List<Contact> activeSupporters = context.ServiceContext.ContactSet
                .Where(c => c.StateCode == ContactState.Active && c.pc_ParticipationLevel == pc_ParticipationLevel.Supporter && c.pc_WishesToBeActive == true && c.pc_PaidParticipationFee.Value >= 2 && c.EMailAddress1 != null && c.EMailAddress1 != string.Empty)
                .Select(c => new Contact
                {
                    ContactId = c.ContactId,
                    EMailAddress1 = c.EMailAddress1,
                })
                .ToList();
            List<string> activeSupporterEmails = activeSupporters
                .Select(c => c.EMailAddress1)
                .ToList();
            List<string> emailsToRemove = groupMemberEmails.Except(activeSupporterEmails).ToList();

            foreach (string emailToRemove in emailsToRemove)
            {
                context.Logger.LogInformation($"Removing {emailToRemove} from the supporter group.");
                MembersResource.DeleteRequest deleteRequest = service.Members.Delete(context.Settings.pc_GoogleSupporterGroup, emailToRemove);
                _ = await deleteRequest.ExecuteAsync();
            }

            foreach (Contact activeSupporter in activeSupporters)
            {
                if (groupMemberEmails.Contains(activeSupporter.EMailAddress1))
                {
                    continue;
                }

                context.Logger.LogInformation($"Adding {activeSupporter.EMailAddress1} to the supporter group.");
                Member member = new()
                {
                    Email = activeSupporter.EMailAddress1,
                };
                MembersResource.InsertRequest insertRequest = service.Members.Insert(member, context.Settings.pc_GoogleSupporterGroup);
                Member insertResult = await insertRequest.ExecuteAsync();
                MembersResource.GetRequest getRequest = service.Members.Get(context.Settings.pc_GoogleSupporterGroup, insertResult.Id);
                Member getResult = await getRequest.ExecuteAsync();

                if (getResult.Email != activeSupporter.EMailAddress1)
                {
                    context.Logger.LogInformation($"Updating contact {activeSupporter.Id} email from {activeSupporter.EMailAddress1} to {getResult.Email}.");
                    activeSupporter.EMailAddress1 = getResult.Email;
                    _ = context.ServiceContext.UpdateModifiedAttributes(activeSupporter);
                }
            }
        }
    }
}
