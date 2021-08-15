using Microsoft.Xrm.Sdk;
using PC.PowerApps.Common;
using PC.PowerApps.Common.Extensions;
using PC.PowerApps.Plugins.Enumerations;
using System;
using System.Linq;
using System.Linq.Expressions;

namespace PC.PowerApps.Plugins.Contexts
{
    internal abstract class EntityPluginContext<TEntity> : PluginContext where TEntity : Entity
    {
        protected EntityPluginContext(IServiceProvider serviceProvider, User organizationServiceUser, User user) : base(serviceProvider, organizationServiceUser, user)
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
                    .Where(i => i.Key == PluginConstants.EntityImageAlias)
                    .TakeSingle("Pre image does not exist.")
                    .Value
                    .ToEntity<TEntity>();
            }
        }

        public string GetAttributeDisplayName(Expression<Func<TEntity, object>> attributeSelector)
        {
            string attributeLogicalName = Utils.GetAttributeLogicalName(attributeSelector);
            string attributeDisplayName = GetAttributeDisplayName(PluginExecutionContext.PrimaryEntityName, attributeLogicalName);
            return attributeDisplayName;
        }
    }
}
