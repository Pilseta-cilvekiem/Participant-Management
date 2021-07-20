using Microsoft.Extensions.Logging;
using Microsoft.Xrm.Sdk;
using System;

namespace PC.PowerApps.Plugins
{
    internal class TraceLogger : ILogger
    {
        private readonly ITracingService tracingService;

        public TraceLogger(ITracingService tracingService)
        {
            this.tracingService = tracingService;
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
            tracingService.Trace($"{logLevel} {formatter(state, exception)}");
        }
    }
}
