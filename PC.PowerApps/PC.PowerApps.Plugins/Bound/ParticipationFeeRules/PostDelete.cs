using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Extensions;
using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Bound.ParticipationFeeRules
{
    public class PostDelete : PluginBase
    {
        protected override void ExecuteInternal(IServiceProvider serviceProvider)
        {
            DeletePluginContext<pc_ParticipationFeeRule> context = new(serviceProvider, User.System, User.User);
            pc_ParticipationFeeRule participationFeeRule = context.PreImage;
            DateTime firstDayOfCurrentMonth = context.GetCurrentOrganizationTime().GetFirstDayOfMonth();

            if (participationFeeRule.pc_From < firstDayOfCurrentMonth)
            {
                ContactRepository.ScheduleRecalculate(context, participantTill: false, participationLevel: false, requiredParticipationFee: true);
            }
        }
    }
}
