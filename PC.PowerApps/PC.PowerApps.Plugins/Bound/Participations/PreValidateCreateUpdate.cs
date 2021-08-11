using Microsoft.Xrm.Sdk;
using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;
using System.Linq;

namespace PC.PowerApps.Plugins.Bound.Participations
{
    public class PreValidateCreateUpdate : PluginBase
    {
        protected override void ExecuteInternal(IServiceProvider serviceProvider)
        {
            PreCreateUpdatePluginContext<pc_Participation> context = new(serviceProvider, User.System, User.User);

            if (!context.GetIsValidationEnabled())
            {
                return;
            }

            pc_Participation participation = context.PostImage;

            if (participation.StatusCode != pc_Participation_StatusCode.Active)
            {
                context.EnsureAttributesNotModified(p => p.StatusCode);
            }

            context.EnsureCreatedOrUpdatedAttributesNotEmpty(p => new { p.pc_Contact, p.pc_From, p.pc_Level });

            if (context.GetIsAnyAttributeModified(p => new { p.pc_From, p.pc_Till }))
            {
                if (participation.pc_From > participation.pc_Till)
                {
                    throw new InvalidPluginExecutionException($"Participation From must be less than or equal to Till.");
                }

                pc_Participation otherParticipation = ParticipationRepository.GetParticipationWithinSamePeriod(context, participation);

                if (otherParticipation is not null)
                {
                    throw new InvalidPluginExecutionException($"There is another participation for this contact within the same period.");
                }
            }
        }
    }
}
