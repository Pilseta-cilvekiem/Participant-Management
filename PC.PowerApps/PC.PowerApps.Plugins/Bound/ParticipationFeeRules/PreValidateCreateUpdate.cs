using Microsoft.Xrm.Sdk;
using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Extensions;
using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Bound.ParticipationFeeRules
{
    public class PreValidateCreateUpdate : PluginBase
    {
        protected override void ExecuteInternal(IServiceProvider serviceProvider)
        {
            PreCreateUpdatePluginContext<pc_ParticipationFeeRule> context = new(serviceProvider, User.System, User.User);

            if (context.IsValidationDisabled)
            {
                return;
            }

            context.EnsureAttributesNotModified(pfr => pfr.pc_Name);

            pc_ParticipationFeeRule participationFeeRule = context.PostImage;

            if (participationFeeRule.StatusCode != pc_ParticipationFeeRule_StatusCode.Active)
            {
                context.EnsureAttributesNotModified(pfr => pfr.StatusCode);
            }

            context.EnsureCreatedOrUpdatedAttributesNotEmpty(pfr => new { pfr.pc_Amount, pfr.pc_From });

            if (context.GetIsAnyAttributeModified(pfr => pfr.pc_From) && participationFeeRule.pc_From.Value.Day != 1)
            {
                throw new InvalidPluginExecutionException("Participation Fee Rule From must be a first day of the month.");
            }

            if (context.GetIsAnyAttributeModified(pfr => pfr.pc_Till) && participationFeeRule.pc_Till is not null && !participationFeeRule.pc_Till.Value.IsLastDayOfMonth())
            {
                throw new InvalidPluginExecutionException("Participation Fee Rule Till must be a last day of the month.");
            }

            if (context.GetIsAnyAttributeModified(pfr => new { pfr.pc_From, pfr.pc_Till }) && participationFeeRule.pc_From > participationFeeRule.pc_Till)
            {
                throw new InvalidPluginExecutionException("Participation Fee Rule From must be less than or equal to Till.");
            }

            if (context.GetIsAnyAttributeModified(pfr => new { pfr.pc_From, pfr.pc_Till }))
            {
                pc_ParticipationFeeRule otherParticipationFeeRule = ParticipationFeeRuleRepository.GetParticipationFeeRuleWithinSamePeriod(context, participationFeeRule);

                if (otherParticipationFeeRule is not null)
                {
                    throw new InvalidPluginExecutionException("There is another Participation Fee Rule within the same period.");
                }
            }
        }
    }
}
