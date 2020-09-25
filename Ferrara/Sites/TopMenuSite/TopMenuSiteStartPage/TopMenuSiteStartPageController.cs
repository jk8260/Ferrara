using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Framework.DataAnnotations;
using EPiServer.Web.Mvc;

namespace Ferrara.Sites.TopMenuSite.TopMenuSiteStartPage
{
    public class TopMenuSiteStartPageController : PageController<TopMenuSiteStartPage>
    {
        public ActionResult Index(TopMenuSiteStartPage currentPage)
        {

            return View(new TopMenuSiteStartPageViewModel(currentPage));
        }
    }
}