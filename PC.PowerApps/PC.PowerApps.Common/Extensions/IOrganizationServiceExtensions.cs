using Microsoft.Xrm.Sdk;
using System.Collections.Generic;

namespace PC.PowerApps.Common.Extensions
{
    public static class IOrganizationServiceExtensions
    {
        public static void CreateWithoutNulls(this IOrganizationService organizationService, Entity entity)
        {
            foreach (KeyValuePair<string, object> attribute in entity.Attributes)
            {
                if (attribute.Value == null)
                {
                    _ = entity.Attributes.Remove(attribute);
                }
            }

            entity.Id = organizationService.Create(entity);
        }
    }
}
