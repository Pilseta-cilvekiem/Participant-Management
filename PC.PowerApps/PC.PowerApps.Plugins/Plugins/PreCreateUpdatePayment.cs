using PC.PowerApps.Common;
using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Plugins
{
    public class PreCreateUpdatePayment : PluginBase
    {
        protected override void Execute(PluginContext pluginContext)
        {
            PreCreateUpdatePluginContext<pc_Payment> context = (PreCreateUpdatePluginContext<pc_Payment>)pluginContext;
            pc_Payment payment = context.PostImage;

            if (context.IsModifiedAnyAttribute(p => p.pc_Transaction))
            {
                pc_Transaction transaction = context.ServiceContext.Retrieve<pc_Transaction>(payment.pc_Transaction);
                payment.pc_Amount ??= new(Utils.GetAmountOrZero(transaction.pc_RemainingAmount));
                payment.pc_Date = transaction?.pc_Date;
                payment.TransactionCurrencyId = transaction.TransactionCurrencyId;
            }
        }

        protected override PluginContext GetPluginContext(IServiceProvider serviceProvider)
        {
            return new PreCreateUpdatePluginContext<pc_Payment>(serviceProvider, OrganizationServiceUser.System, OrganizationServiceUser.User);
        }
    }
}
