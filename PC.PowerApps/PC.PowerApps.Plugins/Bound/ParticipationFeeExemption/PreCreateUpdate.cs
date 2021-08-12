using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Bound.ParticipationFeeExemption
{
    public class PreCreateUpdate : PluginBase
    {
        protected override void ExecuteInternal(IServiceProvider serviceProvider)
        {
            PreCreateUpdatePluginContext<pc_ParticipationFeeExemption> context = new(serviceProvider, User.System, User.User);

            if (context.GetIsAnyAttributeModified(pfe => new { pfe.pc_Contact, pfe.pc_From, pfe.pc_Till }))
            {
                pc_ParticipationFeeExemption participationFeeExemption = context.PostImage;
                ParticipationFeeExemptionRepository.SetName(context, participationFeeExemption);
            }
        }
    }
}
