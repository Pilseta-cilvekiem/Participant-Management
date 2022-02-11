using PC.PowerApps.Common.Repositories;
using System.Threading.Tasks;

namespace PC.PowerApps.Common.ScheduledJobs
{
    public class UpdateContactRequiredParticipationFee : ScheduledJob
    {
        public override Task Execute()
        {
            ContactRepository.UpdateRequiredParticipationFee(Context);
            return Task.CompletedTask;
        }
    }
}
