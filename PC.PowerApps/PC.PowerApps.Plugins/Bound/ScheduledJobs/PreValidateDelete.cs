using Microsoft.Xrm.Sdk;
using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Bound.ScheduledJobs
{
    public class PreValidateDelete : PluginBase
    {
        protected override void ExecuteInternal(IServiceProvider serviceProvider)
        {
            DeletePluginContext<pc_ScheduledJob> context = new(serviceProvider, User.System, User.User);
            pc_ScheduledJob scheduledJob = context.PreImage;

            if (context.IsValidationDisabled)
            {
                return;
            }

            if (scheduledJob.StatusCode == pc_ScheduledJob_StatusCode.InProgress)
            {
                throw new InvalidPluginExecutionException("Cannot delete Scheduled Job with Status Reason In Progress.");
            }
        }
    }
}
