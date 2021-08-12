using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Bound.Participations
{
    public class PreCreateUpdate : PluginBase
    {
        protected override void ExecuteInternal(IServiceProvider serviceProvider)
        {
            PreCreateUpdatePluginContext<pc_Participation> context = new(serviceProvider, User.System, User.User);

            if (context.GetIsAnyAttributeModified(p => new { p.pc_Contact, p.pc_From, p.pc_Till }))
            {
                pc_Participation participation = context.PostImage;
                ParticipationRepository.SetName(context, participation);
            }
        }
    }
}
