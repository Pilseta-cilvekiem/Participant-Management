using CrmEarlyBound;
using Newtonsoft.Json;
using PC.PowerApps.Common.Extensions;
using PC.PowerApps.Plugins;
using System.Threading.Tasks;

namespace PC.PowerApps.Common
{
    public abstract class ScheduledJob
    {
        [JsonIgnore]
        public Context Context { get; set; }

        public abstract Task Execute();

        public void Schedule()
        {
            pc_ScheduledJob scheduledJob = new pc_ScheduledJob
            {
                pc_Name = GetType().FullName,
                pc_Parameters = JsonConvert.SerializeObject(this),
            };
            Context.OrganizationService.CreateWithoutNulls(scheduledJob);
        }
    }
}
