using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Reflection;
using System.Runtime.Serialization.Json;
using System.Text;

namespace PC.PowerApps.FunctionApp
{
    public static class AssemblyBindingRedirectHelper
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
            string bindingRedirectListJson = Environment.GetEnvironmentVariable("BindingRedirects");
            using (MemoryStream memoryStream = new(Encoding.Unicode.GetBytes(bindingRedirectListJson)))
            {
                DataContractJsonSerializer serializer = new(typeof(List<BindingRedirect>));
                result = (List<BindingRedirect>)serializer.ReadObject(memoryStream);
            }
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
                byte[] targetPublicKeyToken = new AssemblyName("x, PublicKeyToken=" + bindingRedirect.PublicKeyToken).GetPublicKeyToken();
                requestedAssembly.SetPublicKeyToken(targetPublicKeyToken);
                requestedAssembly.Version = new Version(bindingRedirect.RedirectToVersion);
                requestedAssembly.CultureInfo = CultureInfo.InvariantCulture;
                AppDomain.CurrentDomain.AssemblyResolve -= handler;
                return Assembly.Load(requestedAssembly);
            }

            AppDomain.CurrentDomain.AssemblyResolve += handler;
        }

        public class BindingRedirect
        {
            public string ShortName { get; set; }
            public string PublicKeyToken { get; set; }
            public string RedirectToVersion { get; set; }
        }
    }

}
