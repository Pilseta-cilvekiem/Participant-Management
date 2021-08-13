using PC.PowerApps.Common.Entities.Dataverse;
using System;
using System.Linq.Expressions;

namespace PC.PowerApps.Common
{
    public static class CommonConstants
    {
        public const string CannotBeEmptyText = "cannot be empty";
        public const int MultilineTextMaxLength = 1048576;

        private static readonly Lazy<Expression<Func<Contact, bool>>> lazyIsValidForGoogleSupporterGroupExpression = new(() => c =>
            c.pc_ParticipationLevel == pc_ParticipationLevel.Supporter &&
            c.pc_WishesToBeActive == true &&
            (c.pc_ForceAddToGoogleGroup == true || (c.pc_PaidParticipationFee != null && c.pc_PaidParticipationFee.Value >= 2)) &&
            c.EMailAddress1 != null && c.EMailAddress1 != string.Empty);

        private static readonly Lazy<Func<Contact, bool>> lazyIsValidForGoogleSupporterGroupFunc = new(() => IsValidForGoogleSupporterGroupExpression.Compile());

        public static Expression<Func<Contact, bool>> IsValidForGoogleSupporterGroupExpression => lazyIsValidForGoogleSupporterGroupExpression.Value;
        public static Func<Contact, bool> IsValidForGoogleSupporterGroupFunc => lazyIsValidForGoogleSupporterGroupFunc.Value;
    }
}
