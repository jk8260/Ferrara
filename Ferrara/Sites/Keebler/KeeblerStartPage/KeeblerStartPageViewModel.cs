using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Ferrara.Common;
using Ferrara.Sites.Shared;

namespace Ferrara.Sites.Keebler.KeeblerStartPage
{
    public class KeeblerStartPageViewModel : PageViewModel<KeeblerStartPage>
    {
        public KeeblerStartPageViewModel(KeeblerStartPage currentPage) : base(currentPage)
        {
            BrandsCode = currentPage.BrandsCode;
        }

        public string BrandsCode { get; set; }

        public List<SitePageData> Children { get; set; }
    }
}