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

        protected CreateUpdatePluginContext(IServiceProvider serviceProvider, OrganizationServiceUser organizationServiceUser, OrganizationServiceUser userOrganizationServiceUser) : base(serviceProvider, organizationServiceUser, userOrganizationServiceUser)
        {
        }

        public bool IsAnyAttributeModified(Expression<Func<TEntity, object>> attributeSelector)
        {
            HashSet<string> attributeLogicalNames = Utils.GetAttributeLogicalNames(attributeSelector);
            IEnumerable<string> modifiedAttributeLogicalNames = attributeLogicalNames
                .Where(aln => IsAttributeModified(aln));
            bool isAnyAttributeModified = modifiedAttributeLogicalNames.Any();
            return isAnyAttributeModified;
        }

        private bool IsAttributeModified(string attributeLogicalName)
        {
            object oldValue = PreImage?.GetAttributeValue<object>(attributeLogicalName);
            object newValue = PostImage.GetAttributeValue<object>(attributeLogicalName);
            bool isModified = !Utils.AreEqual(oldValue, newValue);
            return isModified;
        }

        public void EnsureAttributesNotChanged(Expression<Func<TEntity, object>> attributeSelector)
        {
            HashSet<string> attributeLogicalNames = Utils.GetAttributeLogicalNames(attributeSelector);
            List<string> modifiedAttributeLogicalNames = attributeLogicalNames
                .Where(aln => IsAttributeModified(aln))
                .ToList();
            Utils.EnsureNoAttributes(this, PluginExecutionContext.PrimaryEntityName, modifiedAttributeLogicalNames, "are read-only");
        }

        public void EnsureModifiedAttributesNotEmpty(Expression<Func<TEntity, object>> attributeSelector)
        {
            HashSet<string> attributeLogicalNames = Utils.GetAttributeLogicalNames(attributeSelector);
            List<string> modifiedAttributeLogicalNames = attributeLogicalNames
                .Where(aln => IsAttributeModified(aln))
                .ToList();
            List<string> modifiedEmptyAttributeLogicalNames = modifiedAttributeLogicalNames
                .Where(aln => Utils.IsEmptyValue(PostImage.GetAttributeValue<object>(aln)))
                .ToList();
            Utils.EnsureNoAttributes(this, PluginExecutionContext.PrimaryEntityName, modifiedEmptyAttributeLogicalNames, "cannot be empty");
        }
    }
}
