using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using PC.PowerApps.Common.Entities.Fetch;
using System;
using System.Linq.Expressions;

namespace PC.PowerApps.Common.FetchXmlBuilder
{
    public class FetchLinkEntityBuilder<TEntity> : FetchEntityBuilder<TEntity>, IFetchLinkEntityBuilder where TEntity : Entity
    {
        private Expression<Func<TEntity, object>> fromAttributeSelector;
        private string toAttribute;
        private JoinOperator joinOperator;

        public FetchLinkEntityBuilder(Expression<Func<TEntity, object>> fromAttributeSelector, string toAttribute, JoinOperator joinOperator)
        {
            this.fromAttributeSelector = fromAttributeSelector;
            this.toAttribute = toAttribute;
            this.joinOperator = joinOperator;
        }

        public FetchLinkEntityBuilder<TEntity> AddAttribute(Expression<Func<TEntity, object>> attributeSelector, string alias = null, AggregateType? aggregateType = null)
        {
            AddAttributeInternal(attributeSelector, alias, aggregateType);
            return this;
        }

        public FetchLinkEntityBuilder<TEntity> AddAttributes(Expression<Func<TEntity, object>> attributesSelector)
        {
            AddAttributesInternal(attributesSelector);
            return this;
        }

        public FetchLinkEntityBuilder<TEntity> AddFilter(filterType filterType, Action<FetchFilterBuilder<TEntity>> filterAction)
        {
            AddFilterInternal(filterType, filterAction);
            return this;
        }

        public FetchLinkEntityBuilder<TEntity> AddLink<TLinkedEntity>(Expression<Func<TLinkedEntity, object>> fromAttributeSelector, Expression<Func<TEntity, object>> toAttributeSelector, Action<FetchLinkEntityBuilder<TLinkedEntity>> linkedEntityAction, JoinOperator joinOperator) where TLinkedEntity : Entity
        {
            AddLinkInternal(fromAttributeSelector, toAttributeSelector, joinOperator, linkedEntityAction);
            return this;
        }

        public FetchLinkEntityType GetFetchLinkEntityType()
        {
            FetchLinkEntityType fetchLinkEntityType = new()
            {
                from = Utils.GetAttributeLogicalName(fromAttributeSelector),
                Items = GetItems(),
                linktype = joinOperator.ToString().ToLowerInvariant(),
                name = Utils.GetEntityLogicalName<TEntity>(),
                to = toAttribute,
            };
            return fetchLinkEntityType;
        }
    }
}
