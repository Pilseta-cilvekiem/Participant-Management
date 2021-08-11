using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using PC.PowerApps.Plugins.Extensions;
using System;

namespace PC.PowerApps.Plugins.Bound.Participations
{
    public class PostDelete : PluginBase
    {
        protected override void ExecuteInternal(IServiceProvider serviceProvider)
        {
            DeletePluginContext<pc_Participation> context = new(serviceProvider, User.System, User.User);
            pc_Participation participation = context.PreImage;

            if (context.PluginExecutionContext.ParentContext?.IsDeleteOf(participation.pc_Contact) != true)
            {
                ContactRepository.UpdateParticipationLevel(context, participation.pc_Contact?.Id);
            }
        }
    }
}
