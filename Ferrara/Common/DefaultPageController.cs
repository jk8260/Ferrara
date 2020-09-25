using System;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Framework.DataAnnotations;
using EPiServer.Web.Mvc;
using Ferrara.Models;
using Ferrara.Models.ViewModels;
using Ferrara.Sites.Shared;

namespace Ferrara.Common
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
    public abstract class DefaultPageController<T> : PageControllerBase<T> where T : SitePageData
    {
        public ViewResult Index(T currentPage)
        {
            var model = CreateModel(currentPage);
            return View(string.Format(ViewName, currentPage.GetOriginalType().Name), Layout, model);
        }

        public abstract string ViewName { get; }

        /// <summary>
        /// Creates a PageViewModel where the type parameter is the type of the page.
        /// </summary>
        /// <remarks>
        /// Used to create models of a specific type without the calling method having to know that type.
        /// </remarks>
        private static Sites.Shared.IPageViewModel<T> CreateModel(T page)
        {
            var type = typeof(Sites.Shared.PageViewModel<>).MakeGenericType(page.GetOriginalType());
            return Activator.CreateInstance(type, page) as Sites.Shared.IPageViewModel<T>;
        }
    }

    [TemplateDescriptor(Inherited = true)]
    public abstract class DefaultBlockController<T> : BlockController<T> where T : BlockData
    {

        public override ActionResult Index(T currentBlock)
        {
            return PartialView(currentBlock);
        }

    }
}
