using Microsoft.Extensions.Logging;
using PC.PowerApps.Common.Entities.Dataverse;
using System;
using System.Linq;

namespace PC.PowerApps.Common.Repositories
{
    public static class ParticipationRepository
    {
        public static pc_Participation GetParticipationWithinSamePeriod(Context context, pc_Participation participation)
        {
            IQueryable<pc_Participation> otherParticipationQuery = context.ServiceContext.pc_ParticipationSet
                .Where(p => p.pc_Contact.Id == participation.pc_Contact.Id && p.Id != participation.Id);

            if (participation.pc_From is not null)
            {
                otherParticipationQuery = otherParticipationQuery
                    .Where(p => p.pc_Till == null || p.pc_Till >= participation.pc_From);
            }

            if (participation.pc_Till is not null)
            {
                otherParticipationQuery = otherParticipationQuery
                    .Where(p => p.pc_From == null || p.pc_From <= participation.pc_Till);
            }

            pc_Participation otherParticipation = otherParticipationQuery.FirstOrDefault();
            return otherParticipation;
        }

        public static pc_Participation GetAdjacentParticipationBefore(Context context, pc_Participation participation)
        {
            if (participation.pc_From is null)
            {
                return null;
            }

            DateTime otherParticipationTill = participation.pc_From.Value.AddDays(-1);
            pc_Participation otherParticipation = context.ServiceContext.pc_ParticipationSet
                .Where(p => p.pc_Contact.Id == participation.pc_Contact.Id && p.pc_Level == participation.pc_Level && p.Id != participation.Id && p.pc_Till == otherParticipationTill)
                .FirstOrDefault();
            return otherParticipation;
        }

        public static pc_Participation GetAdjacentParticipationAfter(Context context, pc_Participation participation)
        {
            if (participation.pc_Till is null)
            {
                return null;
            }

            DateTime otherParticipationFrom = participation.pc_Till.Value.AddDays(1);
            pc_Participation otherParticipation = context.ServiceContext.pc_ParticipationSet
                .Where(p => p.pc_Contact.Id == participation.pc_Contact.Id && p.pc_Level == participation.pc_Level && p.Id != participation.Id && p.pc_From == otherParticipationFrom)
                .FirstOrDefault();
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
