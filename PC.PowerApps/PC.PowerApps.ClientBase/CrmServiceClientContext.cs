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
        private readonly Lazy<CrmServiceClient> crmServiceClient;
        private bool disposedValue = false;
        private readonly Lazy<Guid> lazyUserId;

        public override Guid UserId => lazyUserId.Value;

        public CrmServiceClientContext(Lazy<IConfiguration> configuration, Lazy<ILogger<CrmServiceClientContext>> logger) : this(configuration, GetILogger(logger))
        {
        }

        public CrmServiceClientContext(Lazy<IConfiguration> configuration, Lazy<ILogger> logger) : this(GetCrmServiceClient(configuration), logger)
        {
        }

        private CrmServiceClientContext(Lazy<CrmServiceClient> crmServiceClient, Lazy<ILogger> logger) : base(GetOrganizationService(crmServiceClient), logger)
        {
            this.crmServiceClient = crmServiceClient;
            lazyUserId = new(() => crmServiceClient.Value.GetMyCrmUserId());
        }

        private static Lazy<CrmServiceClient> GetCrmServiceClient(Lazy<IConfiguration> configuration)
        {
            return new Lazy<CrmServiceClient>(() =>
            {
                string connectionString = configuration.Value.GetConnectionString("Dataverse");
                return new CrmServiceClient(connectionString);
            });
        }

        private static Lazy<ILogger> GetILogger(Lazy<ILogger<CrmServiceClientContext>> logger)
        {
            return new Lazy<ILogger>(() => logger.Value);
        }

        private static Lazy<IOrganizationService> GetOrganizationService(Lazy<CrmServiceClient> crmServiceClient)
        {
            return new Lazy<IOrganizationService>(() => crmServiceClient.Value);
        }

        protected override void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    if (crmServiceClient.IsValueCreated)
                    {
                        crmServiceClient.Value.Dispose();
                    }
                }

                disposedValue = true;

                // Call base class implementation.
                base.Dispose(disposing);
            }
        }
    }
}
