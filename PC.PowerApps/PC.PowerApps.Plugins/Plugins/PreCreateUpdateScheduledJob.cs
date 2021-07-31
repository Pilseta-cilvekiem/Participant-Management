using PC.PowerApps.Common.Entities.Dataverse;
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

            if (context.IsModifiedAnyAttribute(sj => new { sj.StatusCode }))
            {
                switch (scheduledJob.StatusCode)
                {
                    case pc_ScheduledJob_StatusCode.Completed:
                        scheduledJob.pc_CompletedOn = scheduledJob.ModifiedOn;
                        break;

                    case pc_ScheduledJob_StatusCode.Failed:
                        scheduledJob.pc_ExecuteOn = scheduledJob.ModifiedOn.Value.AddHours(1);
                        scheduledJob.pc_Failures = scheduledJob.pc_Failures.GetValueOrDefault() + 1;
                        break;

                    case pc_ScheduledJob_StatusCode.InProgress:
                        scheduledJob.pc_Error = null;
                        scheduledJob.pc_StartedOn = scheduledJob.ModifiedOn;
                        break;

                    case pc_ScheduledJob_StatusCode.Pending:
                        scheduledJob.pc_CompletedOn = null;
                        scheduledJob.pc_ExecuteOn ??= scheduledJob.ModifiedOn;
                        scheduledJob.pc_Failures ??= 0;
                        break;
                }
            }
        }

        protected override PluginContext GetPluginContext(IServiceProvider serviceProvider)
        {
            return new PreCreateUpdatePluginContext<pc_ScheduledJob>(serviceProvider, OrganizationServiceUser.System, OrganizationServiceUser.User);
        }
    }
}
