using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Bound.Emails
{
    public class PostCreateUpdate : PluginBase
    {
        protected override void ExecuteInternal(IServiceProvider serviceProvider)
        {
            PostCreateUpdatePluginContext<Email> context = new(serviceProvider, User.System, User.User);
            Email email = context.PostImage;

            if (context.GetIsAnyAttributeModified(e => e.StatusCode))
            {
                ContactRepository.SetSentDebtReminderOn(context, email);
            }
        }
    }
}
