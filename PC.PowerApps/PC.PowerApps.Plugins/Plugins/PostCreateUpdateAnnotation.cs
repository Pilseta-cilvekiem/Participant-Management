using CrmEarlyBound;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Plugins
{
    public class PostCreateUpdateAnnotation : PluginBase
    {
        protected override void Execute(PluginContext pluginContext)
        {
            PostCreateUpdatePluginContext<Annotation> context = (PostCreateUpdatePluginContext<Annotation>)pluginContext;
            Annotation annotation = context.CurrentImage;

            if (context.Message == PluginMessage.Create)
            {

            }
        }

        protected override PluginContext GetPluginContext(IServiceProvider serviceProvider)
        {
            return new PostCreateUpdatePluginContext<Annotation>(serviceProvider, OrganizationServiceUser.System, OrganizationServiceUser.User);
        }
    }
}
