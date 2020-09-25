using System;
using System.ComponentModel.DataAnnotations;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using Ferrara.Models;

namespace Ferrara.Sites.Keebler.KeeblerExploreBlock
{
    [ContentType(DisplayName = "Keebler Explore Block", 
        GUID = "cac354d1-2a72-4024-8f0e-ff5a0f54dd8c",
        GroupName = Global.GroupNames.Keebler,
        Description = "Keebler Explore Block")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail.png")]
    public class KeeblerExploreBlock : BlockData
    {

        [CultureSpecific]
        [Display(
            Name = "Title",
            Description = "Title",
            GroupName = SystemTabNames.Content,
            Order = 10)]
        public virtual string Title { get; set; }

        [CultureSpecific]
        [Display(
            Name = "Image Block",
            Description = "Image Block",
            GroupName = SystemTabNames.Content,
            Order = 20)]
        public virtual ContentArea ImageBlock { get; set; }

        [CultureSpecific]
        [Display(
            Name = "Details",
            Description = "Details",
            GroupName = SystemTabNames.Content,
            Order = 30)]
        public virtual XhtmlString Details { get; set; }

        [CultureSpecific]
        [Display(
            Name = "Button Text",
            Description = "Button Test",
            GroupName = SystemTabNames.Content,
            Order = 40)]
        public virtual string ButtonText { get; set; }

        [CultureSpecific]
        [Display(
            Name = "Button Page Reference",
            Description = "Button Page Reference",
            GroupName = SystemTabNames.Content,
            Order = 50)]
        public virtual PageReference ButtonPageReference { get; set; }

    }
}