using Microsoft.Extensions.Logging;
using PC.PowerApps.Common.Entities.Dataverse;
using System;
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

        public static void SetName(Context context, pc_ParticipationFeeRule participationFeeRule)
        {
            context.Logger.LogInformation($"Setting a Name for the Participation Fee Rule {participationFeeRule.Id}...");
            participationFeeRule.pc_Name = Utils.CreateName(100, context.FormatDate(participationFeeRule.pc_From), "-", context.FormatDate(participationFeeRule.pc_Till));
        }
    }
}
