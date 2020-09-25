using Ferrara.Common;
using System;
using System.Web.Http;
using System.Web.Mvc;

namespace Ferrara
{
    public class EPiServerApplication : EPiServer.Global
    {
        protected void Application_Start()
        {

            AreaRegistration.RegisterAllAreas();
            ViewEngines.Engines.Add(new MultiSiteViewEngine());
            GlobalConfiguration.Configure(WebApiConfig.Register);
            //Tip: Want to call the EPiServer API on startup? Add an initialization module instead (Add -> New Item.. -> EPiServer -> Initialization Module)
        }
    }
}