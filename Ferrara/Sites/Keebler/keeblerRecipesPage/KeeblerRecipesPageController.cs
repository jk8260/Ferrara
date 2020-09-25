using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Framework.DataAnnotations;
using EPiServer.Web.Mvc;
using Ferrara.Sites.Shared;

namespace Ferrara.Sites.Keebler.KeeblerRecipesPage
{
    public class KeeblerRecipesPageController : PageController<KeeblerRecipesPage>
    {
        public ActionResult Index(KeeblerRecipesPage currentPage)
        {
            /* Implementation of action. You can create your own view model class that you pass to the view or
             * you can pass the page type for simpler templates */

            return View(new PageViewModel<KeeblerRecipesPage>(currentPage));
        }
    }
}