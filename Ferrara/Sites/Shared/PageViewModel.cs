using System.Collections.Generic;
using EPiServer;
using EPiServer.Core;
using EPiServer.ServiceLocation;
using EPiServer.Web;
using Ferrara.Common;
using Ferrara.Models.ViewModels;
using Ferrara.Sites.TopMenuSite;

namespace Ferrara.Sites.Shared
{
    public class PageViewModel<T> : IPageViewModel<T> where T : SitePageData
    {

        protected Injected<IContentLoader> ContentLoader { get; set; }

        public PageViewModel(T currentPage)
        {
            CurrentPage = currentPage;
        }

        public T CurrentPage { get; private set; }
        public LayoutModel Layout { get; set; }
        public IContent Section { get; set; }
        public IEnumerable<IContent> GetStartPageChildren()
        {
            IContentRepository factory = DataFactory.Instance;
            PageReference parent = PageReference.StartPage;
            return factory.GetChildren<PageData>(parent);
            //return SiteDefinition.Current.StartPage.GetChildren();
        }

        public string GetGATrackingId()
        {
            return "";
            //return ((StartPageBase)SiteDefinition.Current.StartPage.GetContent()).GoogleAnalyticsTrackingId;
        }
    }

    public static class PageViewModel
    {
        /// <summary>
        /// Returns a PageViewModel of type <typeparam name="T"/>.
        /// </summary>
        /// <remarks>
        /// Convenience method for creating PageViewModels without having to specify the type as methods can use type inference while constructors cannot.
        /// </remarks>
        public static PageViewModel<T> Create<T>(T page) where T : SitePageData
        {
            return new PageViewModel<T>(page);
        }
    }
}