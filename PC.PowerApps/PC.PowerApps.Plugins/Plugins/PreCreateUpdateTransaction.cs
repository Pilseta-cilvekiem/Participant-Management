using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Plugins
{
    public class PreCreateUpdateTransaction : PluginBase
    {
        protected override void Execute(PluginContext pluginContext)
        {
            PreCreateUpdatePluginContext<pc_Transaction> context = (PreCreateUpdatePluginContext<pc_Transaction>)pluginContext;
            pc_Transaction transaction = context.PostImage;

            if (context.Message == PluginMessage.Create)
            {
                TransactionRepository.SetDefaults(transaction);
            }

            if (context.IsModifiedAnyAttribute(t => new { t.pc_Amount, t.pc_PaymentTotalAmount, t.pc_NonPaymentAmount }))
            {
                TransactionRepository.CalculateRemainingAmount(transaction);
            }

            if (context.IsModifiedAnyAttribute(t => t.pc_RemainingAmount))
            {
                TransactionRepository.SetStatusCode(transaction);
            }
        }

        protected override PluginContext GetPluginContext(IServiceProvider serviceProvider)
        {
            return new PreCreateUpdatePluginContext<pc_Transaction>(serviceProvider, OrganizationServiceUser.System, OrganizationServiceUser.User);
        }
    }
}
