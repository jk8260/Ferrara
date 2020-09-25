using System;
using System.ComponentModel.DataAnnotations;
using EPiServer;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using Ferrara.Models;

namespace Ferrara.Sites.Keebler.KeeblerRecipesCategoriesListingPage
{
    [ContentType(DisplayName = "Keebler Recipes Categories Listing Page",
        GroupName = Global.GroupNames.Keebler,
        GUID = "912bcc33-0fae-4073-bf9d-d059493be020",
        Description = "Keebler Recipes Categories Listing Page should be chosen as top level for Recipe page")]
    [AvailableContentTypes(
        Availability.Specific,
        Include = new[] { typeof(KeeblerRecipesCategoryPage.KeeblerRecipesCategoryPage) })]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail-standard.png")]

    public class KeeblerRecipesCategoriesListingPage : KeeblerPageData
    {
        [Display(
            Name = "Custom Fliter 1",
            Description = "Custom Fliter 1",
            GroupName = SystemTabNames.Content,
            Order = 3)]
        public virtual string CustomFilter1 { get; set; }

        [Display(
            Name = "Custom Fliter 2",
            Description = "Custom Fliter 2",
            GroupName = SystemTabNames.Content,
            Order = 6)]
        public virtual string CustomFilter2 { get; set; }

        [Display(
            Name = "Custom Fliter 3",
            Description = "Custom Fliter 3",
            GroupName = SystemTabNames.Content,
            Order = 9)]
        public virtual string CustomFilter3 { get; set; }
        
        [Display(
            Name = "No Cards Displaying Text, message that appears if there are no recipe cards",
            Description = "No Cards Displaying Text",
            GroupName = SystemTabNames.Content,
            Order = 12)]
        public virtual string NoCardsDisplayingText { get; set; }
    }
}