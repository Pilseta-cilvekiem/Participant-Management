using Microsoft.Extensions.Logging;
using Microsoft.Xrm.Sdk;
using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Extensions;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Linq.Expressions;
using System.Resources;

namespace PC.PowerApps.Common
{
    public abstract class Context : IDisposable
    {
        private const int EnglishCultureId = 1033;
        private const int LatvianCultureId = 1062;
        private static readonly Guid ResourceLVId = new Guid("95db7ae0-06fd-eb11-94ef-0022488070f9");

        private bool disposedValue;
        private readonly Lazy<UserSettings> lazyInitiatingUserSettings;
        private readonly Lazy<Dictionary<string, string>> lazyLatvianResource;
        private readonly Lazy<ILogger> lazyLogger;
        private readonly Lazy<Organization> lazyOrganization;
        private readonly Lazy<IOrganizationService> lazyOrganizationService;
        private readonly Lazy<ServiceContext> lazyServiceContext;
        private readonly Lazy<pc_Settings> lazySettings;
        private readonly Lazy<TimeZoneInfo> lazyTimeZoneInfo = new(() => TimeZoneInfo.FindSystemTimeZoneById("FLE Standard Time"));
        private readonly Lazy<int> lazyUILanguageId;
        private readonly Lazy<SystemUser> lazyUser;
        private readonly Lazy<IOrganizationService> lazyUserOrganizationService;
        private readonly Lazy<ServiceContext> lazyUserServiceContext;
        private readonly ResourceManager resourceManager;

        protected abstract Guid InitiatingUserId { get; }
        private UserSettings InitiatingUserSettings => lazyInitiatingUserSettings.Value;
        private Dictionary<string, string> LatvianResource => lazyLatvianResource.Value;
        public ILogger Logger => lazyLogger.Value;
        protected Organization Organization => lazyOrganization.Value;
        private CultureInfo OrganizationCultureInfo { get; }
        public IOrganizationService OrganizationService => lazyOrganizationService.Value;
        public ServiceContext ServiceContext => lazyServiceContext.Value;
        public pc_Settings Settings => lazySettings.Value;
        private TimeZoneInfo TimeZoneInfo => lazyTimeZoneInfo.Value;
        private int UILanguageId => lazyUILanguageId.Value;
        protected abstract Guid UserId { get; }
        private IOrganizationService UserOrganizationService => lazyUserOrganizationService.Value;
        private ServiceContext UserServiceContext => lazyUserServiceContext.Value;
        protected SystemUser User => lazyUser.Value;

        protected Context(Lazy<IOrganizationService> lazyOrganizationService, Lazy<ILogger> lazyLogger) : this(lazyOrganizationService, lazyOrganizationService, lazyLogger)
        {
        }

        protected Context(Lazy<IOrganizationService> lazyOrganizationService, Lazy<IOrganizationService> lazyUserOrganizationService, Lazy<ILogger> lazyLogger)
        {
            lazyUILanguageId = new(() => InitiatingUserSettings?.UILanguageId ?? EnglishCultureId);
            lazyInitiatingUserSettings = new(() => ServiceContext.Retrieve<UserSettings>(InitiatingUserId, isOptional: true));
            lazyLatvianResource = new(() =>
            {
                WebResource webResource = ServiceContext.Retrieve<WebResource>(ResourceLVId);
                byte[] fileBytes = Convert.FromBase64String(webResource.Content);
                using MemoryStream memoryStream = new();
                memoryStream.Write(fileBytes, 0, fileBytes.Length);
                memoryStream.Position = 0;
                using ResXResourceReader resXResourceReader = new(memoryStream);
                IDictionaryEnumerator dictionaryEnumerator = resXResourceReader.GetEnumerator();
                Dictionary<string, string> latvianResource = new();
                while (dictionaryEnumerator.MoveNext())
                {
                    latvianResource[(string)dictionaryEnumerator.Key] = (string)dictionaryEnumerator.Value;
                }
                return latvianResource;
            });
            this.lazyLogger = lazyLogger;
            lazyOrganization = new(() => ServiceContext.OrganizationSet.TakeSingle());
            this.lazyOrganizationService = lazyOrganizationService;
            lazyServiceContext = new(() => new(OrganizationService));
            lazySettings = new(() => ServiceContext.pc_SettingsSet
                .Where(s => s.StateCode == pc_SettingsState.Active)
                .TakeFirst("Active Settings do not exist."));
            lazyUser = new(() => ServiceContext.Retrieve<SystemUser>(UserId));
            this.lazyUserOrganizationService = lazyUserOrganizationService;
            lazyUserServiceContext = lazyUserOrganizationService == lazyOrganizationService
                ? lazyServiceContext
                : new(() => new(UserOrganizationService));
            OrganizationCultureInfo = CultureInfo.GetCultureInfo("lv-LV");
            resourceManager = new(typeof(Resource));
        }

        public DateTime GetCurrentOrganizationTime()
        {
            DateTime organizationTime = UtcToOrganizationTime(DateTime.UtcNow);
            return organizationTime;
        }

        public DateTime OrganizationToUtcTime(DateTime organizationTime)
        {
            DateTime utcTime = TimeZoneInfo.ConvertTimeToUtc(organizationTime, TimeZoneInfo);
            return utcTime;
        }

        public DateTime UtcToOrganizationTime(DateTime utcTime)
        {
            DateTime organizationTime = TimeZoneInfo.ConvertTimeFromUtc(utcTime, TimeZoneInfo);
            return organizationTime;
        }

        public void EnsureAttributesNotEmpty<TEntity>(TEntity entity, Expression<Func<TEntity, object>> attributeSelector) where TEntity : Entity
        {
            HashSet<string> attributeLogicalNamesToCheck = Utils.GetAttributeLogicalNames(attributeSelector);
            List<string> emptyAttributeLogicalNames = attributeLogicalNamesToCheck
                .Where(aln => Utils.IsEmptyValue(aln))
                .ToList();
            Utils.EnsureNoAttributes(this, entity.LogicalName, emptyAttributeLogicalNames, nameof(Resource.AttributeCannotBeEmpty), nameof(Resource.AttributesCannotBeEmpty));
        }

        public string Format(Money money)
        {
            string moneyString = money?.Value.ToString("c", OrganizationCultureInfo);
            return moneyString;
        }

        public string FormatDate(DateTime? dateTime)
        {
            string dateString = dateTime?.ToString("d", OrganizationCultureInfo);
            return dateString;
        }

        public InvalidPluginExecutionException CreateException(string resourceName, params string[] arguments)
        {
            string format;
            switch (UILanguageId)
            {
                case LatvianCultureId:
                    if (!LatvianResource.TryGetValue(resourceName, out format))
                    {
                        format = resourceManager.GetString(resourceName);
                    }
                    break;

                default:
                    format = resourceManager.GetString(resourceName);
                    break;
            };

            string message = string.Format(format, arguments);
            InvalidPluginExecutionException exception = new InvalidPluginExecutionException(message);
            return exception;
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
