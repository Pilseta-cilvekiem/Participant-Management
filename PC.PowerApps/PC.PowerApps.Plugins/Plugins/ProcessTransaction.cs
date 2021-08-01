using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Plugins
{
    public class ProcessTransaction : PluginBase
    {
        protected override void Execute(PluginContext pluginContext)
        {
            CustomApiPluginContext context = (CustomApiPluginContext)pluginContext;
            pc_Transaction transaction = context.ServiceContext.Retrieve<pc_Transaction>(context.Target);
            TransactionRepository.Process(context, transaction);
            _ = context.ServiceContext.UpdateModifiedAttributes(transaction);
        }

        protected override PluginContext GetPluginContext(IServiceProvider serviceProvider)
        {
            return new CustomApiPluginContext(serviceProvider, OrganizationServiceUser.System, OrganizationServiceUser.User);
        }
    }
}
