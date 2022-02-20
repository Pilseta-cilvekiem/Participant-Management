using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Bound.Participations
{
    public class PostCreateUpdate : PluginBase
    {
        protected override void ExecuteInternal(IServiceProvider serviceProvider)
        {
            PostCreateUpdatePluginContext<pc_Participation> context = new(serviceProvider, User.System, User.User);
            pc_Participation participation = context.PostImage;

            if (context.GetIsAnyAttributeModified(p => new { p.pc_Contact, p.pc_From, p.pc_Level, p.pc_Till, p.StateCode }))
            {
                if (context.GetIsAnyAttributeModified(p => p.pc_Contact))
                {
                    ContactRepository.Recalculate(context, context.PreImage?.pc_Contact?.Id, participationLevel: true, requiredParticipationFee: true);
                }

                ContactRepository.Recalculate(context, participation.pc_Contact?.Id, participationLevel: true, requiredParticipationFee: true);
            }
        }
    }
}
