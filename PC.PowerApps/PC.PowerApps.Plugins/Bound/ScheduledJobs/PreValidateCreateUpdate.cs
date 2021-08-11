using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Bound.ScheduledJobs
{
    public class PreValidateCreateUpdate : PluginBase
    {
        protected override void ExecuteInternal(IServiceProvider serviceProvider)
        {
            PreCreateUpdatePluginContext<pc_ScheduledJob> context = new(serviceProvider, User.System, User.User);
            context.EnsureAttributesNotModified(sj => new { sj.pc_CompletedOn, sj.pc_Error, sj.pc_Failures, sj.pc_StartedOn });

            pc_ScheduledJob scheduledJob = context.PostImage;

            if (scheduledJob.StatusCode != pc_ScheduledJob_StatusCode.Pending)
            {
                context.EnsureAttributesNotModified(sj => new { sj.StatusCode });
            }

            context.EnsureCreatedOrUpdatedAttributesNotEmpty(sj => sj.pc_Name);

            if (scheduledJob.pc_ExecuteEvery is not null || scheduledJob.pc_Recurrence is not null)
            {
                context.EnsureCreatedOrUpdatedAttributesNotEmpty(sj => new { sj.pc_ExecuteEvery, sj.pc_Recurrence });
            }

            if (context.Message != PluginMessage.Create)
            {
                context.EnsureCreatedOrUpdatedAttributesNotEmpty(sj => sj.pc_Parameters);
            }

        }
    }
}
