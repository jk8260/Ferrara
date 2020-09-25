using System;
using System.ComponentModel.DataAnnotations;
using EPiServer;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using Ferrara.Models;

namespace Ferrara.Sites.TopMenuSite.SharedWhereToBuyPage
{
    [ContentType(DisplayName = "Shared Where To Buy Page", 
        GUID = "ca4fea80-3517-4ca1-9c28-14ccc8a954f0",
        GroupName = Global.GroupNames.TopMenuSites,
        Description = "Shared Where To Buy Page")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail-standard.png")]
    public class SharedWhereToBuyPage : TopMenuSitePageData
    {
        [CultureSpecific]
        [Display(
            Name = "Script Link",
            Description = "Script Link",
            GroupName = SystemTabNames.Content,
            Order = 10)]
        [Required]
        public virtual string DestiniLink { get; set; }
    }
}