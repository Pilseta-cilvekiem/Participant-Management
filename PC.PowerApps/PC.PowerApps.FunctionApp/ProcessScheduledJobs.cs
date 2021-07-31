using Autofac;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using PC.PowerApps.ClientBase;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;

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
        public static async Task Run([TimerTrigger("*/15 * * * * *")] TimerInfo timerInfo, TraceWriter traceWriter)
        {
            IConfigurationRoot configurationRoot = new ConfigurationBuilder()
                .AddEnvironmentVariables()
                .Build();

            ContainerBuilder containerBuilder = new();
            _ = containerBuilder.RegisterModule<ClientBaseModule>();
            _ = containerBuilder.RegisterInstance(configurationRoot).As<IConfiguration>();
            _ = containerBuilder.RegisterType<TraceWriterLogger>().As<ILogger>().SingleInstance();
            _ = containerBuilder.RegisterInstance(traceWriter).As<TraceWriter>();
            using IContainer container = containerBuilder.Build();

            ScheduledJobProcessor scheduledJobProcessor = container.Resolve<ScheduledJobProcessor>();
            await scheduledJobProcessor.ExecuteAll();
        }
    }
}
