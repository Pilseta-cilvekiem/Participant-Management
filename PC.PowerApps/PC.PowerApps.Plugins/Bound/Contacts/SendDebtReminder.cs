using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Bound.Contacts
{
    public class SendDebtReminder : PluginBase
    {
        protected override void ExecuteInternal(IServiceProvider serviceProvider)
        {
            CustomApiPluginContext context = new(serviceProvider, OrganizationServiceUser.System, OrganizationServiceUser.User);
            ContactRepository.SendDebtReminder(context, context.Target.Id);
        }
    }
}
