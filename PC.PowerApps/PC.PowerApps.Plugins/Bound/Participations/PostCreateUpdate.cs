using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Bound.Participations
{
    public class PostCreateUpdate : PluginBase
    {
        protected override void Execute(PluginContext pluginContext)
        {
            PostCreateUpdatePluginContext<pc_Participation> context = (PostCreateUpdatePluginContext<pc_Participation>)pluginContext;
            pc_Participation participation = context.PostImage;

            if (context.IsAnyAttributeModified(p => new { p.pc_Contact, p.pc_From, p.pc_Level, p.pc_Till, p.StateCode }))
            {
                if (context.IsAnyAttributeModified(p => p.pc_Contact))
                {
                    ContactRepository.UpdateParticipationLevel(context, context.PreImage?.pc_Contact?.Id);
                }

                ContactRepository.UpdateParticipationLevel(context, participation.pc_Contact?.Id);
            }
        }

        protected override PluginContext GetPluginContext(IServiceProvider serviceProvider)
        {
            return new PostCreateUpdatePluginContext<pc_Participation>(serviceProvider, OrganizationServiceUser.System, OrganizationServiceUser.User);
        }
    }
}
