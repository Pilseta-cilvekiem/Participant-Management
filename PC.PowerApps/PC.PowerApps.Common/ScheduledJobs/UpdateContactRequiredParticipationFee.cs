using PC.PowerApps.Common.Repositories;
using System.Threading.Tasks;

namespace PC.PowerApps.Common.ScheduledJobs
{
    public class UpdateContactRequiredParticipationFee : ScheduledJob
    {
        public override async Task Execute()
        {
            await ContactRepository.UpdateRequiredParticipationFee(Context);
        }
    }
}
