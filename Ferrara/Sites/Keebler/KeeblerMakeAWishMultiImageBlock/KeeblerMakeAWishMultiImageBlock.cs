using System;
using System.ComponentModel.DataAnnotations;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using Ferrara.Models;

namespace Ferrara.Sites.Keebler.KeeblerMakeAWishMultiImageBlock
{
    [ContentType(DisplayName = "Keebler Make A Wish Multi Image Block", 
        GUID = "b661f4af-41a1-4a84-afde-662a66e7b20a", 
        Description = "")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail.png")]

    public class KeeblerMakeAWishMultiImageBlock : BlockData
    {

        [CultureSpecific]
        [Required]
        [Display(
            Name = "Keebler Image Blocks",
            Description = "",
            GroupName = SystemTabNames.Content,
            Order = 3)]
        [MaxItems(5)]
        [AllowedTypes(AllowedTypes = new[] { typeof(KeeblerImageBlock.KeeblerImageBlock) })]
        public virtual ContentArea ImageBlock { get; set; }

        [Display(
           Name = "Custom CSS ID For Multi Image Block Div",
           Description = "Custom CSS ID For Multi Image Block Div",
           GroupName = Global.GroupNames.CustomCSS,
           Order = 6)]
        public virtual String CustomIdMultiImageBlockDiv { get; set; }

    }
}