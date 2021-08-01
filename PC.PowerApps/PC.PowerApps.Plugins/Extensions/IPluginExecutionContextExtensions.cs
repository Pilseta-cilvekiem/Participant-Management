using Microsoft.Xrm.Sdk;
using PC.PowerApps.Plugins.Enumerations;

namespace PC.PowerApps.Plugins.Extensions
{
    public static class IPluginExecutionContextExtensions
    {
        public static bool IsDeleteOf(this IPluginExecutionContext pluginExecutionContext, EntityReference entityReference)
        {
            return
                entityReference is not null &&
                pluginExecutionContext.MessageName == PluginMessage.Delete.ToString() &&
                pluginExecutionContext.PrimaryEntityName == entityReference.LogicalName &&
                pluginExecutionContext.PrimaryEntityId == entityReference.Id;
        }
    }
}
