using PC.PowerApps.ClientBase.Repositories;
using PC.PowerApps.Common.ScheduledJobs;
using System.Threading.Tasks;

namespace PC.PowerApps.ClientBase.ScheduledJobs
{
    public class SynchronizeGoogleSupporterGroupMembers : SynchronizeGoogleSupporterGroupMembersBase
    {
        public override async Task Execute()
        {
            await GoogleGroupMemberRepository.SynchronizeSupporters(Context);
        }
    }
}
