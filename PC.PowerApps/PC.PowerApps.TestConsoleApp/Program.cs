using Autofac;
using Autofac.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using PC.PowerApps.ClientBase;
using Serilog;
using Serilog.Core;
using System;
using System.Threading.Tasks;

namespace PC.PowerApps.TestConsoleApp
{
    internal class Program
    {
        private static async Task Main()
        {
            IConfigurationRoot configurationRoot = new ConfigurationBuilder()
               .AddUserSecrets<CrmServiceClientContext>(optional: true, reloadOnChange: false)
               .AddJsonFile("appsettings.json", optional: true, reloadOnChange: false)
               .Build();

            using Logger logger = new LoggerConfiguration()
                .WriteTo.Console()
                .CreateLogger();

            IServiceCollection serviceCollection = new ServiceCollection()
                .AddLogging(lb => lb.AddSerilog(logger, dispose: true));

            ContainerBuilder containerBuilder = new();
            containerBuilder.Populate(serviceCollection);
            _ = containerBuilder.RegisterModule<ClientBaseModule>();
            _ = containerBuilder.RegisterType<TestApp>().SingleInstance();
            _ = containerBuilder.RegisterInstance(configurationRoot).As<IConfiguration>();
            using IContainer container = containerBuilder.Build();

            TestApp testApp = container.Resolve<TestApp>();
            await testApp.Execute();

            Console.Write("Press \"Enter\" to exit.");
            Console.ReadLine();
        }
    }
}
