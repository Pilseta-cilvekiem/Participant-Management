using Microsoft.Xrm.Sdk;
using PC.PowerApps.Common.Extensions;
using PC.PowerApps.Plugins.Enumerations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PC.PowerApps.Plugins.Contexts
{
    internal class CustomApiPluginContext : PluginContext
    {
        public EntityReference Target => (EntityReference)PluginExecutionContext.InputParameters
            .Where(ip => ip.Key == "Target")
            .TakeSingle()
            .Value;
        
        public CustomApiPluginContext(IServiceProvider serviceProvider, OrganizationServiceUser organizationServiceUser, OrganizationServiceUser userOrganizationServiceUser) : base(serviceProvider, organizationServiceUser, userOrganizationServiceUser)
        {
        }
    }
}
