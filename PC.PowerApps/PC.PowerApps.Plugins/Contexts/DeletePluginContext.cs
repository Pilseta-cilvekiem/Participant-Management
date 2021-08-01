﻿using Microsoft.Xrm.Sdk;
using PC.PowerApps.Common.Extensions;
using PC.PowerApps.Plugins.Enumerations;
using System;
using System.Linq;

namespace PC.PowerApps.Plugins.Contexts
{
    public class DeletePluginContext<TEntity> : EntityPluginContext<TEntity> where TEntity : Entity
    {
        public EntityReference Target => (EntityReference)PluginExecutionContext.InputParameters
            .Where(ip => ip.Key == "Target")
            .TakeSingle()
            .Value;

        public DeletePluginContext(IServiceProvider serviceProvider, OrganizationServiceUser organizationServiceUser, OrganizationServiceUser userOrganizationServiceUser) : base(serviceProvider, organizationServiceUser, userOrganizationServiceUser)
        {
        }
    }
}