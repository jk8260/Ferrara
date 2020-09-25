using System;
using System.ComponentModel.DataAnnotations;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using Ferrara.Models;

namespace Ferrara.Sites.Keebler.ProductIconBlock
{
    [ContentType(DisplayName = "Product Icon Block", 
        GUID = "5cd7b166-21f0-4bd0-95d9-23a44d73ec46",
        GroupName = Global.GroupNames.Keebler,
        Description = "Block for the product list page")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail.png")]
    public class ProductIconBlock : BlockData
    {
        [CultureSpecific]
        [Display(
            Name = "Product Name",
            GroupName = SystemTabNames.Content,
            Order = 100)]
        public virtual string ProductName { get; set; }

        [CultureSpecific]
        [Display(
            Name = "Product Page",
            GroupName = SystemTabNames.Content,
            Order = 200)]
        public virtual PageReference ProductPage { get; set; }

        [CultureSpecific]
        [Display(
            Name = "Url Path",
            GroupName = SystemTabNames.Content,
            Order = 300)]
        [Required]
        public virtual string UrlPath { get; set; }
    }
}