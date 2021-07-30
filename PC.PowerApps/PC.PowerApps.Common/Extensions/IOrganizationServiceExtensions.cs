using Microsoft.Xrm.Sdk;
using System.Collections.Generic;
using System.Linq;

namespace PC.PowerApps.Common.Extensions
{
    public static class IOrganizationServiceExtensions
    {
        public static void CreateWithoutNulls(this IOrganizationService organizationService, Entity entity)
        {
            List<string> attributesToRemove = entity.Attributes
                .Where(a => a.Value == null)
                .Select(a => a.Key)
                .ToList();

            foreach (string attributeToRemove in attributesToRemove)
            {
                _ = entity.Attributes.Remove(attributeToRemove);
            }

            entity.Id = organizationService.Create(entity);
        }

        public static void Delete(this IOrganizationService organizationService, Entity entity)
        {
            organizationService.Delete(entity.LogicalName, entity.Id);
        }
    }
}
