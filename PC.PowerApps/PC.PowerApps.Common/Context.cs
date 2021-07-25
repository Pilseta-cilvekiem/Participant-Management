using Microsoft.Extensions.Logging;
using Microsoft.Xrm.Sdk;
using System;

namespace PC.PowerApps.Common
{
    public abstract class Context : IDisposable
    {
        private bool disposedValue;
        private readonly Lazy<ILogger> logger;
        private readonly Lazy<IOrganizationService> organizationService;
        private readonly Lazy<ServiceContext> serviceContext;
        private readonly Lazy<IOrganizationService> userOrganizationService;
        private readonly Lazy<ServiceContext> userServiceContext;

        public ILogger Logger => logger.Value;
        public IOrganizationService OrganizationService => organizationService.Value;
        public ServiceContext ServiceContext => serviceContext.Value;
        public IOrganizationService UserOrganizationService => userOrganizationService.Value;
        public ServiceContext UserServiceContext => userServiceContext.Value;

        protected Context(Lazy<IOrganizationService> organizationService, Lazy<ILogger> logger) : this(organizationService, organizationService, logger)
        {
        }

        protected Context(Lazy<IOrganizationService> organizationService, Lazy<IOrganizationService> userOrganizationService, Lazy<ILogger> logger)
        {
            this.logger = logger;
            this.organizationService = organizationService;
            serviceContext = new Lazy<ServiceContext>(() => new ServiceContext(OrganizationService));
            this.userOrganizationService = userOrganizationService;
            userServiceContext = userOrganizationService == organizationService
                ? serviceContext
                : new Lazy<ServiceContext>(() => new ServiceContext(UserOrganizationService));
        }

        public static InvalidPluginExecutionException CreateException(string message)
        {
            return new InvalidPluginExecutionException(message);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    if (serviceContext.IsValueCreated)
                    {
                        ServiceContext.Dispose();
                    }
                }

                disposedValue = true;
            }
        }

        public void Dispose()
        {
            Dispose(disposing: true);
            GC.SuppressFinalize(this);
        }
    }
}
