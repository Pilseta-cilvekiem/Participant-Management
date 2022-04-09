using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using PC.PowerApps.Common.Entities.Fetch;
using PC.PowerApps.Common.FetchXmlBuilder;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Xml.Serialization;

namespace PC.PowerApps.Common.Extensions
{
    public static class IOrganizationServiceExtensions
    {
        public static void CreateWithoutNulls(this IOrganizationService organizationService, Entity entity)
        {
            List<KeyValuePair<string, object>> attributesToRemove = entity.Attributes
                .Where(a => a.Value == null)
                .ToList();

            foreach (KeyValuePair<string, object> attributeToRemove in attributesToRemove)
            {
                _ = entity.Attributes.Remove(attributeToRemove);
            }

            entity.Id = organizationService.Create(entity);
        }

        public static void Delete(this IOrganizationService organizationService, Entity entity)
        {
            organizationService.Delete(entity.LogicalName, entity.Id);
        }

        public static IEnumerable<TEntity> RetrieveMultiple<TEntity>(this IOrganizationService organizationService, FetchXmlBuilder<TEntity> fetchXmlBuilder) where TEntity : Entity
        {
            FetchType fetchType = fetchXmlBuilder.GetFetchType();
            fetchType.count = "1000";
            for (int page = 1; true; page++)
            {
                fetchType.page = page.ToString();
                EntityCollection entityCollection = RetrieveMultiple(organizationService, fetchType);
                foreach (Entity entity in entityCollection.Entities)
                {
                    yield return entity.ToEntity<TEntity>();
                }
                if (!entityCollection.MoreRecords)
                {
                    break;
                }
                fetchType.pagingcookie = entityCollection.PagingCookie;
            }
        }

        private static EntityCollection RetrieveMultiple(IOrganizationService organizationService, FetchType fetchType)
        {
            using MemoryStream memoryStream = new();
            XmlSerializer xmlSerializer = new XmlSerializer(typeof(FetchType));
            xmlSerializer.Serialize(memoryStream, fetchType);
            memoryStream.Position = 0;
            using StreamReader streamReader = new(memoryStream);
            string fetchXml = streamReader.ReadToEnd();
            FetchExpression fetchExpression = new FetchExpression(fetchXml);
            EntityCollection entityCollection = organizationService.RetrieveMultiple(fetchExpression);
            return entityCollection;
        }
    }
}
