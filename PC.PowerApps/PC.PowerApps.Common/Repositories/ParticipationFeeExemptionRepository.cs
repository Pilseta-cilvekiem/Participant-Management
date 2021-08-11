using PC.PowerApps.Common.Entities.Dataverse;
using System.Linq;

namespace PC.PowerApps.Common.Repositories
{
    public static class ParticipationFeeExemptionRepository
    {
        public static pc_ParticipationFeeExemption GetParticipationFeeExemptionWithinSamePeriod(Context context, pc_ParticipationFeeExemption participationFeeExemption)
        {
            IQueryable<pc_ParticipationFeeExemption> otherParticipationFeeExemptionQuery = context.ServiceContext.pc_ParticipationFeeExemptionSet
                .Where(pfe => pfe.pc_Contact.Id == participationFeeExemption.pc_Contact.Id && pfe.Id != participationFeeExemption.Id && (pfe.pc_Till == null || pfe.pc_Till >= participationFeeExemption.pc_From));

            if (participationFeeExemption.pc_Till is not null)
            {
                otherParticipationFeeExemptionQuery = otherParticipationFeeExemptionQuery
                    .Where(p => p.pc_From <= participationFeeExemption.pc_Till);
            }

            pc_ParticipationFeeExemption otherParticipationFeeExemption = otherParticipationFeeExemptionQuery.FirstOrDefault();
            return otherParticipationFeeExemption;
        }
    }
}
