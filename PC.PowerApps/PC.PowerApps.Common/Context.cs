﻿using Microsoft.Extensions.Logging;
using Microsoft.Xrm.Sdk;
using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Extensions;
using System;
using System.Linq;

namespace PC.PowerApps.Common
{
    public abstract class Context : IDisposable
    {
        private bool disposedValue;
        private readonly Lazy<ILogger> logger;
        private readonly Lazy<IOrganizationService> organizationService;
        private readonly Lazy<ServiceContext> serviceContext;
        private readonly Lazy<pc_Settings> settings;
        private readonly Lazy<TimeZoneInfo> timeZoneInfo = new(() => TimeZoneInfo.FindSystemTimeZoneById("FLE Standard Time"));
        private readonly Lazy<IOrganizationService> userOrganizationService;
        private readonly Lazy<ServiceContext> userServiceContext;

        public ILogger Logger => logger.Value;
        public IOrganizationService OrganizationService => organizationService.Value;
        public ServiceContext ServiceContext => serviceContext.Value;
        public pc_Settings Settings => settings.Value;
        public TimeZoneInfo TimeZoneInfo => timeZoneInfo.Value;
        public IOrganizationService UserOrganizationService => userOrganizationService.Value;
        public ServiceContext UserServiceContext => userServiceContext.Value;

        protected Context(Lazy<IOrganizationService> organizationService, Lazy<ILogger> logger) : this(organizationService, organizationService, logger)
        {
        }

        protected Context(Lazy<IOrganizationService> organizationService, Lazy<IOrganizationService> userOrganizationService, Lazy<ILogger> logger)
        {
            this.logger = logger;
            this.organizationService = organizationService;
            serviceContext = new(() => new(OrganizationService));
            settings = new(() => ServiceContext.pc_SettingsSet
                .Where(s => s.StateCode == pc_SettingsState.Active)
                .TakeSingle("Active settings do not exist", "There are more than one active settings."));
            this.userOrganizationService = userOrganizationService;
            userServiceContext = userOrganizationService == organizationService
                ? serviceContext
                : new(() => new(UserOrganizationService));
        }

        public DateTime UtcToOrganizationTime(DateTime utcTime)
        {
            DateTime organizationTime = TimeZoneInfo.ConvertTimeFromUtc(utcTime, TimeZoneInfo);
            return organizationTime;
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
