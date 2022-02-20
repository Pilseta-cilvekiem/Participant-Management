using PC.PowerApps.Common.Repositories;
using System.Threading.Tasks;

namespace PC.PowerApps.Common.ScheduledJobs
{
    public class RecalculateContact : ScheduledJob
    {
        public bool ParticipationLevel { get; set; }
        public bool RequiredParticipationFee { get; set; }

        public override Task Execute()
        {
            ContactRepository.Recalculate(Context, ParticipationLevel, RequiredParticipationFee);
            return Task.CompletedTask;
        }
    }
}
