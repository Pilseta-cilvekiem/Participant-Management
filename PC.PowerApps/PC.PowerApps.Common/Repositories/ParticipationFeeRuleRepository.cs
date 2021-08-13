using PC.PowerApps.Common.Entities.Dataverse;
using System.Linq;

namespace PC.PowerApps.Common.Repositories
{
    public static class ParticipationFeeRuleRepository
    {
        public static pc_ParticipationFeeRule GetParticipationFeeRuleWithinSamePeriod(Context context, pc_ParticipationFeeRule participationFeeRule)
        {
            IQueryable<pc_ParticipationFeeRule> otherParticipationFeeRuleQuery = context.ServiceContext.pc_ParticipationFeeRuleSet
                .Where(pfr => pfr.Id != participationFeeRule.Id);

            if (participationFeeRule.pc_From is not null)
            {
                otherParticipationFeeRuleQuery = otherParticipationFeeRuleQuery
                    .Where(pfr => pfr.pc_Till == null || pfr.pc_Till >= participationFeeRule.pc_From);
            }

            if (participationFeeRule.pc_Till is not null)
            {
                otherParticipationFeeRuleQuery = otherParticipationFeeRuleQuery
                    .Where(p => p.pc_From == null || p.pc_From <= participationFeeRule.pc_Till);
            }

            pc_ParticipationFeeRule otherParticipationFeeRule = otherParticipationFeeRuleQuery.FirstOrDefault();
            return otherParticipationFeeRule;
        }
    }
}
