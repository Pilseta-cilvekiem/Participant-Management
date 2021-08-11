using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Bound.Annotations
{
    public class PostCreateUpdate : PluginBase
    {
        protected override void ExecuteInternal(IServiceProvider serviceProvider)
        {
            PostCreateUpdatePluginContext<Annotation> context = new(serviceProvider, User.System, User.User);
            Annotation annotation = context.PostImage;

            if (context.GetIsAnyAttributeModified(a => new { a.ObjectId }))
            {
                AnnotationRepository.ScheduleImportTransactions(context, annotation);
            }
        }
    }
}
