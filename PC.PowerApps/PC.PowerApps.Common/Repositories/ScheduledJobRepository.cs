using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Extensions;
using System;

namespace PC.PowerApps.Common.Repositories
{
    public static class ScheduledJobRepository
    {
        public static void SetDefaults(pc_ScheduledJob scheduledJob)
        {
            switch (scheduledJob.StatusCode)
            {
                case pc_ScheduledJob_StatusCode.Completed:
                    scheduledJob.pc_CompletedOn = scheduledJob.ModifiedOn;
                    scheduledJob.pc_Error = null;
                    break;

                case pc_ScheduledJob_StatusCode.Failed:
                    scheduledJob.pc_PostponeUntil = scheduledJob.ModifiedOn.Value.AddHours(1);
                    scheduledJob.pc_Failures = scheduledJob.pc_Failures.GetValueOrDefault() + 1;
                    break;

                case pc_ScheduledJob_StatusCode.InProgress:
                    scheduledJob.pc_Error = null;
                    scheduledJob.pc_StartedOn = scheduledJob.ModifiedOn;
                    break;

                case pc_ScheduledJob_StatusCode.Pending:
                    scheduledJob.pc_CompletedOn = null;
                    scheduledJob.pc_Error = null;
                    scheduledJob.pc_ExecuteOn ??= scheduledJob.ModifiedOn;
                    scheduledJob.pc_Failures ??= 0;
                    scheduledJob.pc_Parameters ??= "{}";
                    break;
            }
        }

        public static void CreateNextOccurence(Context context, pc_ScheduledJob scheduledJob)
        {
            if (scheduledJob.StatusCode != pc_ScheduledJob_StatusCode.Completed || scheduledJob.pc_Recurrence is null || scheduledJob.pc_ExecuteOn is null || scheduledJob.pc_ExecuteEvery is null)
            {
                return;
            }

            DateTime modifiedOnLocal = context.UtcToOrganizationTime(scheduledJob.ModifiedOn.Value);
            DateTime nextExecuteOnLocal = context.UtcToOrganizationTime(scheduledJob.pc_ExecuteOn.Value);

            do
            {
                nextExecuteOnLocal = scheduledJob.pc_Recurrence switch
                {
                    pc_Recurrence.Day => nextExecuteOnLocal.AddDays(scheduledJob.pc_ExecuteEvery.Value),
                    pc_Recurrence.Month => nextExecuteOnLocal.AddMonths(scheduledJob.pc_ExecuteEvery.Value),
                    _ => throw new InvalidOperationException($"Scheduled job recurrence {scheduledJob.pc_Recurrence} is not supported."),
                };
            } while (nextExecuteOnLocal < modifiedOnLocal);

            pc_ScheduledJob newScheduledJob = new()
            {
                pc_ExecuteEvery = scheduledJob.pc_ExecuteEvery,
                pc_ExecuteOn = context.OrganizationToUtcTime(nextExecuteOnLocal),
                pc_Name = scheduledJob.pc_Name,
                pc_Parameters = scheduledJob.pc_Parameters,
                pc_Recurrence = scheduledJob.pc_Recurrence,
            };
            context.OrganizationService.CreateWithoutNulls(newScheduledJob);
        }
    }
}
