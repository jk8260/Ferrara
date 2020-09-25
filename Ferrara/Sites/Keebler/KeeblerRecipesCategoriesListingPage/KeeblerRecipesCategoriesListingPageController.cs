using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Framework.DataAnnotations;
using EPiServer.Web.Mvc;

namespace Ferrara.Sites.Keebler.KeeblerRecipesCategoriesListingPage
{
    public class KeeblerRecipesCategoriesListingPageController : PageController<KeeblerRecipesCategoriesListingPage>
    {
        public ActionResult Index(KeeblerRecipesCategoriesListingPage currentPage)
        {
            /* Implementation of action. You can create your own view model class that you pass to the view or
             * you can pass the page type for simpler templates */

            return View(new KeeblerRecipesCategoriesListingPageViewModel(currentPage));
        }
    }
}