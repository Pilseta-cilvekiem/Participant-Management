using Microsoft.Xrm.Sdk;
using PC.PowerApps.Common;
using PC.PowerApps.Plugins.Enumerations;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace PC.PowerApps.Plugins.Contexts
{
    internal abstract class CreateUpdatePluginContext<TEntity> : PluginContext where TEntity : Entity
    {
        public TEntity PreImage
        {
            get
            {
                if (Message == PluginMessage.Create)
                {
                    return null;
                }

                return PluginExecutionContext.PreEntityImages["Image"].ToEntity<TEntity>();
            }
        }

        public abstract TEntity PostImage { get; }

        protected CreateUpdatePluginContext(IServiceProvider serviceProvider, OrganizationServiceUser organizationServiceUser, OrganizationServiceUser userOrganizationServiceUser) : base(serviceProvider, organizationServiceUser, userOrganizationServiceUser)
        {
        }

        public bool IsModifiedAnyAttribute(Expression<Func<TEntity, object>> attributeSelector)
        {
            List<string> attributeNames = Utils.GetAttributeNames(attributeSelector);

            foreach (string attributeName in attributeNames)
            {
                object oldValue = PreImage?.GetAttributeValue<object>(attributeName);
                object newValue = PostImage.GetAttributeValue<object>(attributeName);

                if (!Utils.AreEqual(oldValue, newValue))
                {
                    return true;
                }
            }

            return false;
        }
    }
}
