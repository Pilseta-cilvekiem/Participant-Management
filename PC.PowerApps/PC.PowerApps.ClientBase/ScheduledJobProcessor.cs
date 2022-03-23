using Autofac;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using PC.PowerApps.Common;
using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Extensions;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace PC.PowerApps.ClientBase
{
    public class ScheduledJobProcessor
    {
        private readonly CrmServiceClientContext context;

        public ScheduledJobProcessor(CrmServiceClientContext context)
        {
            this.context = context;
        }

        public async Task ExecuteAll()
        {
            while (true)
            {
                context.ServiceContext.ClearChanges();
                DateTime utcNow = DateTime.UtcNow;
                pc_ScheduledJob scheduledJob = context.ServiceContext.pc_ScheduledJobSet
                    .Where(sj =>
                        sj.StateCode == pc_ScheduledJobState.Active &&
                        sj.pc_ExecuteOn <= utcNow &&
                        (sj.pc_PostponeUntil == null || sj.pc_PostponeUntil <= utcNow))
                    .OrderBy(sj => sj.pc_ExecuteOn)
                    .FirstOrDefault();

                if (scheduledJob == null)
                {
                    break;
                }

                await ProcessScheduledJob(scheduledJob);
            }
        }

        private async Task ProcessScheduledJob(pc_ScheduledJob scheduledJobRecord)
        {
            try
            {
                context.Logger.LogInformation($"Processing Scheduled Job {scheduledJobRecord.pc_Name} with Parameters {scheduledJobRecord.pc_Parameters}...");
                scheduledJobRecord.StatusCode = pc_ScheduledJob_StatusCode.InProgress;
                _ = context.ServiceContext.UpdateModifiedAttributes(scheduledJobRecord);

                Type scheduledJobBaseType = typeof(ScheduledJob).Assembly.GetType($"PC.PowerApps.Common.ScheduledJobs.{scheduledJobRecord.pc_Name}");
                Type scheduledJobDerivedType = typeof(ScheduledJobProcessor).Assembly.GetTypes()
                    .Where(t => scheduledJobBaseType.IsAssignableFrom(t))
                    .TakeSingleOrDefault() ?? scheduledJobBaseType;
                ScheduledJob scheduledJob = (ScheduledJob)JsonConvert.DeserializeObject(scheduledJobRecord.pc_Parameters, scheduledJobDerivedType);
                scheduledJob.Context = context;

                await scheduledJob.Execute();

                scheduledJobRecord.StateCode = pc_ScheduledJobState.Inactive;
                scheduledJobRecord.StatusCode = pc_ScheduledJob_StatusCode.Completed;
                _ = context.ServiceContext.UpdateModifiedAttributes(scheduledJobRecord);
                context.Logger.LogInformation($"Scheduled Job {scheduledJobRecord.pc_Name} has completed.");
            }
            catch (Exception e)
            {
                context.Logger.LogError(e, $"Scheduled job {scheduledJobRecord.pc_Name} has failed.");
                scheduledJobRecord.pc_Error = e.ToString().TakeFirst(CommonConstants.MultilineTextMaxLength);
                scheduledJobRecord.StatusCode = pc_ScheduledJob_StatusCode.Failed;
                _ = context.ServiceContext.UpdateModifiedAttributes(scheduledJobRecord);
            }
        }
    }
}
