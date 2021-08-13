using Microsoft.Extensions.Logging;
using PC.PowerApps.Common.Entities.Dataverse;
using System.Linq;

namespace PC.PowerApps.Common.Repositories
{
    public static class ParticipationFeeExemptionRepository
    {
        public static pc_ParticipationFeeExemption GetParticipationFeeExemptionWithinSamePeriod(Context context, pc_ParticipationFeeExemption participationFeeExemption)
        {
            IQueryable<pc_ParticipationFeeExemption> otherParticipationFeeExemptionQuery = context.ServiceContext.pc_ParticipationFeeExemptionSet
                .Where(pfe => pfe.pc_Contact.Id == participationFeeExemption.pc_Contact.Id && pfe.Id != participationFeeExemption.Id);

            if (participationFeeExemption.pc_From is not null)
            {
                otherParticipationFeeExemptionQuery = otherParticipationFeeExemptionQuery
                    .Where(pfe => pfe.pc_Till == null || pfe.pc_Till >= participationFeeExemption.pc_From);
            }

            if (participationFeeExemption.pc_Till is not null)
            {
                otherParticipationFeeExemptionQuery = otherParticipationFeeExemptionQuery
                    .Where(pfe => pfe.pc_From == null || pfe.pc_From <= participationFeeExemption.pc_Till);
            }

            pc_ParticipationFeeExemption otherParticipationFeeExemption = otherParticipationFeeExemptionQuery.FirstOrDefault();
            return otherParticipationFeeExemption;
        }

        public static void SetName(Context context, pc_ParticipationFeeExemption participationFeeExemption)
        {
            context.Logger.LogInformation($"Setting a Name for the Participation Fee Exemption {participationFeeExemption.Id}...");
            Contact contact = context.ServiceContext.Retrieve<Contact>(participationFeeExemption.pc_Contact);
            participationFeeExemption.pc_Name = Utils.CreateName(100, contact?.FullName, context.FormatDate(participationFeeExemption.pc_From), "-", context.FormatDate(participationFeeExemption.pc_Till));
        }
    }
}
