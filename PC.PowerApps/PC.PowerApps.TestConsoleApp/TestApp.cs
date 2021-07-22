using PC.PowerApps.ClientBase;
using PC.PowerApps.ScheduledJobs.Jobs;
using System;
using System.Threading.Tasks;

namespace PC.PowerApps.TestConsoleApp
{
    internal class TestApp
    {
        private readonly CrmServiceClientContext context;

        public TestApp(CrmServiceClientContext context)
        {
            this.context = context;
        }

        public Task Execute()
        {
            ImportSwedbankTransactions importTransactionsBase = new ImportSwedbankTransactions
            {
                BankAccountId = new Guid("177b97ba-92e8-eb11-bacb-000d3abb9ce3"),
                Context = context,
            };
            importTransactionsBase.Execute();
            return Task.CompletedTask;
        }
    }
}
