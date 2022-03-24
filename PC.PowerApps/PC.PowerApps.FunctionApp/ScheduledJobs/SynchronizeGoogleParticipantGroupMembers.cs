using PC.PowerApps.ClientBase;
using PC.PowerApps.ClientBase.Repositories;
using PC.PowerApps.Common.ScheduledJobs;
using System.Threading.Tasks;

namespace PC.PowerApps.FunctionApp.ScheduledJobs
{
    public class SynchronizeGoogleParticipantGroupMembers : SynchronizeGoogleParticipantGroupMembersBase
    {
        protected new CrmServiceClientContext Context => (CrmServiceClientContext)base.Context;

        public override async Task Execute()
        {
            await GoogleGroupMemberRepository.SynchronizeParticipants(Context, Members, Supporters);
        }
    }
}
