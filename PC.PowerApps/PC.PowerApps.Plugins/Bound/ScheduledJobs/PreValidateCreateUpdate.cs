using PC.PowerApps.Common;
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

            if (context.IsValidationDisabled)
            {
                return;
            }

            context.EnsureAttributesNotModified(sj => new { sj.pc_CompletedOn, sj.pc_Error, sj.pc_Failures, sj.pc_StartedOn });

            pc_ScheduledJob scheduledJob = context.PostImage;

            if (context.Message != PluginMessage.Create || scheduledJob.StatusCode != pc_ScheduledJob_StatusCode.Pending)
            {
                context.EnsureAttributesNotModified(sj => new { sj.StatusCode });
            }

            if (context.PreImage?.StatusCode == pc_ScheduledJob_StatusCode.InProgress || context.PreImage?.StatusCode == pc_ScheduledJob_StatusCode.Completed)
            {
                context.EnsureAttributesNotModified(sj => new { sj.pc_ExecuteEvery, sj.pc_ExecuteOn, sj.pc_Name, sj.pc_Parameters, sj.pc_PostponeUntil, sj.pc_Recurrence });
            }

            context.EnsureCreatedOrUpdatedAttributesNotEmpty(sj => sj.pc_Name);

            if (context.Message != PluginMessage.Create)
            {
                context.EnsureCreatedOrUpdatedAttributesNotEmpty(sj => new { sj.pc_ExecuteOn, sj.pc_PostponeUntil });
            }

            if (scheduledJob.pc_ExecuteEvery != null || scheduledJob.pc_Recurrence != null)
            {
                context.EnsureCreatedOrUpdatedAttributesNotEmpty(sj => new { sj.pc_ExecuteEvery, sj.pc_Recurrence });
            }

            if (context.Message != PluginMessage.Create)
            {
                context.EnsureCreatedOrUpdatedAttributesNotEmpty(sj => sj.pc_Parameters);
            }

            if (context.GetIsAnyAttributeModified(sj => new { sj.pc_ExecuteOn, sj.pc_PostponeUntil }) && scheduledJob.pc_PostponeUntil < scheduledJob.pc_ExecuteOn)
            {
                throw context.CreateException(nameof(Resource.ScheduledJobPostponeUntilLessThanExecuteOn));
            }
        }
    }
}
