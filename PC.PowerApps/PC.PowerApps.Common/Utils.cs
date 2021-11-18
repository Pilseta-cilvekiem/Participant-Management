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

        public static HashSet<string> GetAttributeLogicalNames<TEntity>(Expression<Func<TEntity, object>> attributeSelector) where TEntity : Entity
        {
            HashSet<string> attributeNames = new();

            string attributeName = GetAttributeLogicalNameInternal(attributeSelector.Body);

            if (attributeName != null)
            {
                attributeNames.Add(attributeName);
            }
            else if (attributeSelector.Body is NewExpression newExpression)
            {
                foreach (Expression expression in newExpression.Arguments)
                {
                    MemberExpression memberExpression = (MemberExpression)expression;
                    string attributeLogicalName = GetAttributeLogicalNameInternal(memberExpression);
                    attributeNames.Add(attributeLogicalName);
                }
            }
            else
            {
                throw new ArgumentException($"{attributeSelector.Body.GetType()} is not supported.");
            }

            return attributeNames;
        }

        public static string GetAttributeLogicalName<TEntity>(Expression<Func<TEntity, object>> attributeSelector) where TEntity : Entity
        {
            if (attributeSelector.Body is MemberExpression memberExpression)
            {
                string attributeLogicalName = GetAttributeLogicalNameInternal(memberExpression);
                return attributeLogicalName;
            }

            if (attributeSelector.Body is UnaryExpression unaryExpression)
            {
                MemberExpression unaryExpressionOperand = (MemberExpression)unaryExpression.Operand;
                string attributeLogicalName = GetAttributeLogicalNameInternal(unaryExpressionOperand);
                return attributeLogicalName;
            }

            throw new ArgumentException($"{attributeSelector.Body.GetType()} is not supported.");
        }

        private static string GetAttributeLogicalNameInternal(Expression expression)
        {
            if (expression is MemberExpression memberExpression)
            {
                string attributeLogicalName = GetAttributeLogicalNameInternal(memberExpression);
                return attributeLogicalName;
            }

            if (expression is UnaryExpression unaryExpression)
            {
                MemberExpression unaryExpressionOperand = (MemberExpression)unaryExpression.Operand;
                string attributeLogicalName = GetAttributeLogicalNameInternal(unaryExpressionOperand);
                return attributeLogicalName;
            }

            return null;
        }

        private static string GetAttributeLogicalNameInternal(MemberExpression memberExpression)
        {
            AttributeLogicalNameAttribute attribute = (AttributeLogicalNameAttribute)memberExpression.Member.GetCustomAttribute(typeof(AttributeLogicalNameAttribute));
            return attribute.LogicalName;
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
            return money == null ? 0 : money.Value;
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
            Email email = entity.ToEntity<Email>();
            email.From = new List<ActivityParty> { new() { PartyId = context.Settings.pc_EmailSender } };
            return email;
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

        public static bool IsEmptyValue(object @object)
        {
            return @object == null || (@object is string @string && @string.Length == 0);
        }

        public static string CreateName(int maxLength, params string[] parts)
        {
            List<string> nonEmptyParts = parts
                .Where(p => p != null)
                .Select(p => p.Trim())
                .Where(p => p.Length > 0)
                .ToList();

            if (nonEmptyParts.Count == 0)
            {
                return null;
            }

            string fullName = string.Join(" ", nonEmptyParts);
            string name = fullName.TakeFirst(maxLength);
            return name;
        }

        public static void DeleteRecordChangeHistory(Context context, EntityReference entityReference)
        {
            DeleteRecordChangeHistoryRequest deleteRecordChangeHistoryRequest = new()
            {
                Target = entityReference,
            };
            _ = context.OrganizationService.Execute(deleteRecordChangeHistoryRequest);
        }
    }
}
