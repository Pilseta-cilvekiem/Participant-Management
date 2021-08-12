using PC.PowerApps.Common.Entities.Dataverse;
using System;
using System.Linq.Expressions;

namespace PC.PowerApps.Common
{
    public static class CommonConstants
    {
        public const string AreReadOnlyText = "are read-only";
        public const string AttributesText = "columns";
        public const string AttributeText = "column";
        public const string CannotBeEmptyText = "cannot be empty";
        public const string IsReadOnlyText = "is read-only";
        public const int MultilineTextMaxLength = 1048576;
        public static readonly Expression<Func<Contact, bool>> IsValidForGoogleSupporterGroupExpression = c => c.pc_ParticipationLevel == pc_ParticipationLevel.Supporter && c.pc_WishesToBeActive == true && c.pc_PaidParticipationFee != null && c.pc_PaidParticipationFee.Value >= 2 && c.EMailAddress1 != null && c.EMailAddress1 != string.Empty;
        public static readonly Func<Contact, bool> IsValidForGoogleSupporterGroupFunc = IsValidForGoogleSupporterGroupExpression.Compile();
    }
}
