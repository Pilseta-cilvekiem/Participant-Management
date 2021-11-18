using PC.PowerApps.Common;
using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Bound.Participations
{
    public class PreValidateCreateUpdate : PluginBase
    {
        protected override void ExecuteInternal(IServiceProvider serviceProvider)
        {
            PreCreateUpdatePluginContext<pc_Participation> context = new(serviceProvider, User.System, User.User);

            if (context.IsValidationDisabled)
            {
                return;
            }

            context.EnsureAttributesNotModified(p => p.pc_Name);
            pc_Participation participation = context.PostImage;

            if (participation.StatusCode != pc_Participation_StatusCode.Active)
            {
                context.EnsureAttributesNotModified(p => p.StatusCode);
            }

            context.EnsureCreatedOrUpdatedAttributesNotEmpty(p => new { p.pc_Contact, p.pc_From, p.pc_Level });

            if (context.GetIsAnyAttributeModified(p => new { p.pc_From, p.pc_Till }) && participation.pc_From > participation.pc_Till)
            {
                throw context.CreateException(nameof(Resource.ParticipationFromGreaterThanTill));
            }

            if (context.GetIsAnyAttributeModified(p => new { p.pc_Contact, p.pc_From, p.pc_Till }))
            {
                pc_Participation otherParticipation = ParticipationRepository.GetParticipationWithinSamePeriod(context, participation);

                if (otherParticipation != null)
                {
                    throw context.CreateException(nameof(Resource.AnotherParticipation));
                }
            }

            if (context.GetIsAnyAttributeModified(p => new { p.pc_Contact, p.pc_From, p.pc_Level }))
            {
                pc_Participation otherParticipation = ParticipationRepository.GetAdjacentParticipationBefore(context, participation);

                if (otherParticipation != null)
                {
                    throw context.CreateException(nameof(Resource.AdjacentParticipationBefore));
                }
            }

            if (context.GetIsAnyAttributeModified(p => new { p.pc_Contact, p.pc_Level, p.pc_Till }))
            {
                pc_Participation otherParticipation = ParticipationRepository.GetAdjacentParticipationAfter(context, participation);

                if (otherParticipation != null)
                {
                    throw context.CreateException(nameof(Resource.AdjacentParticipationAfter));
                }
            }
        }
    }
}
