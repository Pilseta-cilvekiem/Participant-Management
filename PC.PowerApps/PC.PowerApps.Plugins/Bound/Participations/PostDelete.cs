﻿using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using PC.PowerApps.Plugins.Extensions;
using System;

namespace PC.PowerApps.Plugins.Bound.Participations
{
    public class PostDelete : PluginBase
    {
        protected override void Execute(PluginContext pluginContext)
        {
            DeletePluginContext<pc_Participation> context = (DeletePluginContext<pc_Participation>)pluginContext;
            pc_Participation participation = context.PreImage;

            if (context.PluginExecutionContext.ParentContext?.IsDeleteOf(participation.pc_Contact) != true)
            {
                ContactRepository.UpdateParticipationLevel(context, participation.pc_Contact?.Id);
            }
        }

        protected override PluginContext GetPluginContext(IServiceProvider serviceProvider)
        {
            return new DeletePluginContext<pc_Participation>(serviceProvider, OrganizationServiceUser.System, OrganizationServiceUser.User);
        }
    }
}