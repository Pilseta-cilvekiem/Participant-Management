using System;
using System.Collections.Generic;
using System.Globalization;
using System.Reflection;

namespace PC.PowerApps.FunctionApp
{
    internal static partial class AssemblyBindingRedirectHelper
    {

        ///<summary>
        /// Reads the "BindingRedirecs" field from the app settings and applies the redirection on the
        /// specified assemblies
        /// </summary>

        public static void ConfigureBindingRedirects()
        {
            List<BindingRedirect> redirects = GetBindingRedirects();
            redirects.ForEach(RedirectAssembly);
        }

        private static List<BindingRedirect> GetBindingRedirects()
        {
            List<BindingRedirect> result = new();
            result.Add(new BindingRedirect { ShortName = "Microsoft.Bcl.AsyncInterfaces", RedirectToVersion = "6.0.0.0", PublicKeyToken = "cc7b13ffcd2ddd51" });
            result.Add(new BindingRedirect { ShortName = "Microsoft.IdentityModel.Clients.ActiveDirectory", RedirectToVersion = "5.2.9.0", PublicKeyToken = "31bf3856ad364e35" });
            result.Add(new BindingRedirect { ShortName = "Microsoft.Xrm.Sdk", RedirectToVersion = "9.0.0.0", PublicKeyToken = "31bf3856ad364e35" });
            result.Add(new BindingRedirect { ShortName = "Newtonsoft.Json", RedirectToVersion = "13.0.0.0", PublicKeyToken = "30ad4fe6b2a6aeed" });
            result.Add(new BindingRedirect { ShortName = "System.Diagnostics.DiagnosticSource", RedirectToVersion = "5.0.0.0", PublicKeyToken = "cc7b13ffcd2ddd51" });
            result.Add(new BindingRedirect { ShortName = "System.Threading.Tasks.Extensions", RedirectToVersion = "4.2.0.1", PublicKeyToken = "cc7b13ffcd2ddd51" });
            return result;
        }

        private static void RedirectAssembly(BindingRedirect bindingRedirect)
        {
            Assembly handler(object sender, ResolveEventArgs args)
            {
                AssemblyName requestedAssembly = new(args.Name);
                if (requestedAssembly.Name != bindingRedirect.ShortName)
                {
                    return null;
                }

                byte[] targetPublicKeyToken = new AssemblyName($"x, PublicKeyToken={bindingRedirect.PublicKeyToken}").GetPublicKeyToken();
                requestedAssembly.SetPublicKeyToken(targetPublicKeyToken);
                requestedAssembly.Version = new Version(bindingRedirect.RedirectToVersion);
                requestedAssembly.CultureInfo = CultureInfo.InvariantCulture;
                AppDomain.CurrentDomain.AssemblyResolve -= handler;
                return Assembly.Load(requestedAssembly);
            }

            AppDomain.CurrentDomain.AssemblyResolve += handler;
        }
    }
}
