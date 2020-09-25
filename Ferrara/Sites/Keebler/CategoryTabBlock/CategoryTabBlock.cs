using System;
using System.ComponentModel.DataAnnotations;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using Ferrara.Models;

namespace Ferrara.Sites.Keebler.CategoryTabBlock
{
    [ContentType(DisplayName = "Category Tab Block", 
        GUID = "e45ce274-1abb-4b01-800f-b10bde859df7", 
        GroupName = Global.GroupNames.Keebler,
        Description = "Navigation Category Block - 3rd Layer")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail.png")]
    public class CategoryTabBlock : BlockData
    {
        [CultureSpecific]
        [Display(
            Name = "Tab Title",
            GroupName = SystemTabNames.Content,
            Order = 100)]
        [Required]
        public virtual string TabTitle { get; set; }

        [CultureSpecific]
        [Display(
            Name = "Products Icons Container",
            GroupName = SystemTabNames.Content,
            Order = 200)]
        [AllowedTypes(AllowedTypes = new[] { typeof(ProductIconBlock.ProductIconBlock) })]
        public virtual ContentArea IconsContainer { get; set; }

    }
}