using PC.PowerApps.Common.Entities.Dataverse;
using System;
using System.Linq;

namespace PC.PowerApps.Common.Repositories
{
    public static class SettingsRepository
    {
        public static pc_Settings GetAnotherActiveSettings(Context context, Guid settingsId)
        {
            pc_Settings anotherActiveSettings = context.ServiceContext.pc_SettingsSet
                .Where(s => s.StatusCode == pc_Settings_StatusCode.Active && s.Id != settingsId)
                .FirstOrDefault();
            return anotherActiveSettings;
        }
    }
}
