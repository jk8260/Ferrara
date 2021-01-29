using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Framework.DataAnnotations;
using EPiServer.Web.Mvc;
using Ferrara.Sites.Shared;

namespace Ferrara.Sites.Keebler.KeeblerSweetTreatsPage
{
    public class KeeblerSweetTreatsPageController : PageController<KeeblerSweetTreatsPage>
    {
        public ActionResult Index()
        {
            /* Implementation of action. You can create your own view model class that you pass to the view or
             * you can pass the page type for simpler templates */
            string rawUrl = HttpContext.Request.RawUrl;

            KeeblerSweetTreatsPage currentPage = new KeeblerSweetTreatsPage();
            int i = rawUrl.LastIndexOf("/") == -1 ? 0: (rawUrl.LastIndexOf("/") + 1);
            var treatName = currentPage.SweetTreatTitle = rawUrl.Substring(i);
            if (treatName.EndsWith("/"))
                treatName = currentPage.SweetTreatTitle = rawUrl.Substring(0, (rawUrl.Length - 1));
            currentPage.MetaTitle = treatName;
            return View(new PageViewModel<KeeblerSweetTreatsPage>(currentPage));
        }
    }
}