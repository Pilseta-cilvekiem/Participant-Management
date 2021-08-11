using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Bound.Transactions
{
    public class PostCreateUpdate : PluginBase
    {
        protected override void ExecuteInternal(IServiceProvider serviceProvider)
        {
            PostCreateUpdatePluginContext<pc_Transaction> context = new(serviceProvider, User.System, User.User);
            pc_Transaction transaction = context.PostImage;

            if (context.Message == PluginMessage.Create && context.Settings.pc_AutomaticallyProcessTransactions == true)
            {
                TransactionRepository.Process(context, transaction);
            }
        }
    }
}
