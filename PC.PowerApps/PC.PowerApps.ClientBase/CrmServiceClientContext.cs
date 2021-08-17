using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Tooling.Connector;
using PC.PowerApps.Common;
using System;

namespace PC.PowerApps.ClientBase
{
    public class CrmServiceClientContext : Context
    {
        private bool disposedValue = false;
        private readonly Lazy<CrmServiceClient> lazyCrmServiceClient;
        private readonly Lazy<ILogger> lazyLogger;
        private readonly Lazy<Guid> lazyUserId;

        protected override Guid InitiatingUserId => lazyUserId.Value;
        public override ILogger Logger => lazyLogger.Value;
        public override IOrganizationService OrganizationService => lazyCrmServiceClient.Value;
        protected override Guid UserId => lazyUserId.Value;

        public CrmServiceClientContext(Lazy<IConfiguration> lazyConfiguration, Lazy<ILogger<CrmServiceClientContext>> lazyContextLogger) : this(lazyConfiguration, GetLazyLogger(lazyContextLogger))
        {
        }

        public CrmServiceClientContext(Lazy<IConfiguration> lazyConfiguration, Lazy<ILogger> lazyLogger)
        {
            lazyCrmServiceClient = new Lazy<CrmServiceClient>(() =>
            {
                string connectionString = lazyConfiguration.Value.GetConnectionString("Dataverse");
                return new CrmServiceClient(connectionString);
            });
            this.lazyLogger = new(() => lazyLogger.Value);
            lazyUserId = new(() => lazyCrmServiceClient.Value.GetMyCrmUserId());
        }

        private static Lazy<ILogger> GetLazyLogger(Lazy<ILogger<CrmServiceClientContext>> lazyContextLogger)
        {
            return new(() => lazyContextLogger.Value);
        }

        protected override void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    if (lazyCrmServiceClient.IsValueCreated)
                    {
                        lazyCrmServiceClient.Value.Dispose();
                    }
                }

                disposedValue = true;

                // Call base class implementation.
                base.Dispose(disposing);
            }
        }
    }
}
