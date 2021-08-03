using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using PC.PowerApps.Common.Entities.Dataverse;
using PC.PowerApps.Common.Extensions;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
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

        public static List<string> GetAttributeNames<TEntity>(Expression<Func<TEntity, object>> attributeSelector) where TEntity : Entity
        {
            List<string> attributeNames = new();

            if (attributeSelector.Body is MemberExpression memberExpression)
            {
                AddMember(attributeNames, memberExpression);
            }
            else if (attributeSelector.Body is UnaryExpression unaryExpression)
            {
                AddMember(attributeNames, (MemberExpression)unaryExpression.Operand);
            }
            else if (attributeSelector.Body is NewExpression newExpression)
            {
                foreach (Expression expression in newExpression.Arguments)
                {
                    AddMember(attributeNames, (MemberExpression)expression);
                }
            }
            else
            {
                throw new ArgumentException($"{attributeSelector.Body.GetType()} is not supported.");
            }

            return attributeNames;
        }

        private static void AddMember(List<string> attributeNames, MemberExpression memberExpression)
        {
            AttributeLogicalNameAttribute attribute = (AttributeLogicalNameAttribute)memberExpression.Member.GetCustomAttribute(typeof(AttributeLogicalNameAttribute));
            attributeNames.Add(attribute.LogicalName);
        }

        public static string GetPrimaryIdAttribute(Entity entity)
        {
            Type entityType = entity.GetType();
            FieldInfo fieldInfo = entityType.GetField("PrimaryIdAttribute");
            string primaryIdAttribute = (string)fieldInfo.GetValue(null);
            return primaryIdAttribute;
        }

        public static decimal GetAmountOrZero(Money money)
        {
            return money is null ? 0 : money.Value;
        }

        public static bool IsInNamespaces(Type type, params string[] namespaces)
        {
            return namespaces.Any(n => type.Namespace == n || type.Namespace.StartsWith($"{n}."));
        }

        public static Email CreateEmailFromTemplate(Context context, Guid templateId, EntityReference objectReference)
        {
            InstantiateTemplateRequest instantiateTemplateRequest = new()
            {
                ObjectId = objectReference.Id,
                ObjectType = objectReference.LogicalName,
                TemplateId = templateId,
            };
            InstantiateTemplateResponse instantiateTemplateResponse = (InstantiateTemplateResponse)context.OrganizationService.Execute(instantiateTemplateRequest);
            Entity entity = (Entity)instantiateTemplateResponse.EntityCollection.Entities.TakeSingle();
            return entity.ToEntity<Email>();
        }

        public static void SendEmail(Context context, Email email)
        {
            SendEmailRequest sendEmailRequest = new()
            {
                EmailId = email.Id,
                IssueSend = true,
            };
            _ = context.OrganizationService.Execute(sendEmailRequest);
        }
    }
}
