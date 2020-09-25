using System;
using System.ComponentModel.DataAnnotations;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using Ferrara.Sites.Shared;

namespace Ferrara.Sites.Keebler.KeeblerRecipesCategoriesListingPage
{
    public class KeeblerRecipesCategoriesListingPageViewModel : PageViewModel<KeeblerRecipesCategoriesListingPage>
    {
        public KeeblerRecipesCategoriesListingPageViewModel(KeeblerRecipesCategoriesListingPage currentPage) : base(currentPage)
        {

        }
    }
}