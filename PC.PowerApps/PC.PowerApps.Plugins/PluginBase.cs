using Microsoft.Xrm.Sdk;
using PC.PowerApps.Plugins.Contexts;
using System;

namespace PC.PowerApps.Plugins
{
    public abstract class PluginBase : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            using PluginContext pluginContext = GetPluginContext(serviceProvider);
            Execute(pluginContext);
        }

        protected abstract void Execute(PluginContext pluginContext);

        protected abstract PluginContext GetPluginContext(IServiceProvider serviceProvider);
    }
}
