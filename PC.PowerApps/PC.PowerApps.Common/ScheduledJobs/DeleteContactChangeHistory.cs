using PC.PowerApps.Common.Repositories;
using System;
using System.Threading.Tasks;

namespace PC.PowerApps.Common.ScheduledJobs
{
    public class DeleteContactChangeHistory : ScheduledJob
    {
        public Guid ContactId { get; set; }

        public override Task Execute()
        {
            ContactRepository.DeleteChangeHistory(Context, ContactId);
            return Task.CompletedTask;
        }
    }
}
