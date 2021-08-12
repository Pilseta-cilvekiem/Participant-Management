using Microsoft.Extensions.Logging;
using Microsoft.Xrm.Sdk;
using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Extensions;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Linq.Expressions;

namespace PC.PowerApps.Common
{
    public abstract class Context : IDisposable
    {
        private bool disposedValue;
        private readonly Lazy<ILogger> lazyLogger;
        private readonly Lazy<Organization> lazyOrganization;
        private readonly Lazy<IOrganizationService> lazyOrganizationService;
        private readonly Lazy<ServiceContext> lazyServiceContext;
        private readonly Lazy<pc_Settings> lazySettings;
        private readonly Lazy<TimeZoneInfo> lazyTimeZoneInfo = new(() => TimeZoneInfo.FindSystemTimeZoneById("FLE Standard Time"));
        private readonly Lazy<SystemUser> lazyUser;
        private readonly Lazy<IOrganizationService> lazyUserOrganizationService;
        private readonly Lazy<ServiceContext> lazyUserServiceContext;

        public CultureInfo CultureInfo { get; }
        public ILogger Logger => lazyLogger.Value;
        public Organization Organization => lazyOrganization.Value;
        public IOrganizationService OrganizationService => lazyOrganizationService.Value;
        public ServiceContext ServiceContext => lazyServiceContext.Value;
        public pc_Settings Settings => lazySettings.Value;
        public TimeZoneInfo TimeZoneInfo => lazyTimeZoneInfo.Value;
        public abstract Guid UserId { get; }
        public IOrganizationService UserOrganizationService => lazyUserOrganizationService.Value;
        public ServiceContext UserServiceContext => lazyUserServiceContext.Value;
        public SystemUser User => lazyUser.Value;

        protected Context(Lazy<IOrganizationService> lazyOrganizationService, Lazy<ILogger> lazyLogger) : this(lazyOrganizationService, lazyOrganizationService, lazyLogger)
        {
        }

        protected Context(Lazy<IOrganizationService> lazyOrganizationService, Lazy<IOrganizationService> lazyUserOrganizationService, Lazy<ILogger> lazyLogger)
        {
            CultureInfo = CultureInfo.GetCultureInfo("lv-LV");
            this.lazyLogger = lazyLogger;
            lazyOrganization = new(() => ServiceContext.OrganizationSet.TakeSingle());
            this.lazyOrganizationService = lazyOrganizationService;
            lazyServiceContext = new(() => new(OrganizationService));
            lazySettings = new(() => ServiceContext.pc_SettingsSet
                .Where(s => s.StateCode == pc_SettingsState.Active)
                .TakeSingle("Active settings do not exist", "There are more than one active settings."));
            lazyUser = new(() => ServiceContext.Retrieve<SystemUser>(UserId));
            this.lazyUserOrganizationService = lazyUserOrganizationService;
            lazyUserServiceContext = lazyUserOrganizationService == lazyOrganizationService
                ? lazyServiceContext
                : new(() => new(UserOrganizationService));
        }

        public DateTime GetCurrentOrganizationTime()
        {
            return UtcToOrganizationTime(DateTime.UtcNow);
        }

        public DateTime OrganizationToUtcTime(DateTime organizationTime)
        {
            return TimeZoneInfo.ConvertTimeToUtc(organizationTime, TimeZoneInfo);
        }

        public DateTime UtcToOrganizationTime(DateTime utcTime)
        {
            return TimeZoneInfo.ConvertTimeFromUtc(utcTime, TimeZoneInfo);
        }

        public void EnsureAttributesNotEmpty<TEntity>(TEntity entity, Expression<Func<TEntity, object>> attributeSelector) where TEntity : Entity
        {
            HashSet<string> attributeLogicalNamesToCheck = Utils.GetAttributeLogicalNames(attributeSelector);
            List<string> emptyAttributeLogicalNames = attributeLogicalNamesToCheck
                .Where(aln => Utils.IsEmptyValue(aln))
                .ToList();
            Utils.EnsureNoAttributes(this, entity.LogicalName, emptyAttributeLogicalNames, CommonConstants.CannotBeEmptyText, CommonConstants.CannotBeEmptyText);
        }

        public string Format(Money money)
        {
            return money?.Value.ToString("c", CultureInfo);
        }

        public string FormatDate(DateTime? dateTime)
        {
            return dateTime?.ToString("d", CultureInfo);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    if (lazyServiceContext.IsValueCreated)
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
