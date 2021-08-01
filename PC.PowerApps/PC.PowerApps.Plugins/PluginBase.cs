using Microsoft.Xrm.Sdk;
using PC.PowerApps.Common;
using PC.PowerApps.Plugins.Contexts;
using System;

namespace PC.PowerApps.Plugins
{
    public abstract class PluginBase : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            try
            {
                using PluginContext pluginContext = GetPluginContext(serviceProvider);
                Execute(pluginContext);
            }
            catch (Exception e)
            when (!Utils.IsInNamespaces(e.GetType(), "Microsoft.Xrm.Sdk", nameof(System)))
            {
                throw new Exception(e.Message);
            }
        }

        protected abstract void Execute(PluginContext pluginContext);

        protected abstract PluginContext GetPluginContext(IServiceProvider serviceProvider);
    }
}
