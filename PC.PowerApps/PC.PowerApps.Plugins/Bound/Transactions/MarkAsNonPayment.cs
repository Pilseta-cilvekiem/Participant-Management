using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Bound.Transactions
{
    public class MarkAsNonPayment : PluginBase
    {
        protected override void ExecuteInternal(IServiceProvider serviceProvider)
        {
            CustomApiPluginContext context = new(serviceProvider, OrganizationServiceUser.System, OrganizationServiceUser.User);
            pc_Transaction transaction = context.ServiceContext.Retrieve<pc_Transaction>(context.Target);
            TransactionRepository.MarkAsNonPayment(transaction);
            _ = context.ServiceContext.UpdateModifiedAttributes(transaction);
        }
    }
}
