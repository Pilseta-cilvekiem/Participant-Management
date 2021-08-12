﻿using Microsoft.Xrm.Sdk;
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
                throw new InvalidPluginExecutionException($"Participation From must be less than or equal to Till.");
            }

            if (context.GetIsAnyAttributeModified(p => new { p.pc_From, p.pc_Till }))
            {
                pc_Participation otherParticipation = ParticipationRepository.GetParticipationWithinSamePeriod(context, participation);

                if (otherParticipation is not null)
                {
                    throw new InvalidPluginExecutionException($"There is another Participation for this Contact within the same period.");
                }
            }
        }
    }
}
