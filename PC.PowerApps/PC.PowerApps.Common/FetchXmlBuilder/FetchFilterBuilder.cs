using Microsoft.Xrm.Sdk;
using PC.PowerApps.Common.Entities.Fetch;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace PC.PowerApps.Common.FetchXmlBuilder
{
    public class FetchFilterBuilder<TEntity> where TEntity : Entity
    {
        private readonly filterType filterType;

        public List<condition> Conditions { get; } = new();
        public List<FetchFilterBuilder<TEntity>> Filters { get; } = new();

        public FetchFilterBuilder(filterType filterType)
        {
            this.filterType = filterType;
        }

        public FetchFilterBuilder<TEntity> AddCondition(Expression<Func<TEntity, object>> attributeSelector, @operator @operator, object value)
        {
            string attribute = Utils.GetAttributeLogicalName(attributeSelector);
            condition condition = new()
            {
                attribute = attribute,
                @operator = @operator,
                value = value?.ToString(),
            };
            Conditions.Add(condition);
            return this;
        }

        public FetchFilterBuilder<TEntity> AddFilter(filterType filterType, Action<FetchFilterBuilder<TEntity>> filterAction)
        {
            FetchFilterBuilder<TEntity> fetchFilterBuilder = new(filterType);
            filterAction(fetchFilterBuilder);
            Filters.Add(fetchFilterBuilder);
            return this;
        }

        public filter GetFilter()
        {
            List<object> items = new();
            items.AddRange(Filters);
            items.AddRange(Conditions);
            filter filter = new()
            {
                type = filterType,
                Items = items.ToArray(),
            };
            return filter;
        }
    }
}
