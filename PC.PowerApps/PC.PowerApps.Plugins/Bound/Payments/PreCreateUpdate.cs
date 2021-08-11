using PC.PowerApps.Common;
using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Bound.Payments
{
    public class PreCreateUpdate : PluginBase
    {
        protected override void ExecuteInternal(IServiceProvider serviceProvider)
        {
            PreCreateUpdatePluginContext<pc_Payment> context = new(serviceProvider, User.System, User.User);
            pc_Payment payment = context.PostImage;

            if (context.GetIsAnyAttributeModified(p => p.pc_Transaction))
            {
                pc_Transaction transaction = context.ServiceContext.Retrieve<pc_Transaction>(payment.pc_Transaction);
                payment.pc_Amount ??= new(Utils.GetAmountOrZero(transaction?.pc_RemainingAmount));
                payment.pc_Date = transaction?.pc_Date;
                payment.TransactionCurrencyId = transaction?.TransactionCurrencyId;
            }
        }
    }
}
