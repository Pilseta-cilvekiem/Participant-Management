using Microsoft.Extensions.Logging;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
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
        private static readonly Guid LatvianResourceId = new Guid("3429D498-E63F-EC11-8C62-6045BD874996");

        private bool disposedValue;
        private readonly Lazy<UserSettings> lazyInitiatingUserSettings;
        private readonly Lazy<Dictionary<string, string>> lazyLatvianResource;
        private readonly Lazy<Organization> lazyOrganization;
        private readonly Lazy<ServiceContext> lazyServiceContext;
        private readonly Lazy<pc_Settings> lazySettings;
        private readonly Lazy<TimeZoneInfo> lazyTimeZoneInfo = new(() => TimeZoneInfo.FindSystemTimeZoneById("FLE Standard Time"));
        private readonly Lazy<int> lazyUILanguageId;
        private readonly Lazy<SystemUser> lazyUser;
        private readonly ResourceManager resourceManager;

        protected abstract Guid InitiatingUserId { get; }
        private UserSettings InitiatingUserSettings => lazyInitiatingUserSettings.Value;
        private Dictionary<string, string> LatvianResource => lazyLatvianResource.Value;
        public abstract ILogger Logger { get; }
        protected Organization Organization => lazyOrganization.Value;
        private CultureInfo OrganizationCultureInfo { get; }
        public abstract IOrganizationService OrganizationService { get; }
        public ServiceContext ServiceContext => lazyServiceContext.Value;
        public pc_Settings Settings => lazySettings.Value;
        private TimeZoneInfo TimeZoneInfo => lazyTimeZoneInfo.Value;
        private int UILanguageId => lazyUILanguageId.Value;
        protected abstract Guid UserId { get; }
        protected SystemUser User => lazyUser.Value;

        protected Context()
        {
            lazyUILanguageId = new(() => InitiatingUserSettings?.UILanguageId ?? EnglishCultureId);
            lazyInitiatingUserSettings = new(() => ServiceContext.Retrieve<UserSettings>(InitiatingUserId, isOptional: true));
            lazyLatvianResource = new(() =>
            {
                WebResource webResource = ServiceContext.Retrieve<WebResource>(LatvianResourceId);
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
            lazyOrganization = new(() => ServiceContext.OrganizationSet.TakeSingle());
            lazyServiceContext = new(() => new(OrganizationService));
            lazySettings = new(() => ServiceContext.pc_SettingsSet
                .Where(s => s.StateCode == pc_SettingsState.Active)
                .TakeFirst("Active Settings do not exist."));
            lazyUser = new(() => ServiceContext.Retrieve<SystemUser>(UserId));
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
            EnsureNoAttributes(entity.LogicalName, emptyAttributeLogicalNames, nameof(Resource.AttributeCannotBeEmpty), nameof(Resource.AttributesCannotBeEmpty));
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

        public void EnsureNoAttributes(string entityLogicalName, List<string> attributeLogicalNames, string resourceSingle, string resourceMultiple)
        {
            if (attributeLogicalNames.Count == 0)
            {
                return;
            }

            List<string> attributeDisplayNames = attributeLogicalNames
                .Select(aln => $"\"{GetAttributeDisplayName(entityLogicalName, aln)}\"")
                .ToList();

            string entityDisplayName = GetEntityDisplayName(entityLogicalName);
            string attributeDisplayNameString = string.Join(", ", attributeDisplayNames);

            if (attributeDisplayNames.Count == 1)
            {
                throw CreateException(resourceSingle, entityDisplayName, attributeDisplayNameString);
            }

            throw CreateException(resourceMultiple, entityDisplayName, attributeDisplayNameString);
        }

        protected string GetAttributeDisplayName(string entityLogicalName, string attributeLogicalName)
        {
            AttributeMetadata attributeMetadata = GetAttributeMetadata(entityLogicalName, attributeLogicalName);
            string attributeDisplayName = GetLabelValue(attributeMetadata.DisplayName);
            return attributeDisplayName;
        }

        private string GetEntityDisplayName(string entityLogicalName)
        {
            EntityMetadata entityMetadata = GetEntityMetadata(entityLogicalName);
            string entityDisplayName = GetLabelValue(entityMetadata.DisplayName);
            return entityDisplayName;
        }

        private AttributeMetadata GetAttributeMetadata(string entityLogicalName, string attributeLogicalName)
        {
            RetrieveAttributeRequest retrieveAttributeRequest = new()
            {
                EntityLogicalName = entityLogicalName,
                LogicalName = attributeLogicalName,
            };
            RetrieveAttributeResponse retrieveAttributeResponse = (RetrieveAttributeResponse)OrganizationService.Execute(retrieveAttributeRequest);
            return retrieveAttributeResponse.AttributeMetadata;
        }

        protected EntityMetadata GetEntityMetadata(string entityLogicalName)
        {
            RetrieveEntityRequest retrieveEntityRequest = new()
            {
                LogicalName = entityLogicalName,
            };
            RetrieveEntityResponse retrieveEntityResponse = (RetrieveEntityResponse)OrganizationService.Execute(retrieveEntityRequest);
            return retrieveEntityResponse.EntityMetadata;
        }

        protected string GetLabelValue(Label label)
        {
            LocalizedLabel localizedLabel = GetLocalizedLabel(label, UILanguageId) ?? GetLocalizedLabel(label, EnglishCultureId);
            return localizedLabel.Label;
        }

        private LocalizedLabel GetLocalizedLabel(Label label, int languageId)
        {
            return label.LocalizedLabels
                .Where(ll => ll.LanguageCode == languageId)
                .FirstOrDefault();
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
