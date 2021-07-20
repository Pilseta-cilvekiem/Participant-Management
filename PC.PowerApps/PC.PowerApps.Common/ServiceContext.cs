using CrmEarlyBound;
using Microsoft.Xrm.Sdk;

namespace PC.PowerApps.Plugins
{
    public class ServiceContext : ServiceContextBase
    {
        private readonly IOrganizationService organizationService;

        public ServiceContext(IOrganizationService organizationService) : base(organizationService)
        {
            this.organizationService = organizationService;
        }
    }
}
