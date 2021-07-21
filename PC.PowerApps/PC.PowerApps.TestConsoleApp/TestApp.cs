using CrmEarlyBound;
using PC.PowerApps.ClientBase;
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
            Annotation annotation = context.ServiceContext.Retrieve<Annotation>(Guid.Empty);
            return Task.CompletedTask;
        }
    }
}
