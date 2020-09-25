using System;
using System.ComponentModel.DataAnnotations;
using EPiServer;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using Ferrara.Models;

namespace Ferrara.Sites.TopMenuSite.SharedProductListBlock
{
    [ContentType(DisplayName = "Shared Product List Block",
        GUID = "4bfcf080-df76-4242-901f-a595fe921e06",
        GroupName = Global.GroupNames.TopMenuSites,
        Description = "Product block for list")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail.png")]

    public class SharedProductListBlock : BlockData
    {
        [CultureSpecific]
        [Display(
            Name = "Product Name*",
            Description = "Add a product name",
            GroupName = SystemTabNames.Content,
            Order = 10)]
        [Required]
        public virtual string ProductName { get; set; }

        [Display(
           Name = "Product Image*",
           Description = "Add a product image",
           GroupName = SystemTabNames.Content,
           Order = 20)]
        [Required]
        [AllowedTypes(AllowedTypes = new[] { typeof(SharedImageBlock.SharedImageBlock) })]
        public virtual ContentArea ProductImage { get; set; }

        [CultureSpecific]
        [Display(
            Name = "Link to Product Details Page*",
            Description = "Link to Product Details Page",
            GroupName = SystemTabNames.Content,
            Order = 40)]
        [Required]
        public virtual PageReference ProductDetailsPageLink { get; set; }

    }
}