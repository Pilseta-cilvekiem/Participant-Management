using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Plugins
{
    public class PreCreateUpdateScheduledJob : PluginBase
    {
        protected override void Execute(PluginContext pluginContext)
        {
            PreCreateUpdatePluginContext<pc_ScheduledJob> context = (PreCreateUpdatePluginContext<pc_ScheduledJob>)pluginContext;
            pc_ScheduledJob scheduledJob = context.PostImage;

            if (context.IsAnyAttributeModified(sj => new { sj.StatusCode }))
            {
                ScheduledJobRepository.SetDefaults(scheduledJob);
            }
        }

        protected override PluginContext GetPluginContext(IServiceProvider serviceProvider)
        {
            return new PreCreateUpdatePluginContext<pc_ScheduledJob>(serviceProvider, OrganizationServiceUser.System, OrganizationServiceUser.User);
        }
    }
}
