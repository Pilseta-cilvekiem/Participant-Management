using Microsoft.Xrm.Sdk;
using System.Collections.Generic;
using System.IO;
using System.Runtime.Serialization;

namespace PC.PowerApps.Common
{
    public static class Utils
    {
        public static TEntity CopyEntity<TEntity>(TEntity sourceEntity) where TEntity : Entity, new()
        {
            TEntity targetEntity = new TEntity();
            targetEntity.LogicalName = sourceEntity.LogicalName;

            foreach (KeyValuePair<string, object> sourceAttribute in sourceEntity.Attributes)
            {
                object targetAttributeValue = Copy(sourceAttribute.Value);
                targetEntity.Attributes.Add(sourceAttribute.Key, targetAttributeValue);
            }

            return targetEntity;
        }

        private static T Copy<T>(T sourceObject)
        {
            NetDataContractSerializer netDataContractSerializer = new NetDataContractSerializer();
            using MemoryStream memoryStream = new MemoryStream();
            netDataContractSerializer.Serialize(memoryStream, sourceObject);
            memoryStream.Position = 0;
            T targetObject = (T)netDataContractSerializer.Deserialize(memoryStream);
            return targetObject;
        }

        public static bool AreEqual(object object1, object object2)
        {
            return Equals(object1, object2);
        }
    }
}
