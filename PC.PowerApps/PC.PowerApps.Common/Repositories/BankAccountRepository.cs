using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.ScheduledJobs;

namespace PC.PowerApps.Common.Repositories
{
    public static class BankAccountRepository
    {
        public static void SetTransactionImportStatusToPending(Context context, pc_BankAccount bankAccount)
        {
            if (bankAccount.pc_TransactionImportFile == null)
            {
                return;
            }

            bankAccount.pc_TransactionImportError = null;
            bankAccount.pc_TransactionImportStatus = pc_TransactionImportStatus.Pending;
        }

        public static void ScheduleImportTransactions(Context context, pc_BankAccount bankAccount)
        {
            if (bankAccount.pc_TransactionImportFile == null)
            {
                return;
            }
            
            ImportTransactions importSwedbankTransactions = new ImportTransactions
            {
                BankAccountId = bankAccount.Id,
                Context = context,
            };
            importSwedbankTransactions.Schedule(allowDuplicates: false);
        }
    }
}
