using System;
using System.ComponentModel.DataAnnotations;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using Ferrara.Models;

namespace Ferrara.Sites.TopMenuSite.SharedRecipeListPage
{
    [ContentType(DisplayName = "Shared Recipe List Page", 
        GUID = "255746f2-7082-4d20-8d7c-1470bb7e4660",
        GroupName = Global.GroupNames.TopMenuSites,
        Description = "Page for recipe list")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail-standard.png")]
    public class SharedRecipeListPage : TopMenuSitePageData
    {
        //Title
        [Display(
            Name = "Recipe Page Title*",
            Description = "Enter a title for the recipe list page",
            GroupName = SystemTabNames.Content,
            Order = 10)]
        [Required]
        public virtual string RecipeListTitle { get; set; }

        //Tag line
        [Display(
            Name = "Recipe Tagline",
            Description = "Enter a tag line for the recipe list page",
            GroupName = SystemTabNames.Content,
            Order = 10)]
        public virtual string RecipeListTagline { get; set; }

        //Recipe introduction
        [Display(
           Name = "Recipe List Introduction*",
           Description = "Enter a recipe introduction",
           GroupName = SystemTabNames.Content,
           Order = 20)]
        [Required]
        public virtual XhtmlString RecipeIntroduction { get; set; }

        //Area for recipe blocks
        [Display(
           Name = "RecipeBlocksArea",
           Description = "Area where you can render history blocks",
           GroupName = SystemTabNames.Content,
           Order = 30)]
        public virtual ContentArea RecipeArea { get; set; }
    }
}