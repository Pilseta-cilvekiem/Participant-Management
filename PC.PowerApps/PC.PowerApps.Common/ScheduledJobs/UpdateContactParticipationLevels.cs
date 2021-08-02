using PC.PowerApps.Common.Repositories;
using System.Threading.Tasks;

namespace PC.PowerApps.Common.ScheduledJobs
{
    public class UpdateContactParticipationLevels : ScheduledJob
    {
        public override Task Execute()
        {
            ContactRepository.UpdateParticipationLevels(Context);
            return Task.CompletedTask;
        }
    }
}
