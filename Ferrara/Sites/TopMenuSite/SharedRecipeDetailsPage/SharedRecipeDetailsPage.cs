using System;
using System.ComponentModel.DataAnnotations;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using Ferrara.Models;

namespace Ferrara.Sites.TopMenuSite.SharedRecipeDetailsPage
{
    [ContentType(DisplayName = "Shared Recipe Details Page", 
        GUID = "7252f790-909b-4dde-b478-ab591878e174",
        GroupName = Global.GroupNames.TopMenuSites,
        Description = "Shared Recipe Details Page")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail-standard.png")]
    public class SharedRecipeDetailsPage : TopMenuSitePageData
    {
        [CultureSpecific]
        [Display(
         Name = "Recipe Intro",
         Description = "Input recipe intro",
         GroupName = SystemTabNames.Content,
         Order = 10)]
        public virtual XhtmlString RecipeIntro { get; set; }

        [Display(
           Name = "Nutrition Block",
           Description = "Area to put nutritional information",
           GroupName = SystemTabNames.Content,
           Order = 15)]
        [AllowedTypes(AllowedTypes = new[] { typeof(SharedNutritionBlock.SharedNutritionBlock) })]
        public virtual ContentArea RecipeNutritionInfo { get; set; }

        [CultureSpecific]
        [Display(
         Name = "Ingredients",
         Description = "Input recipe ingredients",
         GroupName = SystemTabNames.Content,
         Order = 20)]
        public virtual XhtmlString RecipeIngredients { get; set; }

        [Display(
           Name = "Recipe Image",
           Description = "Area where you can input recipe image",
           GroupName = SystemTabNames.Content,
           Order = 30)]
        public virtual ContentArea RecipeImage { get; set; }

        [CultureSpecific]
        [Display(
        Name = "Recipe Directions",
        Description = "Input recipe details",
        GroupName = SystemTabNames.Content,
        Order = 40)]
        public virtual XhtmlString RecipeDirections { get; set; }
    }
}