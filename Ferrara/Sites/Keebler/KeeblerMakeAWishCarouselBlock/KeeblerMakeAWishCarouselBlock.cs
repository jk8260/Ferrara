using System;
using System.ComponentModel.DataAnnotations;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using Ferrara.Models;

namespace Ferrara.Sites.Keebler.KeeblerMakeAWishCarouselBlock
{
    [ContentType(DisplayName = "Keebler Make A Wish Carousel Block", 
        GUID = "6987bcde-0681-48a5-b71f-d85c9f9a9b18", 
        Description = "If there are multiple images in this block, this will create a carousel. " +
        "Otherwise it displays the single image. ")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail.png")]


    public class KeeblerMakeAWishCarouselBlock : BlockData
    {
        [CultureSpecific]
        [Required]
        [Display(
            Name = "Keebler Image Blocks - Please add images in the carousel that have the same height",
            Description = "",
            GroupName = SystemTabNames.Content,
            Order = 10)]
        [AllowedTypes(AllowedTypes = new[] { typeof(KeeblerImageBlock.KeeblerImageBlock) })]
        public virtual ContentArea ImageBlock { get; set; }

        [Display(
           Name = "Custom CSS ID For Carousel Block Div",
           Description = "Custom CSS ID For Carousel Block Div",
           GroupName = Global.GroupNames.CustomCSS,
           Order = 20)]
        public virtual String CustomIdCarouselBlockDiv { get; set; }
    }
}