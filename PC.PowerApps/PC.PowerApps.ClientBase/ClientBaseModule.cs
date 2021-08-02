using Autofac;
using PC.PowerApps.Common;

namespace PC.PowerApps.ClientBase
{
    public class ClientBaseModule : Module
    {
        protected override void Load(ContainerBuilder containerBuilder)
        {
            _ = containerBuilder.RegisterType<CrmServiceClientContext>().AsSelf().As<Context>().SingleInstance();
            _ = containerBuilder.RegisterType<ScheduledJobProcessor>().SingleInstance();
        }
    }
}
