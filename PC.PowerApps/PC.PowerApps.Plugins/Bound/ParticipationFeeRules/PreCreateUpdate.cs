using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Bound.ParticipationFeeRules
{
    public class PreCreateUpdate : PluginBase
    {
        protected override void ExecuteInternal(IServiceProvider serviceProvider)
        {
            PreCreateUpdatePluginContext<pc_ParticipationFeeRule> context = new(serviceProvider, User.System, User.User);

            if (context.GetIsAnyAttributeModified(pfr => new { pfr.pc_From, pfr.pc_Till }))
            {
                pc_ParticipationFeeRule participationFeeRule = context.PostImage;
                ParticipationFeeRuleRepository.SetName(context, participationFeeRule);
            }
        }
    }
}
