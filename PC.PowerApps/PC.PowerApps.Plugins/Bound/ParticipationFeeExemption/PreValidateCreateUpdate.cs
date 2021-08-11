using Microsoft.Xrm.Sdk;
using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Bound.ParticipationFeeExemption
{
    public class PreValidateCreateUpdate : PluginBase
    {
        protected override void ExecuteInternal(IServiceProvider serviceProvider)
        {
            PreCreateUpdatePluginContext<pc_ParticipationFeeExemption> context = new(serviceProvider, User.System, User.User);

            if (!context.GetIsValidationEnabled())
            {
                return;
            }

            pc_ParticipationFeeExemption participationFeeExemption = context.PostImage;

            if (participationFeeExemption.StatusCode != pc_ParticipationFeeExemption_StatusCode.Active)
            {
                context.EnsureAttributesNotModified(pfe => pfe.StatusCode);
            }

            context.EnsureCreatedOrUpdatedAttributesNotEmpty(pfe => new { pfe.pc_Contact, pfe.pc_Description, pfe.pc_From });

            if (context.GetIsAnyAttributeModified(pfe => new { pfe.pc_From, pfe.pc_Till }) && participationFeeExemption.pc_From > participationFeeExemption.pc_Till)
            {
                throw new InvalidPluginExecutionException($"Participation Fee Exemption From must be less than or equal to Till.");
            }

            if (context.GetIsAnyAttributeModified(pfe => new { pfe.pc_From, pfe.pc_Till }))
            {
                pc_ParticipationFeeExemption otherParticipationFeeExemption = ParticipationFeeExemptionRepository.GetParticipationFeeExemptionWithinSamePeriod(context, participationFeeExemption);

                if (otherParticipationFeeExemption is not null)
                {
                    throw new InvalidPluginExecutionException($"There is another Participation Fee Exemption for this Contact within the same period.");
                }
            }
        }
    }
}
