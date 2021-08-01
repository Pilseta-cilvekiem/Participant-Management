using Autofac;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using PC.PowerApps.Common;
using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Extensions;
using System;
using System.Collections.Generic;
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
            IQueryable<pc_ScheduledJob> scheduledJobs = context.ServiceContext.pc_ScheduledJobSet
                .Where(sj => sj.StateCode == pc_ScheduledJobState.Active && sj.pc_ExecuteOn <= DateTime.UtcNow)
                .OrderBy(sj => sj.pc_ExecuteOn);

            foreach (pc_ScheduledJob scheduledJob in scheduledJobs)
            {
                await ProcessScheduledJob(scheduledJob);
            }
        }

        private async Task ProcessScheduledJob(pc_ScheduledJob scheduledJobRecord)
        {
            try
            {
                context.Logger.LogInformation($"Processing scheduled job {scheduledJobRecord.pc_Name} with parameters {scheduledJobRecord.pc_Parameters}...");
                scheduledJobRecord.StatusCode = pc_ScheduledJob_StatusCode.InProgress;
                _ = context.ServiceContext.UpdateModifiedAttributes(scheduledJobRecord);

                Type scheduledJobType = typeof(ScheduledJob).Assembly.GetType(scheduledJobRecord.pc_Name);
                ScheduledJob scheduledJob = (ScheduledJob)(scheduledJobRecord.pc_Parameters is null
                    ? Activator.CreateInstance(scheduledJobType)
                    : JsonConvert.DeserializeObject(scheduledJobRecord.pc_Parameters, scheduledJobType));
                scheduledJob.Context = context;

                await scheduledJob.Execute();

                scheduledJobRecord.StateCode = pc_ScheduledJobState.Inactive;
                scheduledJobRecord.StatusCode = pc_ScheduledJob_StatusCode.Completed;
                _ = context.ServiceContext.UpdateModifiedAttributes(scheduledJobRecord);
                context.Logger.LogInformation($"Scheduled job {scheduledJobRecord.pc_Name} has completed.");
            }
            catch (Exception e)
            {
                context.Logger.LogError(e, $"Scheduled job {scheduledJobRecord.pc_Name} has failed.");
                scheduledJobRecord.pc_Error = e.ToString().TakeFirst(Constants.MultilineTextMaxLength);
                scheduledJobRecord.StatusCode = pc_ScheduledJob_StatusCode.Failed;
                _ = context.ServiceContext.UpdateModifiedAttributes(scheduledJobRecord);
            }
        }
    }
}
