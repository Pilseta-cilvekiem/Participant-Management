using Microsoft.Xrm.Sdk;
using PC.PowerApps.Common;
using System;

namespace PC.PowerApps.Plugins
{
    public abstract class PluginBase : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            try
            {
                ExecuteInternal(serviceProvider);
            }
            catch (Exception e)
            when (!Utils.IsInNamespaces(e.GetType(), "Microsoft.Xrm.Sdk", nameof(System)))
            {
                throw new Exception(e.Message);
            }
        }

        protected abstract void ExecuteInternal(IServiceProvider serviceProvider);
    }
}
