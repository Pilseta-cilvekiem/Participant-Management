using Azure.Identity;
using Azure.Security.KeyVault.Secrets;
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
        private readonly Lazy<CrmServiceClient> crmServiceClient;
        private readonly Lazy<ILogger> logger;
        private readonly Lazy<SecretClient> secretClient;
        private readonly Lazy<Guid> userId;

        protected override Guid InitiatingUserId => userId.Value;
        public override ILogger Logger => logger.Value;
        public override IOrganizationService OrganizationService => crmServiceClient.Value;
        public SecretClient SecretClient => secretClient.Value;
        protected override Guid UserId => userId.Value;

        public CrmServiceClientContext(Lazy<IConfiguration> configuration, Lazy<ILogger<CrmServiceClientContext>> contextLogger) : this(configuration, GetLazyLogger(contextLogger))
        {
        }

        public CrmServiceClientContext(Lazy<IConfiguration> configuration, Lazy<ILogger> logger)
        {
            crmServiceClient = new Lazy<CrmServiceClient>(() =>
            {
                string connectionString = configuration.Value.GetConnectionString("Dataverse");
                return new CrmServiceClient(connectionString);
            });
            this.logger = new(() => logger.Value);
            secretClient = new(() => new SecretClient(new Uri(Settings.pc_KeyVaultUrl), new DefaultAzureCredential()));
            userId = new(() => crmServiceClient.Value.GetMyCrmUserId());
        }

        private static Lazy<ILogger> GetLazyLogger(Lazy<ILogger<CrmServiceClientContext>> contextLogger)
        {
            return new(() => contextLogger.Value);
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
