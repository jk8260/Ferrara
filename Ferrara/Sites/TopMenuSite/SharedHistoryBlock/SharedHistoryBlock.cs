using System;
using System.ComponentModel.DataAnnotations;
using EPiServer;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using Ferrara.Models;

namespace Ferrara.Sites.TopMenuSite.SharedHistoryBlock
{
    [ContentType(DisplayName = "Shared History Block", 
        GUID = "713ade6d-8eaa-4e48-b28f-519d45a72071",
        GroupName = Global.GroupNames.TopMenuSites,
        Description = "Blocks to fill the History Page")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail.png")]

    public class SharedHistoryBlock : BlockData
    {
        [Display(
         Name = "History Image*",
         GroupName = SystemTabNames.Content,
         Order = 10)]
        [Required]
        [AllowedTypes(AllowedTypes = new[] { typeof(SharedImageBlock.SharedImageBlock) })]
        [MaxItems(1)]
        public virtual ContentArea HistoryImage { get; set; }

        [Display(
            Name = "History Description*",
            Description = "Enter a history description",
            GroupName = SystemTabNames.Content,
            Order = 20)]
        [Required]
        public virtual XhtmlString HistoryDescription { get; set; }
    }
}