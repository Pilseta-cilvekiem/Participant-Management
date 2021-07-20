using Microsoft.Xrm.Sdk;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Contexts
{
    internal class PostCreateUpdatePluginContext<TEntity> : PluginContext where TEntity : Entity
    {
        public TEntity CurrentImage => PostImage;
        public TEntity PostImage => PluginExecutionContext.PostEntityImages["Image"].ToEntity<TEntity>();
        public TEntity PreImage => PluginExecutionContext.PreEntityImages["Image"].ToEntity<TEntity>();

        public PostCreateUpdatePluginContext(IServiceProvider serviceProvider, OrganizationServiceUser organizationServiceUser, OrganizationServiceUser userOrganizationServiceUser) : base(serviceProvider, organizationServiceUser, userOrganizationServiceUser)
        {
        }
    }
}
