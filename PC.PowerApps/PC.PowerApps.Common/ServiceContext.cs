using CrmEarlyBound;
using Microsoft.Xrm.Sdk;
using PC.PowerApps.Common.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;

namespace PC.PowerApps.Common
{
    public class ServiceContext : ServiceContextBase
    {
        private readonly IOrganizationService organizationService;
        private readonly Dictionary<EntityReference, Entity> retrievedEntities = new Dictionary<EntityReference, Entity>();

        public ServiceContext(IOrganizationService organizationService) : base(organizationService)
        {
            this.organizationService = organizationService;
        }

        public TEntity Retrieve<TEntity>(Guid id) where TEntity : Entity
        {
            return CreateQuery<TEntity>()
                .Where(e => e.Id == id)
                .TakeSingle($"{typeof(TEntity).Name} with ID {id} does not exist.");
        }

        protected override void OnBeginEntityTracking(Entity entity)
        {
            base.OnBeginEntityTracking(entity);
            Entity entityCopy = Utils.CopyEntity(entity);
            EntityReference entityRef = entity.ToEntityReference();
            retrievedEntities.Add(entityRef, entityCopy);
        }

        public bool UpdateModifiedAttributes<TEntity>(TEntity modifiedEntity) where TEntity : Entity, new()
        {
            Entity retrievedEntity;

            try
            {
                retrievedEntity = retrievedEntities[modifiedEntity.ToEntityReference()];
            }
            catch (KeyNotFoundException)
            {
                throw Context.CreateException($"Entity {modifiedEntity.LogicalName} with ID {modifiedEntity.Id} is not tracked.");
            }

            TEntity patchEntity = new TEntity();
            patchEntity.Id = modifiedEntity.Id;
            bool update = false;

            foreach (KeyValuePair<string, object> attribute in modifiedEntity.Attributes)
            {
                if (!retrievedEntity.TryGetAttributeValue(attribute.Key, out object retrievedAttributeValue) || !Utils.AreEqual(attribute.Value, retrievedAttributeValue))
                {
                    patchEntity.Attributes.Add(attribute.Key, attribute.Value);
                    update = true;
                }
            }

            if (update)
            {
                organizationService.Update(patchEntity);
            }

            return update;
        }
    }
}
