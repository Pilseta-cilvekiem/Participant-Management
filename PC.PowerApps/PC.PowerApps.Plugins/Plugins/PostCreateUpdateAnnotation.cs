using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
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
            Annotation annotation = context.PostImage;

            if (context.Message == PluginMessage.Create || context.IsModifiedAnyAttribute(a => new { a.DocumentBody, a.ObjectId }))
            {
                AnnotationRepository.ScheduleImportSwedbankTransactions(context, annotation);
            }
        }

        protected override PluginContext GetPluginContext(IServiceProvider serviceProvider)
        {
            return new PostCreateUpdatePluginContext<Annotation>(serviceProvider, OrganizationServiceUser.System, OrganizationServiceUser.User);
        }
    }
}
