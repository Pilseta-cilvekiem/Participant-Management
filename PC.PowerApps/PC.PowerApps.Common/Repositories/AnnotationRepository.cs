using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.ScheduledJobs;

namespace PC.PowerApps.Common.Repositories
{
    public static class AnnotationRepository
    {
        public static void ScheduleImportSwedbankTransactions(Context context, Annotation annotation)
        {
            if (annotation.ObjectId is null || annotation.ObjectId.LogicalName != pc_BankAccount.EntityLogicalName)
            {
                return;
            }

            pc_BankAccount bankAccount = context.ServiceContext.Retrieve<pc_BankAccount>(annotation.ObjectId);
            bankAccount.pc_TransactionImportError = null;
            bankAccount.pc_TransactionImportStatus = pc_TransactionImportStatus.Pending;
            _ = context.ServiceContext.UpdateModifiedAttributes(bankAccount);

            ImportSwedbankTransactions importSwedbankTransactions = new ImportSwedbankTransactions
            {
                AnnotationId = annotation.Id,
                Context = context,
            };
            importSwedbankTransactions.Schedule();
        }
    }
}
