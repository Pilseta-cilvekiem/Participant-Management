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

            ImportSwedbankTransactions importSwedbankTransactions = new ImportSwedbankTransactions
            {
                AnnotationId = annotation.Id,
                Context = context,
            };
            importSwedbankTransactions.Schedule();
        }
    }
}
