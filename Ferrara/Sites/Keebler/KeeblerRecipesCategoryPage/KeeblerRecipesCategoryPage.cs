using System;
using System.ComponentModel.DataAnnotations;
using EPiServer;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using Ferrara.Models;

namespace Ferrara.Sites.Keebler.KeeblerRecipesCategoryPage
{
    [ContentType(DisplayName = "Keebler Recipes Category Page", 
        GUID = "bdc31def-539e-4eed-a4b5-c3d0a27228b4",
        GroupName = Global.GroupNames.Keebler,
        Description = "Keebler Recipes Category Page (Fields included: Category Title, Category Image, Tabs Container)")]

    [AvailableContentTypes(
        Availability.Specific,
        Include = new[] { typeof(KeeblerRecipesPage.KeeblerRecipesPage) })]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail-standard.png")]
    public class KeeblerRecipesCategoryPage : KeeblerPageData
    {
        [CultureSpecific]
        [Display(
            Name = "Category Title(ex: Cones, Cookies, Pie Crusts)",
            Description = "Category Title",
            GroupName = SystemTabNames.Content,
            Order = 100)]
        [Required]
        public virtual string CategoryTitle { get; set; }

        [CultureSpecific]
        [Display(
            Name = "Category Image (image that displays on navigation)",
            Description = "Category Image",
            GroupName = SystemTabNames.Content,
            Order = 150)]
        public virtual Url CategoryImage { get; set; }


        [CultureSpecific]
        [Display(
            Name = "Tabs Container (area to input recipe cards)",
            Description = "Tabs Container",
            GroupName = SystemTabNames.Content,
            Order = 200)]
        [AllowedTypes(AllowedTypes = new[] { typeof(KeeblerRecipesCategoryCardBlock.KeeblerRecipesCategoryCardBlock) })]
        public virtual ContentArea TabsContainer { get; set; }
    }
}