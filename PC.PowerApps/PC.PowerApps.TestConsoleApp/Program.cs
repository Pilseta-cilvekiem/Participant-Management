using Autofac;
using Autofac.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using PC.PowerApps.ClientBase;
using Serilog;
using Serilog.Core;
using System.Threading.Tasks;

namespace PC.PowerApps.TestConsoleApp
{
    internal class Program
    {
        private static async Task Main()
        {
            IConfigurationRoot configurationRoot = new ConfigurationBuilder()
               .AddUserSecrets<CrmServiceClientContext>()
               .Build();

            using Logger logger = new LoggerConfiguration()
                .WriteTo.Console()
                .CreateLogger();

            IServiceCollection serviceCollection = new ServiceCollection()
                .AddLogging(lb => lb.AddSerilog(logger, dispose: true));

            ContainerBuilder containerBuilder = new ContainerBuilder();
            containerBuilder.Populate(serviceCollection);
            _ = containerBuilder.RegisterType<CrmServiceClientContext>().SingleInstance();
            _ = containerBuilder.RegisterInstance(configurationRoot).As<IConfiguration>();
            _ = containerBuilder.RegisterType<TestApp>().AsSelf().SingleInstance();
            using IContainer container = containerBuilder.Build();

            TestApp testApp = container.Resolve<TestApp>();
            await testApp.Execute();
        }
    }
}
