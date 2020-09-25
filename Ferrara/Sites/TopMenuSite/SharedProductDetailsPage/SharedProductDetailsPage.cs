using System;
using System.ComponentModel.DataAnnotations;
using EPiServer;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using Ferrara.Models;

namespace Ferrara.Sites.TopMenuSite.SharedProductDetailsPage
{
    [ContentType(DisplayName = "Shared Product Details Page", 
        GUID = "15ce5d2b-7544-46f9-a6d8-e0df5bde6b07", 
        GroupName = Global.GroupNames.TopMenuSites,
        Description = "Here is the Product Details Page")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail-standard.png")]
    public class SharedProductDetailsPage : TopMenuSitePageData
    {
        [Display(
            Name = "Product Name*",
            Description = "Enter a product name",
            GroupName = SystemTabNames.Content,
            Order = 100)]
        [Required]
        public virtual string ProductName { get; set; }

        [Display(
           Name = "Product Details*",
           Description = "Enter product details",
           GroupName = SystemTabNames.Content,
           Order = 200)]
        [Required]
        public virtual XhtmlString ProductDetails { get; set; }

        [Display(
           Name = "Product Image Blocks (max-width 500px)",
           Description = "Add product images",
           GroupName = SystemTabNames.Content,
           Order = 300)]
        [AllowedTypes(AllowedTypes = new[] { typeof(SharedImageBlock.SharedImageBlock) })]
        [Required]
        public virtual ContentArea ProductImages { get; set; }

        [Display(
           Name = "Nutrition Blocks",
           Description = "Area where nutrition blocks are rendered",
           GroupName = SystemTabNames.Content,
           Order = 400)]
        [Required]
        [AllowedTypes(AllowedTypes = new[] { typeof(SharedNutritionBlock.SharedNutritionBlock) })]
        public virtual ContentArea NutritionBlocks { get; set; }

        [Display(
            Name = "Where To Buy Product ID* (example: ChocChip)",
            Description = "Enter a product ID",
            GroupName = Global.GroupNames.BrandTheme,
            Order = 550)]
        [Required]
        public virtual string WhereToBuyProductID { get; set; }
    }
}