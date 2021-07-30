using Microsoft.Xrm.Sdk;
using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

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

        public TEntity Retrieve<TEntity>(EntityReference entityReference) where TEntity : Entity
        {
            if (entityReference == null)
            {
                return null;
            }

            FieldInfo entityLogicalNameField = typeof(TEntity).GetField("EntityLogicalName", BindingFlags.Public | BindingFlags.Static);
            string entityLogicalName = (string)entityLogicalNameField.GetValue(null);

            if (entityReference.LogicalName != entityLogicalName)
            {
                throw new ArgumentException($"Entity reference logical name is {entityReference.LogicalName}, expected: {entityLogicalName}.");
            }

            return Retrieve<TEntity>(entityReference.Id);
        }

        protected override void OnBeginEntityTracking(Entity entity)
        {
            base.OnBeginEntityTracking(entity);
            Entity entityCopy = Utils.CopyEntity(entity);
            EntityReference entityRef = entity.ToEntityReference();
            retrievedEntities[entityRef] = entityCopy;
        }

        public bool UpdateModifiedAttributes<TEntity>(TEntity modifiedEntity) where TEntity : Entity, new()
        {
            Entity retrievedEntity = retrievedEntities[modifiedEntity.ToEntityReference()];
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
