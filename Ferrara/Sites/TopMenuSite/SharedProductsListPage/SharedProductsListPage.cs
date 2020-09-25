using System;
using System.ComponentModel.DataAnnotations;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using Ferrara.Models;

namespace Ferrara.Sites.TopMenuSite.SharedProductsListPage
{
    [ContentType(DisplayName = "Shared Products List Page", 
        GUID = "746e210e-6ae0-4fa3-a296-51d9ebdd5b71",
        GroupName = Global.GroupNames.TopMenuSites,
        Description = "Products List Page")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail-standard.png")]
    public class SharedProductsListPage : TopMenuSitePageData
    {
        [CultureSpecific]
        [Display(
            Name = "Page Title",
            Description = "Page Title",
            GroupName = SystemTabNames.Content,
            Order = 10)]
        public virtual String Title { get; set; }

        [CultureSpecific]
        [Display(
            Name = "Sub-Header",
            Description = "Sub-Header",
            GroupName = SystemTabNames.Content,
            Order = 20)]
        public virtual String SubHeader { get; set; }

        [CultureSpecific]
        [Display(
            Name = "Description",
            Description = "Description",
            GroupName = SystemTabNames.Content,
            Order = 30)]
        public virtual XhtmlString Description { get; set; }

        [Display(
            Name = "Product List Blocks",
            Description = "Area where all product list blocks are rendered",
            GroupName = SystemTabNames.Content,
            Order = 50)]
        [AllowedTypes(AllowedTypes = new[] { typeof(SharedProductListBlock.SharedProductListBlock) })]
        public virtual ContentArea ProductListBlocksArea { get; set; }
    }
}