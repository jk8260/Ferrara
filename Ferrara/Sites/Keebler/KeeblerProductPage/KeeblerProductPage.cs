using System;
using System.ComponentModel.DataAnnotations;
using EPiServer;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using Ferrara.Models;

namespace Ferrara.Sites.Keebler.KeeplerProductPage
{
    [ContentType(DisplayName = "Keebler Product Page", 
        GUID = "54cd2390-72ce-40e7-ae35-cdab6c277aad",
        GroupName = Global.GroupNames.Keebler,
        Description = "Product Page for details on a particular product")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail-standard.png")]
    public class KeeblerProductPage : KeeblerPageData
    {
        [CultureSpecific]
        [Display(
            Name = "Product Name",
            GroupName = SystemTabNames.Content,
            Order = 100)]
        [Required]
        public virtual string ProductName { get; set; }

        [CultureSpecific]
        [Display(
            Name = "Product Image",
            GroupName = SystemTabNames.Content,
            Order = 110)]
        [AllowedTypes(AllowedTypes = new[] { typeof(KeeblerImageBlock.KeeblerImageBlock) })]
        [Required]
        public virtual ContentArea ProductImage { get; set; }

        [CultureSpecific]
        [Display(
            Name = "Product Description Name",
            Description = "Product Description Name",
            GroupName = SystemTabNames.Content,
            Order = 120)]
        [Required]
        public virtual string ProductDescriptionName { get; set; }

        [CultureSpecific]
        [Display(
            Name = "Product Description",
            Description = "Product Description",
            GroupName = SystemTabNames.Content,
            Order = 130)]
        public virtual XhtmlString ProductDescription { get; set; }

        [CultureSpecific]
        [Display(
            Name = "Nutrition Info Button",
            Description = "Nutrition Info Button",
            GroupName = SystemTabNames.Content,
            Order = 140)]
        public virtual string NutritionInfoButton { get; set; }

        [CultureSpecific]
        [Display(
            Name = "Buy Now Product ID* (example: deluxe_grahams)",
            Description = "Enter product ID for Buy Now button",
            GroupName = SystemTabNames.Content,
            Order = 150)]
        public virtual string BuyNowButton { get; set; }

        [CultureSpecific]
        [Display(
            Name = "Nutrition Blocks",
            GroupName = SystemTabNames.Content,
            Order = 150)]
        [AllowedTypes(AllowedTypes = new[] { typeof(KeeblerNutritionBlock.KeeblerNutritionBlock) })]
        [Required]
        public virtual ContentArea NutritionBlocks { get; set; }

        [CultureSpecific]
        [Display(
            Name = "Recipes Category Card Blocks",
            GroupName = SystemTabNames.Content,
            Order = 160)]
        [AllowedTypes(AllowedTypes = new[] { typeof(KeeblerRecipesCategoryCardBlock.KeeblerRecipesCategoryCardBlock) })]
        public virtual ContentArea RecipesCategoryCardBlocks { get; set; }

        [CultureSpecific]
        [Display(
            Name = "Link to Recipe Page",
            GroupName = SystemTabNames.Content,
            Order = 170)]
        public virtual PageReference LinkToRecipePage { get; set; }
    }
}