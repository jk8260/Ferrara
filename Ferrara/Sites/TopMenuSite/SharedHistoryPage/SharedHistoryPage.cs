using System;
using System.ComponentModel.DataAnnotations;
using EPiServer;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using Ferrara.Models;

namespace Ferrara.Sites.TopMenuSite.SharedHistoryPage
{
    [ContentType(DisplayName = "Shared History Page", 
        GUID = "81eb6dc0-7eeb-44a2-b279-56fa4dcbeab5",
        GroupName = Global.GroupNames.TopMenuSites,
        Description = "History Page")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail-standard.png")]
    public class SharedHistoryPage : TopMenuSitePageData
    {
        [Display(
            Name = "History Page Title*",
            Description = "Enter a title for the history page",
            GroupName = SystemTabNames.Content,
            Order = 10)]
        [Required]
        public virtual string HistoryTitle { get; set; }

        [Display(
           Name = "History Introduction*",
           Description = "Enter a history introduction",
           GroupName = SystemTabNames.Content,
           Order = 20)]
        [Required]
        public virtual XhtmlString HistoryIntroduction { get; set; }

        [Display(
           Name = "History Blocks",
           Description = "Area where you can render history blocks",
           GroupName = SystemTabNames.Content,
           Order = 30)]
        [AllowedTypes(AllowedTypes = new[] { typeof(SharedHistoryBlock.SharedHistoryBlock) })]
        public virtual ContentArea HistoryDetails { get; set; }
    }
}