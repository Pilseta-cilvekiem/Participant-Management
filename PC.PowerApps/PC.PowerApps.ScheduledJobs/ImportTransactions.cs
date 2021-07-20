using PC.PowerApps.Common.ScheduledJobs;
using System.Threading.Tasks;

namespace PC.PowerApps.ScheduledJobs
{
    internal class ImportTransactions : ImportTransactionsBase
    {
        public override Task Execute()
        {
            return Task.CompletedTask;
        }
    }
}
