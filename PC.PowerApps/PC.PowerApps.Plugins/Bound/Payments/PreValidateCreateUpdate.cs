using PC.PowerApps.Common;
using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Bound.Payments
{
    public class PreValidateCreateUpdate : PluginBase
    {
        protected override void ExecuteInternal(IServiceProvider serviceProvider)
        {
            PreCreateUpdatePluginContext<pc_Payment> context = new(serviceProvider, User.System, User.User);

            if (context.IsValidationDisabled)
            {
                return;
            }

            context.EnsureAttributesNotModified(p => new { p.pc_Date, p.pc_Name });
            pc_Payment payment = context.PostImage;

            if (payment.StatusCode != pc_Payment_StatusCode.Active)
            {
                context.EnsureAttributesNotModified(p => p.StatusCode);
            }

            context.EnsureCreatedOrUpdatedAttributesNotEmpty(p => new { p.pc_Contact, p.pc_Transaction });

            if (!context.GetIsAnyAttributeModified(p => p.pc_Transaction))
            {
                context.EnsureCreatedOrUpdatedAttributesNotEmpty(p => p.pc_Amount);
            }

            if (context.GetIsAnyAttributeModified(p => new { p.pc_Amount, p.pc_Transaction }) && payment.pc_Transaction != null)
            {
                decimal previousAmount = context.GetIsAnyAttributeModified(p => p.pc_Transaction) ? 0 : Utils.GetAmountOrZero(context.PreImage?.pc_Amount);
                decimal amountIncreasedBy = Utils.GetAmountOrZero(payment.pc_Amount) - previousAmount;

                if (amountIncreasedBy > 0)
                {
                    pc_Transaction transaction = context.ServiceContext.Retrieve<pc_Transaction>(payment.pc_Transaction);

                    if (amountIncreasedBy > Utils.GetAmountOrZero(transaction.pc_RemainingAmount))
                    {
                        throw context.CreateException(nameof(Resource.TransactionRemainingAmountNegative));
                    }
                }
            }
        }
    }
}
