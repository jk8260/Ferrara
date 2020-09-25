using System;
using System.ComponentModel.DataAnnotations;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using Ferrara.Models;

namespace Ferrara.Sites.Keebler.CategoriesListingPage
{
    [ContentType(DisplayName = "Categories Listing Page", 
        GroupName = Global.GroupNames.Keebler,
        GUID = "166cd8ab-cb7e-4c91-a4b0-7d6dbf0ff244", 
        Description = "Categories Listing Page should be chosen as top level for product page (Sweet Treats)")]
    [AvailableContentTypes(
        Availability.Specific,
        Include = new[] { typeof(CategoryPage.CategoryPage) })]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail-standard.png")]

    public class CategoriesListingPage : KeeblerPageData
    {
    }
}