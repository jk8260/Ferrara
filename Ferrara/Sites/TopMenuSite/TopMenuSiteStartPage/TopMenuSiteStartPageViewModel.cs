using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Ferrara.Common;
using Ferrara.Sites.Shared;

namespace Ferrara.Sites.TopMenuSite.TopMenuSiteStartPage
{
    public class TopMenuSiteStartPageViewModel : PageViewModel<TopMenuSiteStartPage>
    {
        public TopMenuSiteStartPageViewModel(TopMenuSiteStartPage currentPage) : base(currentPage)
        {
            BrandsCode = currentPage.BrandsCode;
        }

        public string BrandsCode { get; set; }

        public List<SitePageData> Children { get; set; }
    }

}