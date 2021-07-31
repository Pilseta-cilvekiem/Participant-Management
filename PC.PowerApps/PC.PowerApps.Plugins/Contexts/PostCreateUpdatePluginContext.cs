using Microsoft.Xrm.Sdk;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Contexts
{
    internal class PostCreateUpdatePluginContext<TEntity> : CreateUpdatePluginContext<TEntity> where TEntity : Entity
    {
        public override TEntity PostImage => PluginExecutionContext.PostEntityImages["Image"].ToEntity<TEntity>();

        public PostCreateUpdatePluginContext(IServiceProvider serviceProvider, OrganizationServiceUser organizationServiceUser, OrganizationServiceUser userOrganizationServiceUser) : base(serviceProvider, organizationServiceUser, userOrganizationServiceUser)
        {
        }
    }
}
