using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using PC.PowerApps.Plugins.Extensions;
using System;

namespace PC.PowerApps.Plugins.Bound.Payments
{
    public class PostDelete : PluginBase
    {
        protected override void ExecuteInternal(IServiceProvider serviceProvider)
        {
            DeletePluginContext<pc_Payment> context = new(serviceProvider, User.System, User.User);
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
    }
}
