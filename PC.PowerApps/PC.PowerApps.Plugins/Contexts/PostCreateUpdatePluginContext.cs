using Microsoft.Xrm.Sdk;
using PC.PowerApps.Common.Extensions;
using PC.PowerApps.Plugins.Enumerations;
using System;
using System.Linq;

namespace PC.PowerApps.Plugins.Contexts
{
    internal class PostCreateUpdatePluginContext<TEntity> : CreateUpdatePluginContext<TEntity> where TEntity : Entity
    {
        public override TEntity PostImage { get; }

        public PostCreateUpdatePluginContext(IServiceProvider serviceProvider, User organizationServiceUser, User user) : base(serviceProvider, organizationServiceUser, user)
        {
            PostImage = PluginExecutionContext.PostEntityImages
                .Where(i => i.Key == PluginConstants.EntityImageAlias)
                .TakeSingle("Post image does not exist.")
                .Value
                .ToEntity<TEntity>();
        }
    }
}
