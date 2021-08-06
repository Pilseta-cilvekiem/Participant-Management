using Newtonsoft.Json;
using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Extensions;
using System.Linq;
using System.Threading.Tasks;

namespace PC.PowerApps.Common
{
    public abstract class ScheduledJob
    {
        [JsonIgnore]
        public Context Context { get; set; }

        public abstract Task Execute();

        public void Schedule(bool allowDuplicates)
        {
            string name = GetType().FullName;
            string parameters = JsonConvert.SerializeObject(this);
            pc_ScheduledJob scheduledJob;

            if (!allowDuplicates)
            {
                scheduledJob = Context.ServiceContext.pc_ScheduledJobSet
                    .Where(sj => sj.pc_Name == name && sj.pc_Parameters == parameters && sj.StatusCode == pc_ScheduledJob_StatusCode.Pending)
                    .FirstOrDefault();

                if (scheduledJob is not null)
                {
                    return;
                }
            }

            scheduledJob = new pc_ScheduledJob
            {
                pc_Name = name,
                pc_Parameters = parameters,
            };
            Context.OrganizationService.CreateWithoutNulls(scheduledJob);
        }
    }
}
