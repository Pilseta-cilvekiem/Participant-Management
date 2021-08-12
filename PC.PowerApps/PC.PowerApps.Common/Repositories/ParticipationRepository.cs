using Microsoft.Extensions.Logging;
using PC.PowerApps.Common.Entities.Dataverse;
using System.Linq;

namespace PC.PowerApps.Common.Repositories
{
    public static class ParticipationRepository
    {
        public static pc_Participation GetParticipationWithinSamePeriod(Context context, pc_Participation participation)
        {
            IQueryable<pc_Participation> otherParticipationQuery = context.ServiceContext.pc_ParticipationSet
                .Where(p => p.pc_Contact.Id == participation.pc_Contact.Id && p.Id != participation.Id && (p.pc_Till == null || p.pc_Till >= participation.pc_From));

            if (participation.pc_Till is not null)
            {
                otherParticipationQuery = otherParticipationQuery
                    .Where(p => p.pc_From <= participation.pc_Till);
            }

            pc_Participation otherParticipation = otherParticipationQuery.FirstOrDefault();
            return otherParticipation;
        }

        public static void SetName(Context context, pc_Participation participation)
        {
            context.Logger.LogInformation($"Setting a Name for the Participation {participation.Id}...");
            Contact contact = context.ServiceContext.Retrieve<Contact>(participation.pc_Contact);
            participation.pc_Name = Utils.CreateName(100, contact?.FullName, context.FormatDate(participation.pc_From), "-", context.FormatDate(participation.pc_Till));
        }
    }
}
