using System;
using System.ComponentModel.DataAnnotations;
using EPiServer;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using Ferrara.Models;

namespace Ferrara.Sites.Keebler.CategoryPage
{
    [ContentType(DisplayName = "Keebler Products Category Page", 
        GUID = "206fa5c6-d4eb-4203-a71d-b34b0a6d223c",
        GroupName = Global.GroupNames.Keebler,
        Description = "Keebler Products Category Page(Fields included: Category Title, Category Image, Tabs Container)")]
    [AvailableContentTypes(
        Availability.Specific,
        Include = new[] { typeof(KeeplerProductPage.KeeblerProductPage) })]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail-standard.png")]
    public class CategoryPage : KeeblerPageData
    {
        [CultureSpecific]
        [Display(
            Name = "Category Title",
            Description = "Category Title",
            GroupName = SystemTabNames.Content,
            Order = 100)]
        [Required]
        public virtual string CategoryTitle { get; set; }

        [CultureSpecific]
        [Display(
            Name = "Category Image",
            Description = "Category Image",
            GroupName = SystemTabNames.Content,
            Order = 150)]
        [Required]
        public virtual Url CategoryImage { get; set; }


        [CultureSpecific]
        [Display(
            Name = "Tabs Container",
            Description = "Tabs Container",
            GroupName = SystemTabNames.Content,
            Order = 200)]
        [AllowedTypes(AllowedTypes = new[] { typeof(CategoryTabBlock.CategoryTabBlock) })]
        [Required]
        public virtual ContentArea TabsContainer { get; set; }
    }
}