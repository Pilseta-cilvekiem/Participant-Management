using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Bound.BankAccounts
{
    public class PreValidateCreateUpdate : PluginBase
    {
        protected override void ExecuteInternal(IServiceProvider serviceProvider)
        {
            PreCreateUpdatePluginContext<pc_BankAccount> context = new(serviceProvider, User.System, User.User);

            if (context.IsValidationDisabled)
            {
                return;
            }

            context.EnsureAttributesNotModified(ba => new { ba.pc_LastImportedTransactionDate, ba.pc_TransactionImportError, ba.pc_TransactionImportStatus });
            pc_BankAccount bankAccount = context.PostImage;

            if (bankAccount.StatusCode != pc_BankAccount_StatusCode.Active)
            {
                context.EnsureAttributesNotModified(ba => ba.StatusCode);
            }

            context.EnsureCreatedOrUpdatedAttributesNotEmpty(ba => ba.pc_Name);
        }
    }
}
