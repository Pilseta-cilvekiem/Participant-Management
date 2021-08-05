using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using PC.PowerApps.Plugins.Extensions;
using System;

namespace PC.PowerApps.Plugins.Plugins
{
    public class PostDeletePayment : PluginBase
    {
        protected override void Execute(PluginContext pluginContext)
        {
            DeletePluginContext<pc_Payment> context = (DeletePluginContext<pc_Payment>)pluginContext;
            pc_Payment payment = context.PreImage;

            if (context.PluginExecutionContext.ParentContext?.IsDeleteOf(payment.pc_Contact) != true)
            {
                ContactRepository.CalculatePaidParticipationFee(context, payment.pc_Contact?.Id);
            }

            if (context.PluginExecutionContext.ParentContext?.IsDeleteOf(payment.pc_Transaction) != true)
            {
                TransactionRepository.CalculatePaymentTotalAmount(context, payment.pc_Transaction?.Id);
            }
        }

        protected override PluginContext GetPluginContext(IServiceProvider serviceProvider)
        {
            return new DeletePluginContext<pc_Payment>(serviceProvider, OrganizationServiceUser.System, OrganizationServiceUser.User);
        }
    }
}
