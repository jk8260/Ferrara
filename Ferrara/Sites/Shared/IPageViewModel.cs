using System.Collections;
using System.Collections.Generic;
using EPiServer.Core;
using Ferrara.Common;
using Ferrara.Models.ViewModels;


namespace Ferrara.Sites.Shared
{
    public interface IPageViewModel<out T> where T : SitePageData
    {
        T CurrentPage { get; }
        LayoutModel Layout { get; set; }
        IContent Section { get; set; }
        IEnumerable<IContent> GetStartPageChildren();
        string GetGATrackingId();
    }
}