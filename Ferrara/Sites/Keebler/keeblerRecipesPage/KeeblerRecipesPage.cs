using System;
using System.ComponentModel.DataAnnotations;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using Ferrara.Models;

namespace Ferrara.Sites.Keebler.KeeblerRecipesPage
{
    [ContentType(DisplayName = "Keebler Recipes Page", 
        GUID = "6e331728-181c-4e8c-af3d-3ec6fef734ae",
        GroupName = Global.GroupNames.Keebler,
        Description = "Keebler Individual Recipe Page (includes fields such as ingredients, directions, etc.)")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail-standard.png")]
    public class KeeblerRecipesPage : KeeblerPageData
    {
        //Title
        [Required]
        [Display(
            Name = "Recipe Name (appears next to recipe image)*",
            Description = "Enter a name for this recipe, will appear next to recipe image",
            GroupName = SystemTabNames.Content,
            Order = 5)]
        public virtual string RecipeTitle { get; set; }

        [Display(
           Name = "Recipe Image",
           Description = "Input image of this recipe",
           GroupName = SystemTabNames.Content,
           Order = 10)]
        [MaxItems(1)]
        [AllowedTypes(AllowedTypes = new[] { typeof(KeeblerImageBlock.KeeblerImageBlock) })]
        public virtual ContentArea RecipeImage { get; set; }

        [CultureSpecific]
        [Display(
         Name = "Recipe Description Paragraph (appears under the Recipe name)",
         Description = "Input recipe description",
         GroupName = SystemTabNames.Content,
         Order = 15)]
        public virtual XhtmlString RecipeIntro { get; set; }

        [CultureSpecific]
        [Display(
         Name = "Recipe Information (information such as prep time, servings, etc. go here)",
         Description = "(ex: prep time, servings, etc.)",
         GroupName = SystemTabNames.Content,
         Order = 20)]
        public virtual XhtmlString RecipeInfo { get; set; }

        [Display(
           Name = "Nutrition Block for Recipe",
           Description = "Area to put nutritional information",
           GroupName = SystemTabNames.Content,
           Order = 25)]
        [AllowedTypes(AllowedTypes = new[] { typeof(KeeblerNutritionBlock.KeeblerNutritionBlock) })]
        public virtual ContentArea RecipeNutritionInfo { get; set; }

        [CultureSpecific]
        [Display(
           Name = "Nutrition Info Button Label (appears on button)",
           Description = "Nutrition Info Button",
           GroupName = SystemTabNames.Content,
           Order = 30)]
        public virtual string NutritionInfoButton { get; set; }

        [Display(
            Name = "Ingredients Title (label for Ingredients section)",
            Description = "Ingredients label",
            GroupName = SystemTabNames.Content,
            Order = 35)]
        public virtual string IngredientsTitle { get; set; }

        [CultureSpecific]
        [Display(
         Name = "Ingredients Section (place the individual ingredients here)",
         Description = "Input recipe ingredients",
         GroupName = SystemTabNames.Content,
         Order = 40)]
        public virtual XhtmlString RecipeIngredients { get; set; }

        [Display(
            Name = "Directions Title (label for Directions section)",
            Description = "Directions label",
            GroupName = SystemTabNames.Content,
            Order = 45)]
        public virtual string DirectionsTitle { get; set; }


        [CultureSpecific]
        [Display(
        Name = "Directions Section (can be placed as a paragraph or numbered list)",
        Description = "Input recipe details",
        GroupName = SystemTabNames.Content,
        Order = 50)]
        public virtual XhtmlString RecipeDirections { get; set; }

        [Display(
           Name = "Products Used Blocks (will not display if no products used are entered)",
           Description = "Area to put products used cards",
           GroupName = SystemTabNames.Content,
           Order = 55)]
        [AllowedTypes(AllowedTypes = new[] { typeof(KeeblerRecipeProductsUsedBlock.KeeblerRecipeProductsUsedBlock) })]
        public virtual ContentArea ProductsUsed { get; set; }
    }
}