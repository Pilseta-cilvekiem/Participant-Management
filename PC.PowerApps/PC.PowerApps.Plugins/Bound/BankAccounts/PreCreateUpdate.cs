using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Bound.BankAccounts
{
    public class PreCreateUpdate : PluginBase
    {
        protected override void ExecuteInternal(IServiceProvider serviceProvider)
        {
            PreCreateUpdatePluginContext<pc_BankAccount> context = new(serviceProvider, User.System, User.User);
            pc_BankAccount bankAccount = context.PostImage;

            if (context.GetIsAnyAttributeModified(ba => ba.pc_TransactionImportFile))
            {
                BankAccountRepository.SetTransactionImportStatusToPending(bankAccount);
            }
        }
    }
}
