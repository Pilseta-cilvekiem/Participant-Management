using Autofac;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using PC.PowerApps.ClientBase;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace PC.PowerApps.FunctionApp
{
    public static class ProcessScheduledJobs
    {
        static ProcessScheduledJobs()
        {
            List<string> bindingRedirects = new()
            {
                "Azure.Core, Version=1.23.0.0, Culture=neutral, PublicKeyToken=92742159e12e44c8",
                "Microsoft.Bcl.AsyncInterfaces, Version=6.0.0.0, Culture=neutral, PublicKeyToken=cc7b13ffcd2ddd51",
                "Microsoft.Identity.Client, Version=4.42.1.0, Culture=neutral, PublicKeyToken=0a613f4dd989e8ae",
                "Microsoft.IdentityModel.Clients.ActiveDirectory, Version=5.2.9.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35",
                "System.Diagnostics.DiagnosticSource, Version=5.0.0.0, Culture=neutral, PublicKeyToken=cc7b13ffcd2ddd51",
                "System.Runtime.CompilerServices.Unsafe, Version=6.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a",
                "System.Text.Json, Version=6.0.0.2, Culture=neutral, PublicKeyToken=cc7b13ffcd2ddd51",
                "System.Threading.Tasks.Extensions, Version=4.2.0.1, Culture=neutral, PublicKeyToken=cc7b13ffcd2ddd51",
            };
            Dictionary<string, AssemblyName> bindingRedirectAssemblyNames = bindingRedirects
                .Select(an => new AssemblyName(an))
                .ToDictionary(an => an.Name);

            bool isRecursiveAssemblyResolveCall = false;

            AppDomain.CurrentDomain.AssemblyResolve += (object sender, ResolveEventArgs resolveEventArgs) =>
            {
                if (isRecursiveAssemblyResolveCall)
                {
                    return null;
                }

                AssemblyName requestedAssemblyName = new(resolveEventArgs.Name);
                bool bindingRedirectExists = bindingRedirectAssemblyNames.TryGetValue(requestedAssemblyName.Name, out AssemblyName resolvedAssemblyName);
                try
                {
                    isRecursiveAssemblyResolveCall = true;
                    Assembly resolvedAssembly = Assembly.Load(bindingRedirectExists ? resolvedAssemblyName : requestedAssemblyName);
                    return resolvedAssembly;
                }
                finally
                {
                    isRecursiveAssemblyResolveCall = false;
                }
            };
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
