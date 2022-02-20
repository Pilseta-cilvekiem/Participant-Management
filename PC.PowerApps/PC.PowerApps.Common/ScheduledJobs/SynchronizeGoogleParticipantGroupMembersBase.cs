using System;
using System.Threading.Tasks;

namespace PC.PowerApps.Common.ScheduledJobs
{
    public class SynchronizeGoogleParticipantGroupMembersBase : ScheduledJob
    {
        public bool Members { get; set; }
        public bool Supporters { get; set; }

        public override Task Execute()
        {
            throw new NotImplementedException();
        }
    }
}
