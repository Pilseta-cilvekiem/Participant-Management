using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Logging;
using PC.PowerApps.Common;
using System;

namespace PC.PowerApps.FunctionApp
{
    internal class TraceWriterLogger : ILogger
    {
        private readonly TraceWriter traceWriter;

        public TraceWriterLogger(TraceWriter traceWriter)
        {
            this.traceWriter = traceWriter;
        }

        public IDisposable BeginScope<TState>(TState state)
        {
            return null;
        }

        public bool IsEnabled(LogLevel logLevel)
        {
            return true;
        }

        public void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception exception, Func<TState, Exception, string> formatter)
        {
            Lazy<string> message = new(() => Utils.Format(state, exception));

            switch (logLevel)
            {
                case LogLevel.Trace:
                case LogLevel.Debug:
                    traceWriter.Verbose(message.Value);
                    break;

                case LogLevel.Information:
                    traceWriter.Info(message.Value);
                    break;

                case LogLevel.Warning:
                    traceWriter.Warning(message.Value);
                    break;

                case LogLevel.Error:
                case LogLevel.Critical:
                    traceWriter.Error(message.Value);
                    break;
            }
        }
    }
}
