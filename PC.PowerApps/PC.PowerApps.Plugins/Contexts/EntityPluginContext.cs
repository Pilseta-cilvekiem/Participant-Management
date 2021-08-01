using Microsoft.Xrm.Sdk;
using PC.PowerApps.Common.Extensions;
using PC.PowerApps.Plugins.Enumerations;
using System;
using System.Linq;

namespace PC.PowerApps.Plugins.Contexts
{
    internal abstract class EntityPluginContext<TEntity> : PluginContext where TEntity : Entity
    {
        protected EntityPluginContext(IServiceProvider serviceProvider, OrganizationServiceUser organizationServiceUser, OrganizationServiceUser userOrganizationServiceUser) : base(serviceProvider, organizationServiceUser, userOrganizationServiceUser)
        {
        }

        public TEntity PreImage
        {
            get
            {
                if (Message == PluginMessage.Create)
                {
                    return null;
                }

                return PluginExecutionContext.PreEntityImages
                    .Where(i => i.Key == "Image")
                    .TakeSingle("Pre image does not exist.")
                    .Value
                    .ToEntity<TEntity>();
            }
        }
    }
}
