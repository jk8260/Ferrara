

using EPiServer;
using EPiServer.Framework.DataAnnotations;
using Ferrara.Common;
using Ferrara.Models;
using Ferrara.Sites.Shared;
using System;
using System.Web.Mvc;

namespace Ferrara.Controllers
{
    /// <summary>
    /// Concrete controller that handles all page types that don't have their own specific controllers.
    /// </summary>
    /// <remarks>
    /// Note that as the view file name is hard coded it won't work with DisplayModes (ie Index.mobile.cshtml).
    /// For page types requiring such views add specific controllers for them. Alterntively the Index action
    /// could be modified to set ControllerContext.RouteData.Values["controller"] to type name of the currentPage
    /// argument. That may however have side effects.
    /// </remarks>
    [TemplateDescriptor(Inherited = true)]
    public class DefaultPageController : PageControllerBase<Common.SitePageData>
    {
        public ViewResult Index(Common.SitePageData currentPage)
        {
            var model = CreateModel(currentPage);
            Console.WriteLine("currentPage");
            Console.WriteLine(currentPage);
            return View(string.Format("~/Views/{0}/Index.cshtml", currentPage.GetOriginalType().Name), model);
        }

        /// <summary>
        /// Creates a PageViewModel where the type parameter is the type of the page.
        /// </summary>
        /// <remarks>
        /// Used to create models of a specific type without the calling method having to know that type.
        /// </remarks>
        private static IPageViewModel<Common.SitePageData> CreateModel(Common.SitePageData page)
        {
            var type = typeof(PageViewModel<>).MakeGenericType(page.GetOriginalType());
            return Activator.CreateInstance(type, page) as IPageViewModel<Common.SitePageData>;
        }
    }
}
