using CrmEarlyBound;
using Microsoft.Xrm.Sdk;
using PC.PowerApps.Common.Extensions;
using System;
using System.Linq;

namespace PC.PowerApps.Common
{
    public class ServiceContext : ServiceContextBase
    {
        private readonly IOrganizationService organizationService;

        public ServiceContext(IOrganizationService organizationService) : base(organizationService)
        {
            this.organizationService = organizationService;
        }

        public TEntity Retrieve<TEntity>(Guid id) where TEntity : Entity
        {
            return CreateQuery<TEntity>()
                .Where(e => e.Id == id)
                .TakeSingle($"{typeof(TEntity).Name} with ID {id} does not exist.");
        }
    }
}
