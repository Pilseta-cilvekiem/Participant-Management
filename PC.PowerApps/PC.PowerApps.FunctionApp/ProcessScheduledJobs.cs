using Autofac;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using PC.PowerApps.ClientBase;
using System.Diagnostics.CodeAnalysis;

namespace PC.PowerApps.FunctionApp
{
    public static class ProcessScheduledJobs
    {
        static ProcessScheduledJobs()
        {
            AssemblyBindingRedirectHelper.ConfigureBindingRedirects();
        }

        [FunctionName("ProcessScheduledJobs")]
        [SuppressMessage("CodeQuality", "IDE0079:Remove unnecessary suppression", Justification = "<Pending>")]
        [SuppressMessage("Style", "IDE0060:Remove unused parameter", Justification = "<Pending>")]
        public static void Run([TimerTrigger("* */5 * * * *")] TimerInfo timerInfo, TraceWriter traceWriter)
        {
            IConfigurationRoot configurationRoot = new ConfigurationBuilder()
                .AddEnvironmentVariables()
                .Build();

            ContainerBuilder containerBuilder = new ContainerBuilder();
            _ = containerBuilder.RegisterType<CrmServiceClientContext>().AsSelf().SingleInstance();
            _ = containerBuilder.RegisterInstance(configurationRoot).As<IConfiguration>();
            _ = containerBuilder.RegisterType<TraceWriterLogger>().As<ILogger>().SingleInstance();
            _ = containerBuilder.RegisterInstance(traceWriter).As<TraceWriter>();
            using IContainer container = containerBuilder.Build();

            CrmServiceClientContext context = container.Resolve<CrmServiceClientContext>();
        }
    }
}
