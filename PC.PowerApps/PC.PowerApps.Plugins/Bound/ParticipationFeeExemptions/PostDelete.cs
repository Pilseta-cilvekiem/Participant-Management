using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using PC.PowerApps.Plugins.Extensions;
using System;

namespace PC.PowerApps.Plugins.Bound.ParticipationFeeExemptions
{
    public class PostDelete : PluginBase
    {
        protected override void ExecuteInternal(IServiceProvider serviceProvider)
        {
            DeletePluginContext<pc_ParticipationFeeExemption> context = new(serviceProvider, User.System, User.User);
            pc_ParticipationFeeExemption participationFeeExemption = context.PreImage;

            if (context.PluginExecutionContext.ParentContext?.IsDeleteOf(participationFeeExemption.pc_Contact) != true)
            {
                ContactRepository.Recalculate(context, participationFeeExemption.pc_Contact?.Id, participantTill: false, participationLevel: false, requiredParticipationFee: true);
            }
        }
    }
}
