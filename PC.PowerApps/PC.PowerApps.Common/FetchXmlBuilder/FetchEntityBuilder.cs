using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using PC.PowerApps.Common.Entities.Fetch;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace PC.PowerApps.Common.FetchXmlBuilder
{
    public abstract class FetchEntityBuilder<TEntity> where TEntity : Entity
    {
        public List<FetchAttributeType> Attributes { get; } = new();
        public List<FetchFilterBuilder<TEntity>> FilterBuilders { get; } = new();
        public List<IFetchLinkEntityBuilder> LinkBuilders { get; } = new();
        public List<FetchOrderType> Orders { get; } = new();

        protected void AddAttributeInternal(Expression<Func<TEntity, object>> attributeSelector, string alias, AggregateType? aggregateType)
        {
            FetchAttributeType fetchAttributeType = new()
            {
                aggregate = aggregateType.GetValueOrDefault(),
                aggregateSpecified = aggregateType != null,
                alias = alias,
                name = Utils.GetAttributeLogicalName(attributeSelector),
            };
            Attributes.Add(fetchAttributeType);
        }

        protected void AddAttributesInternal(Expression<Func<TEntity, object>> attributesSelector)
        {
            HashSet<string> attributes = Utils.GetAttributeLogicalNames(attributesSelector);
            foreach (string attribute in attributes)
            {
                FetchAttributeType fetchAttributeType = new()
                {
                    name = attribute,
                };
                Attributes.Add(fetchAttributeType);
            }
        }

        protected void AddFilterInternal(filterType filterType, Action<FetchFilterBuilder<TEntity>> filterAction)
        {
            FetchFilterBuilder<TEntity> fetchFilterBuilder = new(filterType);
            filterAction(fetchFilterBuilder);
            FilterBuilders.Add(fetchFilterBuilder);
        }

        protected void AddLinkInternal<TLinkedEntity>(Expression<Func<TLinkedEntity, object>> fromAttributeSelector, Expression<Func<TEntity, object>> toAttributeSelector, JoinOperator joinOperator, Action<FetchLinkEntityBuilder<TLinkedEntity>> linkedEntityAction) where TLinkedEntity : Entity
        {
            string toAttribute = Utils.GetAttributeLogicalName(toAttributeSelector);
            FetchLinkEntityBuilder<TLinkedEntity> fetchLinkEntityBuilder = new(fromAttributeSelector, toAttribute, joinOperator);
            linkedEntityAction(fetchLinkEntityBuilder);
            LinkBuilders.Add(fetchLinkEntityBuilder);
        }

        protected void AddOrderInternal(Expression<Func<TEntity, object>> attributeSelector, OrderType orderType)
        {
            FetchOrderType fetchOrderType = new()
            {
                attribute = Utils.GetAttributeLogicalName(attributeSelector),
                descending = orderType == OrderType.Descending,
            };
            Orders.Add(fetchOrderType);
        }

        protected object[] GetItems()
        {
            List<object> items = new();
            items.AddRange(Attributes);
            foreach (FetchFilterBuilder<TEntity> filterBuilder in FilterBuilders)
            {
                filter filter = filterBuilder.GetFilter();
                items.Add(filter);
            }
            foreach (IFetchLinkEntityBuilder linkBuilder in LinkBuilders)
            {
                FetchLinkEntityType fetchLinkEntityType = linkBuilder.GetFetchLinkEntityType();
                items.Add(fetchLinkEntityType);
            }
            items.AddRange(Orders);
            return items.ToArray();
        }
    }
}
