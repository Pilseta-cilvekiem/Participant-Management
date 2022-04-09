using Microsoft.Xrm.Sdk;
using System;
using System.Linq.Expressions;

namespace PC.PowerApps.Common.Extensions
{
    public static class EntityExtensions
    {
        public static string GetFormattedValue<TEntity>(this TEntity entity, Expression<Func<TEntity, object>> attributeSelector) where TEntity : Entity
        {
            string attributeLogicalName = Utils.GetAttributeLogicalName(attributeSelector);

            if (!entity.FormattedValues.TryGetValue(attributeLogicalName, out string value))
            {
                return null;
            }

            return value;
        }

        public static T GetAliasedValue<T>(this Entity entity, string alias)
        {
            AliasedValue aliasedValue = entity.GetAttributeValue<AliasedValue>(alias);
            return (T)aliasedValue.Value;
        }
    }
}
