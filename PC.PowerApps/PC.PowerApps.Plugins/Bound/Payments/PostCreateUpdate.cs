using PC.PowerApps.Common;
using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Bound.Payments
{
    public class PostCreateUpdate : PluginBase
    {
        protected override void ExecuteInternal(IServiceProvider serviceProvider)
        {
            PostCreateUpdatePluginContext<pc_Payment> context = new(serviceProvider, User.System, User.User);
            pc_Payment payment = context.PostImage;

            if (context.GetIsAnyAttributeModified(p => p.pc_Contact) || Utils.GetAmountOrZero(payment.pc_Amount) != Utils.GetAmountOrZero(context.PreImage?.pc_Amount))
            {
                if (context.GetIsAnyAttributeModified(p => p.pc_Contact))
                {
                    ContactRepository.CalculatePaidParticipationFee(context, context.PreImage?.pc_Contact?.Id);
                }

                ContactRepository.CalculatePaidParticipationFee(context, payment.pc_Contact?.Id);
            }

            if (context.GetIsAnyAttributeModified(p => p.pc_Transaction) || Utils.GetAmountOrZero(payment.pc_Amount) != Utils.GetAmountOrZero(context.PreImage?.pc_Amount))
            {
                if (context.GetIsAnyAttributeModified(p => p.pc_Transaction))
                {
                    TransactionRepository.CalculatePaymentTotalAmount(context, context.PreImage?.pc_Transaction?.Id);
                }

                TransactionRepository.CalculatePaymentTotalAmount(context, payment.pc_Transaction?.Id);
            }
        }
    }
}
