using PC.PowerApps.Common.Repositories;
using System.Threading.Tasks;

namespace PC.PowerApps.Common.ScheduledJobs
{
    public class RecalculateContact : ScheduledJob
    {
        public bool ParticipantTill { get; set; }
        public bool ParticipationLevel { get; set; }
        public bool RequiredParticipationFee { get; set; }

        public override Task Execute()
        {
            ContactRepository.Recalculate(Context, ParticipantTill, ParticipationLevel, RequiredParticipationFee);
            return Task.CompletedTask;
        }
    }
}
