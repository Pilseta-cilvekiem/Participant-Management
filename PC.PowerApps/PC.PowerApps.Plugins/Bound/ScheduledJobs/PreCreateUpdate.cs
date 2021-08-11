﻿using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Bound.ScheduledJobs
{
    public class PreCreateUpdate : PluginBase
    {
        protected override void ExecuteInternal(IServiceProvider serviceProvider)
        {
            PreCreateUpdatePluginContext<pc_ScheduledJob> context = new(serviceProvider, User.System, User.User);
            pc_ScheduledJob scheduledJob = context.PostImage;

            if (context.GetIsAnyAttributeModified(sj => new { sj.StatusCode }))
            {
                ScheduledJobRepository.SetDefaults(scheduledJob);
            }
        }
    }
}
