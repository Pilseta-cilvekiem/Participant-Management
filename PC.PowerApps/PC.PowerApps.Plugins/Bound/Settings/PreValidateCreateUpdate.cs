using PC.PowerApps.Common;
using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Repositories;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Bound.Settings
{
    public class PreValidateCreateUpdate : PluginBase
    {
        protected override void ExecuteInternal(IServiceProvider serviceProvider)
        {
            PreCreateUpdatePluginContext<pc_Settings> context = new(serviceProvider, User.System, User.User);

            if (context.IsValidationDisabled)
            {
                return;
            }

            context.EnsureCreatedOrUpdatedAttributesNotEmpty(s => new { s.pc_AutomaticallyProcessTransactions, s.pc_Name });
            pc_Settings settings = context.PostImage;

            if (context.GetIsAnyAttributeModified(s => s.StatusCode) && settings.StatusCode == pc_Settings_StatusCode.Active)
            {
                pc_Settings anotherActiveSettings = SettingsRepository.GetAnotherActiveSettings(context, settings.Id);

                if (anotherActiveSettings != null)
                {
                    throw context.CreateException(nameof(Resource.AnotherSettings));
                }
            }
        }
    }
}
