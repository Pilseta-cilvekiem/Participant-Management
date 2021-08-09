using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Bound.Transactions
{
    public class PreCreateUpdate : PluginBase
    {
        protected override void ExecuteInternal(IServiceProvider serviceProvider)
        {
            PreCreateUpdatePluginContext<pc_Transaction> context = new(serviceProvider, OrganizationServiceUser.System, OrganizationServiceUser.User);
            pc_Transaction transaction = context.PostImage;

            if (context.Message == PluginMessage.Create)
            {
                TransactionRepository.SetDefaults(transaction);
            }

            if (context.GetIsAnyAttributeModified(t => new { t.pc_Amount, t.pc_PaymentTotalAmount, t.pc_NonPaymentAmount }))
            {
                TransactionRepository.CalculateRemainingAmount(transaction);
            }

            if (context.GetIsAnyAttributeModified(t => t.pc_RemainingAmount))
            {
                TransactionRepository.SetStatusCode(transaction);
            }
        }
    }
}
