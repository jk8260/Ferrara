using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Framework.DataAnnotations;
using EPiServer.Web.Mvc;
using Ferrara.Sites.Shared;

namespace Ferrara.Sites.Keebler.CategoriesListingPage
{
    public class CategoriesListingPageController : PageController<CategoriesListingPage>
    {
        public ActionResult Index(CategoriesListingPage currentPage)
        {
            return View(new CategoriesListingPageViewModel(currentPage));
        }

    }
}