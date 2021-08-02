using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Plugins
{
    public class PostCreateUpdateTransaction : PluginBase
    {
        protected override void Execute(PluginContext pluginContext)
        {
            PostCreateUpdatePluginContext<pc_Transaction> context = (PostCreateUpdatePluginContext<pc_Transaction>)pluginContext;
            pc_Transaction transaction = context.PostImage;

            if (context.Message == PluginMessage.Create && context.Settings.pc_AutomaticallyProcessTransactions == true)
            {
                TransactionRepository.Process(context, transaction);
            }
        }

        protected override PluginContext GetPluginContext(IServiceProvider serviceProvider)
        {
            return new PostCreateUpdatePluginContext<pc_Transaction>(serviceProvider, OrganizationServiceUser.System, OrganizationServiceUser.User);
        }
    }
}
