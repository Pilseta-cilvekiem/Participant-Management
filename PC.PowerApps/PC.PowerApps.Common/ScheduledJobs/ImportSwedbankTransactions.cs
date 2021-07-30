using PC.PowerApps.Common.Repositories;
using System;
using System.Threading.Tasks;

namespace PC.PowerApps.Common.ScheduledJobs
{
    public class ImportSwedbankTransactions : ScheduledJob
    {
        public Guid BankAccountId { get; set; }

        private readonly Lazy<TransactionRepository> transactionRepository;

        private TransactionRepository TransactionRepository => transactionRepository.Value;

        public ImportSwedbankTransactions(Lazy<TransactionRepository> transactionRepository)
        {
            this.transactionRepository = transactionRepository;
        }

        public override Task Execute()
        {
            TransactionRepository.ImportFromAnnotation(BankAccountId);
            return Task.CompletedTask;
        }
    }
}
