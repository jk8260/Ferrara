using EPiServer;
using EPiServer.ServiceLocation;
using Ferrara.Business;
using Ferrara.Models;
using Ferrara.Sites.Shared;
using System.Collections.Generic;
using System.Linq;

namespace Ferrara.Sites.Keebler.CategoriesListingPage
{
    public class CategoriesListingPageViewModel : PageViewModel<CategoriesListingPage>
    {
        public CategoriesListingPageViewModel(CategoriesListingPage currentPage) : base(currentPage)
        {

        }

    }
}