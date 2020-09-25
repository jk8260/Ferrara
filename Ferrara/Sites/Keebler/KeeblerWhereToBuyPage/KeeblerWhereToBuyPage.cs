using System;
using System.ComponentModel.DataAnnotations;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using Ferrara.Common;
using Ferrara.Models;

namespace Ferrara.Sites.Keebler.KeeblerWhereToBuyPage
{
    [ContentType(DisplayName = "Keebler Where To Buy Page", 
        GUID = "7f10f2c8-3a8b-47e0-8235-c3ee8d3d9a87",
        GroupName = Global.GroupNames.Keebler,
        Description = "Keebler Where to Buy Page")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail-standard.png")]
    public class KeeblerWhereToBuyPage : StartPageBase
    {
        public override string SiteName
        {
            get { return WebsiteName.Keebler; }
        }

        [CultureSpecific]
        [Display(
            Name = "Where to Buy Script Link",
            Description = "Script Link",
            GroupName = SystemTabNames.Content,
            Order = 10)]
        [Required]
        public virtual string WhereToBuyLink { get; set; }
    }
}