using PC.PowerApps.Common.Entities.Dataverse;
using System.Linq;

namespace PC.PowerApps.Common.Repositories
{
    public static class ParticipationRepository
    {
        public static pc_Participation GetParticipationWithinSamePeriod(Context context, pc_Participation participation)
        {
            IQueryable<pc_Participation> otherParticipationQuery = context.ServiceContext.pc_ParticipationSet
                .Where(p => p.pc_Contact.Id == participation.pc_Contact.Id && p.Id != participation.Id && (p.pc_Till == null || p.pc_Till >= participation.pc_From));

            if (participation.pc_Till is not null)
            {
                otherParticipationQuery = otherParticipationQuery
                    .Where(p => p.pc_From <= participation.pc_Till);
            }

            pc_Participation otherParticipation = otherParticipationQuery.FirstOrDefault();
            return otherParticipation;
        }
    }
}
