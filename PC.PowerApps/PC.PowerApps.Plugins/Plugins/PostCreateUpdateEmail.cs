using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Plugins
{
    public class PostCreateUpdateEmail : PluginBase
    {
        protected override void Execute(PluginContext pluginContext)
        {
            PostCreateUpdatePluginContext<Email> context = (PostCreateUpdatePluginContext<Email>)pluginContext;
            Email email = context.PostImage;

            if (context.IsModifiedAnyAttribute(e => e.StatusCode))
            {
                ContactRepository.SetSentDebtReminderOn(context, email);
            }
        }

        protected override PluginContext GetPluginContext(IServiceProvider serviceProvider)
        {
            return new PostCreateUpdatePluginContext<Email>(serviceProvider, OrganizationServiceUser.System, OrganizationServiceUser.User);
        }
    }
}
