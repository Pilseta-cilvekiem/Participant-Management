using System;
using System.Threading.Tasks;

namespace PC.PowerApps.Common.ScheduledJobs
{
    public class ImportSwedbankTransactionsBase : ScheduledJob
    {
        public Guid BankAccountId { get; set; }

        public override Task Execute()
        {
            throw new NotImplementedException();
        }
    }
}
