using PC.PowerApps.Common.Repositories;
using System;
using System.Threading.Tasks;

namespace PC.PowerApps.Common.ScheduledJobs
{
    public class ImportTransactions : ScheduledJob
    {
        public Guid BankAccountId { get; set; }

        public override Task Execute()
        {
            TransactionRepository.ImportFromBankAccount(Context, BankAccountId);
            return Task.CompletedTask;
        }
    }
}
