using Microsoft.Extensions.Logging;
using PC.PowerApps.Common.Entities.Dataverse;

namespace PC.PowerApps.Common.Repositories
{
    public static class PaymentRepository
    {
        public static void SetName(Context context, pc_Payment payment)
        {
            context.Logger.LogInformation($"Setting a Name for the Payment {payment.Id}...");
            Contact contact = context.ServiceContext.Retrieve<Contact>(payment.pc_Contact);
            payment.pc_Name = Utils.CreateName(100, contact?.FullName, context.FormatDate(payment.pc_Date), context.Format(payment.pc_Amount));
        }
    }
}
