using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
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

            if (attributeName is not null)
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

        private static AttributeMetadata GetAttributeMetadata(Context context, string entityLogicalName, string attributeLogicalName)
        {
            RetrieveAttributeRequest retrieveAttributeRequest = new()
            {
                EntityLogicalName = entityLogicalName,
                LogicalName = attributeLogicalName,
            };
            RetrieveAttributeResponse retrieveAttributeResponse = (RetrieveAttributeResponse)context.OrganizationService.Execute(retrieveAttributeRequest);
            return retrieveAttributeResponse.AttributeMetadata;
        }

        public static EntityMetadata GetEntityMetadata(Context context, string entityLogicalName)
        {
            RetrieveEntityRequest retrieveEntityRequest = new()
            {
                LogicalName = entityLogicalName,
            };
            RetrieveEntityResponse retrieveEntityResponse = (RetrieveEntityResponse)context.OrganizationService.Execute(retrieveEntityRequest);
            return retrieveEntityResponse.EntityMetadata;
        }

        public static string GetLabelValue(Label label)
        {
            return label.UserLocalizedLabel.Label;
        }

        public static string GetAttributeDisplayName(Context context, string entityLogicalName, string attributeLogicalName)
        {
            AttributeMetadata attributeMetadata = GetAttributeMetadata(context, entityLogicalName, attributeLogicalName);
            string attributeDisplayName = GetLabelValue(attributeMetadata.DisplayName);
            return attributeDisplayName;
        }

        public static string GetEntityDisplayName(Context context, string entityLogicalName)
        {
            EntityMetadata entityMetadata = GetEntityMetadata(context, entityLogicalName);
            string entityDisplayName = GetLabelValue(entityMetadata.DisplayName);
            return entityDisplayName;
        }

        public static void EnsureNoAttributes(Context context, string entityLogicalName, List<string> attributeLogicalNames, string textSingle, string textMultiple)
        {
            if (attributeLogicalNames.Count == 0)
            {
                return;
            }

            List<string> attributeDisplayNames = attributeLogicalNames
                .Select(aln => $"\"{GetAttributeDisplayName(context, entityLogicalName, aln)}\"")
                .ToList();

            string entityDisplayName = GetEntityDisplayName(context, entityLogicalName);
            string attributeDisplayNameString = string.Join(", ", attributeDisplayNames);

            if (attributeDisplayNames.Count == 1)
            {
                throw new InvalidPluginExecutionException($"{entityDisplayName} {CommonConstants.AttributeText} {attributeDisplayNameString} {textSingle}.");
            }

            throw new InvalidPluginExecutionException($"{entityDisplayName} {CommonConstants.AttributesText} {attributeDisplayNameString} {textMultiple}.");
        }

        public static bool IsEmptyValue(object @object)
        {
            return @object is null || (@object is string @string && @string.Length == 0);
        }

        public static string CreateName(int maxLength, params string[] parts)
        {
            List<string> nonEmptyParts = parts
                .Where(p => p is not null)
                .Select(p => p.Trim())
                .Where(p => p.Length > 0)
                .ToList();
            string fullName = string.Join(" ", nonEmptyParts);
            string name = fullName.TakeFirst(maxLength);
            return name;
        }
    }
}
