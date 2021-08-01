﻿using Microsoft.Xrm.Sdk;
using PC.PowerApps.Common;
using PC.PowerApps.Plugins.Enumerations;
using System;
using System.Collections.Generic;
using System.Linq;

namespace PC.PowerApps.Plugins.Contexts
{
    internal class PreCreateUpdatePluginContext<TEntity> : CreateUpdatePluginContext<TEntity> where TEntity : Entity
    {
        private bool disposedValue;
        private readonly Lazy<TEntity> postImage;

        public override TEntity PostImage => postImage.Value;

        public PreCreateUpdatePluginContext(IServiceProvider serviceProvider, OrganizationServiceUser organizationServiceUser, OrganizationServiceUser userOrganizationServiceUser) : base(serviceProvider, organizationServiceUser, userOrganizationServiceUser)
        {
            postImage = new(() =>
            {
                TEntity postImage = ((Entity)PluginExecutionContext.InputParameters["Target"]).ToEntity<TEntity>();

                if (Message != PluginMessage.Create)
                {
                    foreach (KeyValuePair<string, object> attribute in PreImage.Attributes)
                    {
                        if (!postImage.Contains(attribute.Key))
                        {
                            postImage.Attributes.Add(attribute.Key, attribute.Value);
                        }
                    }
                }

                return postImage;
            });
        }

        protected override void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    if (postImage.IsValueCreated && Message != PluginMessage.Create)
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