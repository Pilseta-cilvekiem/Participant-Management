using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Plugins
{
    public class SendDebtReminderToContact : PluginBase
    {
        protected override void Execute(PluginContext pluginContext)
        {
            CustomApiPluginContext context = (CustomApiPluginContext)pluginContext;
            ContactRepository.SendDebtReminder(context, context.Target.Id);
        }

        protected override PluginContext GetPluginContext(IServiceProvider serviceProvider)
        {
            return new CustomApiPluginContext(serviceProvider, OrganizationServiceUser.System, OrganizationServiceUser.User);
        }
    }
}
