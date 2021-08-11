using Microsoft.Xrm.Sdk;
using PC.PowerApps.Common;
using PC.PowerApps.Plugins.Enumerations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace PC.PowerApps.Plugins.Contexts
{
    internal class PreCreateUpdatePluginContext<TEntity> : CreateUpdatePluginContext<TEntity> where TEntity : Entity
    {
        private bool disposedValue;

        public bool IsValidationDisabled => UserId == Organization.SystemUserId || DateTime.UtcNow < User.pc_DisableValidationTill;
        public override TEntity PostImage { get; }

        public PreCreateUpdatePluginContext(IServiceProvider serviceProvider, User organizationServiceUser, User userOrganizationServiceUser) : base(serviceProvider, organizationServiceUser, userOrganizationServiceUser)
        {
            PostImage = ((Entity)PluginExecutionContext.InputParameters[PluginConstants.TargetAttributeName]).ToEntity<TEntity>();

            if (Message != PluginMessage.Create)
            {
                foreach (KeyValuePair<string, object> attribute in PreImage.Attributes)
                {
                    if (!PostImage.Contains(attribute.Key))
                    {
                        PostImage.Attributes.Add(attribute.Key, attribute.Value);
                    }
                }
            }
        }

        public void EnsureAttributesNotModified(Expression<Func<TEntity, object>> attributeSelector)
        {
            HashSet<string> attributeLogicalNames = Utils.GetAttributeLogicalNames(attributeSelector);
            List<string> modifiedAttributeLogicalNames = attributeLogicalNames
                .Where(aln => GetIsAttributeModified(aln))
                .ToList();
            Utils.EnsureNoAttributes(this, PluginExecutionContext.PrimaryEntityName, modifiedAttributeLogicalNames, CommonConstants.IsReadOnlyText, CommonConstants.AreReadOnlyText);
        }

        public void EnsureCreatedOrUpdatedAttributesNotEmpty(Expression<Func<TEntity, object>> attributeSelector)
        {
            HashSet<string> attributeLogicalNames = Utils.GetAttributeLogicalNames(attributeSelector);
            List<string> modifiedAttributeLogicalNames = attributeLogicalNames
                .Where(aln => Message == PluginMessage.Create || GetIsAttributeModified(aln))
                .ToList();
            List<string> modifiedEmptyAttributeLogicalNames = modifiedAttributeLogicalNames
                .Where(aln => Utils.IsEmptyValue(PostImage.GetAttributeValue<object>(aln)))
                .ToList();
            Utils.EnsureNoAttributes(this, PluginExecutionContext.PrimaryEntityName, modifiedEmptyAttributeLogicalNames, CommonConstants.CannotBeEmptyText, CommonConstants.CannotBeEmptyText);
        }

        protected override void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    if (Message != PluginMessage.Create)
                    {
                        string primaryIdAttribute = Utils.GetPrimaryIdAttribute(PostImage);
                        string[] attributesToKeep = new[] { primaryIdAttribute, /*"modifiedby", "modifiedon", "modifiedonbehalfby", "owningbusinessunit"*/ };
                        List<KeyValuePair<string, object>> attributesToRemove = PostImage.Attributes
                            .Where(a => !attributesToKeep.Contains(a.Key) && Utils.AreEqual(a.Value, PreImage.GetAttributeValue<object>(a.Key)))
                            .ToList();

                        foreach (KeyValuePair<string, object> attributeToRemove in attributesToRemove)
                        {
                            _ = PostImage.Attributes.Remove(attributeToRemove);
                        }
                    }
                }

                disposedValue = true;
            }

            base.Dispose(disposing);
        }
    }
}
