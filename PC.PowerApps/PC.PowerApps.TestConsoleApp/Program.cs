using Autofac;
using Autofac.Extensions.DependencyInjection;
using CrmEarlyBound;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using PC.PowerApps.ClientBase;
using Serilog;
using Serilog.Core;
using System;

namespace PC.PowerApps.TestConsoleApp
{
    internal class Program
    {
        private static void Main()
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
            _ = containerBuilder.RegisterType<CrmServiceClientContext>().AsSelf().SingleInstance();
            _ = containerBuilder.RegisterInstance(configurationRoot).As<IConfiguration>();
            using IContainer container = containerBuilder.Build();

            CrmServiceClientContext context = container.Resolve<CrmServiceClientContext>();
            Annotation annotation = context.ServiceContext.Retrieve<Annotation>(Guid.Empty);
        }
    }
}
