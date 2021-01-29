using Ferrara.Common;
using System;
using System.Diagnostics;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace Ferrara
{
    public class EPiServerApplication : EPiServer.Global
    {
        protected void Application_Start()
        {
            Console.WriteLine("Yep");
            AreaRegistration.RegisterAllAreas();
            ViewEngines.Engines.Add(new MultiSiteViewEngine());
            GlobalConfiguration.Configure(WebApiConfig.Register);
            //Tip: Want to call the EPiServer API on startup? Add an initialization module instead (Add -> New Item.. -> EPiServer -> Initialization Module)
        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {
            HttpContext InRequest = HttpContext.Current;
            //Get the current path
            //string OldPath = InRequest.Request.Path.ToLower();
            //Debug.WriteLine($"Oldpath {OldPath}");
            Debug.WriteLine($"{InRequest.Request.RawUrl}");
        }

        void Application_Error(object sender, EventArgs e)
        {
            // Code that runs when an unhandled error occurs
            Exception objErr = HttpContext.Current.Server.GetLastError().GetBaseException();
            string err = "Trapped Application_Error in: " + Request.Url.ToString() + ". Error Message:" + objErr.Message.ToString();
            Debug.WriteLine(err);
        }
    }
}