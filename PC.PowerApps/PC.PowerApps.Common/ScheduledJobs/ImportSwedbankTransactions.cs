using PC.PowerApps.Common.Repositories;
using System;
using System.Threading.Tasks;

namespace PC.PowerApps.Common.ScheduledJobs
{
    public class ImportSwedbankTransactions : ScheduledJob
    {
        public Guid AnnotationId { get; set; }

        public override Task Execute()
        {
            TransactionRepository.ImportFromAnnotation(Context, AnnotationId);
            return Task.CompletedTask;
        }
    }
}
