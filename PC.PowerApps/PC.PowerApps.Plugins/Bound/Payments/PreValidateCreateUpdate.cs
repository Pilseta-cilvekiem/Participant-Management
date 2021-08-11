using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Plugins.Contexts;
using PC.PowerApps.Plugins.Enumerations;
using System;

namespace PC.PowerApps.Plugins.Bound.Payments
{
    public class PreValidateCreateUpdate : PluginBase
    {
        protected override void ExecuteInternal(IServiceProvider serviceProvider)
        {
            PreCreateUpdatePluginContext<pc_Payment> context = new(serviceProvider, User.System, User.User);

            if (!context.GetIsValidationEnabled())
            {
                return;
            }

            context.EnsureAttributesNotModified(p => p.pc_Date);
            pc_Payment payment = context.PostImage;

            if (payment.StatusCode != pc_Payment_StatusCode.Active)
            {
                context.EnsureAttributesNotModified(p => p.StatusCode);
            }

            context.EnsureCreatedOrUpdatedAttributesNotEmpty(p => new { p.pc_Contact, p.pc_Transaction });

            if (!context.GetIsAnyAttributeModified(p => p.pc_Transaction))
            {
                context.EnsureCreatedOrUpdatedAttributesNotEmpty(p => p.pc_Amount);
            }
        }
    }
}
