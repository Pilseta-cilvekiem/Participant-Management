using Microsoft.Xrm.Sdk;
using PC.PowerApps.Common;
using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Bound.Transactions
{
    public class PreValidateCreateUpdate : PluginBase
    {
        protected override void ExecuteInternal(IServiceProvider serviceProvider)
        {
            PreCreateUpdatePluginContext<pc_Transaction> context = new(serviceProvider, User.System, User.User);
            pc_Transaction transaction = context.PostImage;

            if (context.GetIsAnyAttributeModified(t => new { t.pc_Amount, t.pc_NonPaymentAmount, t.pc_PaymentTotalAmount }) && Utils.GetAmountOrZero(transaction.pc_PaymentTotalAmount) + Utils.GetAmountOrZero(transaction.pc_NonPaymentAmount) > Utils.GetAmountOrZero(transaction.pc_Amount))
            {
                throw new InvalidPluginExecutionException("Sum of transaction payment total amount and non-payment amount cannot be greater than amount.");
            }

            if (!context.GetIsValidationEnabled())
            {
                return;
            }

            if (context.Message == PluginMessage.Create)
            {
                throw new InvalidPluginExecutionException("Cannot manually create transactions.");
            }

            context.EnsureAttributesNotModified(t => new { t.pc_Amount, t.pc_BankAccount, t.pc_Date, t.pc_Details, t.pc_Name, t.pc_PayerId, t.pc_PayerName, t.pc_PaymentTotalAmount, t.pc_RemainingAmount, t.StatusCode });
        }
    }
}
