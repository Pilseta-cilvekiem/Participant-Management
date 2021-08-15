using Microsoft.Xrm.Sdk;
using PC.PowerApps.Common;
using PC.PowerApps.Plugins.Enumerations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace PC.PowerApps.Plugins.Contexts
{
    internal abstract class CreateUpdatePluginContext<TEntity> : EntityPluginContext<TEntity> where TEntity : Entity
    {
        public abstract TEntity PostImage { get; }

        protected CreateUpdatePluginContext(IServiceProvider serviceProvider, User organizationServiceUser, User user) : base(serviceProvider, organizationServiceUser, user)
        {
        }

        public bool GetIsAnyAttributeModified(Expression<Func<TEntity, object>> attributeSelector)
        {
            HashSet<string> attributeLogicalNames = Utils.GetAttributeLogicalNames(attributeSelector);
            IEnumerable<string> modifiedAttributeLogicalNames = attributeLogicalNames
                .Where(aln => GetIsAttributeModified(aln));
            bool isAnyAttributeModified = modifiedAttributeLogicalNames.Any();
            return isAnyAttributeModified;
        }

        protected bool GetIsAttributeModified(string attributeLogicalName)
        {
            object oldValue = PreImage?.GetAttributeValue<object>(attributeLogicalName);
            object newValue = PostImage.GetAttributeValue<object>(attributeLogicalName);
            bool isModified = !Utils.AreEqual(oldValue, newValue);
            return isModified;
        }
    }
}
