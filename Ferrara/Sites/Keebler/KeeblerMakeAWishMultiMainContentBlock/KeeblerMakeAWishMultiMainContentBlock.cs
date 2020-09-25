using System;
using System.ComponentModel.DataAnnotations;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using Ferrara.Models;

namespace Ferrara.Sites.Keebler.KeeblerMakeAWishMultiMainContentBlock
{
    [ContentType(DisplayName = "Keebler Make A Wish Multi Main Content Block", 
        GUID = "eef714d1-8532-492d-9354-163b62756731", 
        Description = "Use this block if you'd like the same background on " +
        "multiple consecutive main content blocks")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail.png")]
    public class KeeblerMakeAWishMultiMainContentBlock : BlockData
    {
        [CultureSpecific]
        [Display(
           Name = "Keebler Make-A-Wish Main Content Blocks",
           Description = "",
           GroupName = SystemTabNames.Content,
           Order = 3)]
        [AllowedTypes(new[] { typeof(KeeblerMakeAWishRightLeftContentBlock.KeeblerMakeAWishRightLeftContentBlock), typeof(KeeblerMakeAWishTopBottomNoneContentBlock.KeeblerMakeAWishTopBottomNoneContentBlock) })]
        public virtual ContentArea MainContentBlock { get; set; }

        [Display(
           Name = "Custom CSS ID For Multi Main Content Block Div",
           Description = "Custom CSS ID For Multi Main Content Block Div",
           GroupName = Global.GroupNames.CustomCSS,
           Order = 6)]
        public virtual String CustomIdMultiMainContentBlockDiv { get; set; }
    }
}