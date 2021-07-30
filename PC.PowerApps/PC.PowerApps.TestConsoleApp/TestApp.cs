using PC.PowerApps.ClientBase;
using PC.PowerApps.Common.Repositories;
using System;
using System.Threading.Tasks;

namespace PC.PowerApps.TestConsoleApp
{
    internal class TestApp
    {
        private readonly CrmServiceClientContext context;
        private readonly TransactionRepository transactionRepository;

        public TestApp(CrmServiceClientContext context, TransactionRepository transactionRepository)
        {
            this.context = context;
            this.transactionRepository = transactionRepository;
        }

        public Task Execute()
        {
            transactionRepository.ImportFromAnnotation(new Guid("56E11FE7-CE69-9BCC-B230-B2820280DED5"));
            return Task.CompletedTask;
        }
    }
}
