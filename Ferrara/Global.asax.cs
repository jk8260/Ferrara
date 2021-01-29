using Ferrara.Common;
using Ferrara.Sites.Keebler.KeeblerSweetTreatsPage;
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
            string reqPath = InRequest.Request.Path.ToLower();
            //Get the current path
            
            //Debug.WriteLine($"Oldpath {OldPath}");
            Debug.WriteLine($"rawPath = {InRequest.Request.RawUrl}");
            Debug.WriteLine($"reqPath =  {reqPath}");
            if (reqPath.LastIndexOf("/sweet-treats/") == -1 &&
                reqPath.LastIndexOf("/sweet-treats2/") == -1)
                return;
            // filter out calls to the sweet treat list controller
            if (InRequest.Request.RawUrl.Equals("/en/sweet-treats/") || 
                InRequest.Request.RawUrl.Equals("/en/sweet-treats2/")) 
            {
                
            }
            else if (InRequest.Request.RawUrl.Contains("/en/sweet-treats/") || 
                     InRequest.Request.RawUrl.Contains("/en/sweet-treats2/")) // new sweet treats
            {
                Debug.WriteLine($"CAUGHT IT");
                string reqUrl = InRequest.Request.RawUrl.ToLower();
                if (reqUrl.EndsWith("/"))
                    reqUrl = reqUrl.Substring(0,(reqUrl.Length - 1));
                //KeeblerSweetTreatsPage cp = new KeeblerSweetTreatsPage();
                //cp.SweetTreatTitle = OldPath.Substring(OldPath.LastIndexOf('/'));
                //InRequest.Response.RedirectToRoute("KeeblerSweetTreatsPage", new { thisName = OldPath.Substring(OldPath.LastIndexOf('/'))});
                InRequest.RewritePath("/KeeblerSweetTreatsPage/", true );
            }
                
        }

        void Application_Error(object sender, EventArgs e)
        {
            // Code that runs when an unhandled error occurs
            //Exception objErr = HttpContext.Current.Server.GetLastError().GetBaseException();
            //string err = "Trapped Application_Error in: " + Request.Url.ToString() + ". Error Message:" + objErr.Message.ToString();
            //Debug.WriteLine(err);
        }
    }
}