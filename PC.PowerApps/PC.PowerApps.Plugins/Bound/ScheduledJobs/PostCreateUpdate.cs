using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Bound.ScheduledJobs
{
    public class PostCreateUpdate : PluginBase
    {
        protected override void Execute(PluginContext pluginContext)
        {
            PostCreateUpdatePluginContext<pc_ScheduledJob> context = (PostCreateUpdatePluginContext<pc_ScheduledJob>)pluginContext;
            pc_ScheduledJob scheduledJob = context.PostImage;

            if (context.IsAnyAttributeModified(sj => sj.StatusCode))
            {
                ScheduledJobRepository.CreateNextOccurence(context, scheduledJob);
            }
        }

        protected override PluginContext GetPluginContext(IServiceProvider serviceProvider)
        {
            return new PostCreateUpdatePluginContext<pc_ScheduledJob>(serviceProvider, OrganizationServiceUser.System, OrganizationServiceUser.User);
        }
    }
}
