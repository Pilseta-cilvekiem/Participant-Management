using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using PC.PowerApps.Common.Entities.Fetch;
using System;
using System.Linq.Expressions;

namespace PC.PowerApps.Common.FetchXmlBuilder
{
    public class FetchXmlBuilder<TEntity> : FetchEntityBuilder<TEntity> where TEntity : Entity
    {
        private readonly bool aggregate;

        public FetchXmlBuilder(bool aggregate)
        {
            this.aggregate = aggregate;
        }

        public FetchXmlBuilder<TEntity> AddAttribute(Expression<Func<TEntity, object>> attributeSelector, string alias = null, AggregateType? aggregateType = null)
        {
            AddAttributeInternal(attributeSelector, alias, aggregateType);
            return this;
        }

        public FetchXmlBuilder<TEntity> AddAttributes(Expression<Func<TEntity, object>> attributesSelector)
        {
            AddAttributesInternal(attributesSelector);
            return this;
        }

        public FetchXmlBuilder<TEntity> AddFilter(filterType filterType, Action<FetchFilterBuilder<TEntity>> filterAction)
        {
            AddFilterInternal(filterType, filterAction);
            return this;
        }

        public FetchXmlBuilder<TEntity> AddLink<TLinkedEntity>(Expression<Func<TLinkedEntity, object>> fromAttributeSelector, Expression<Func<TEntity, object>> toAttributeSelector, JoinOperator joinOperator, Action<FetchLinkEntityBuilder<TLinkedEntity>> linkedEntityAction) where TLinkedEntity : Entity
        {
            AddLinkInternal(fromAttributeSelector, toAttributeSelector, joinOperator, linkedEntityAction);
            return this;
        }

        public FetchXmlBuilder<TEntity> AddOrder(Expression<Func<TEntity, object>> attributeSelector, OrderType orderType)
        {
            AddOrderInternal(attributeSelector, orderType);
            return this;
        }

        public FetchType GetFetchType()
        {
            FetchEntityType fetchEntityType = new()
            {
                Items = GetItems(),
                name = Utils.GetEntityLogicalName<TEntity>(),
            };
            FetchType fetchType = new FetchType
            {
                aggregate = aggregate,
                aggregateSpecified = true,
                Items = new[] { fetchEntityType },
            };
            return fetchType;
        }
    }
}
