using System;
using System.ComponentModel.DataAnnotations;
using EPiServer;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using Ferrara.Common;
using Ferrara.Models;


namespace Ferrara.Sites.Keebler.KeeblerStartPage
{
    [ContentType(DisplayName = "Keebler Start Page",
        GUID = "c947936e-a8ca-4538-b21e-6afb76c8c0ce",
        GroupName = Global.GroupNames.Keebler,
        Description = "Keebler Start Page")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail-standard.png")]
    public class KeeblerStartPage : StartPageBase
    {
        public override string SiteName
        {
            get { return WebsiteName.Keebler; }
        }

        [Display(
            Name = "Main Image (tree)",
            GroupName = SystemTabNames.Content,
            Order = 15)]
        public virtual Url MainImage { get; set; }

        [Display(
            Name = "Tree Video (Desktop Screen)",
            GroupName = SystemTabNames.Content,
            Order = 15)]
        public virtual Url FullScreenVideo { get; set; }


        [Display(
            Name = "Tree Video (Mobile Screen)",
            GroupName = SystemTabNames.Content,
            Order = 15)]
        public virtual Url MobileVideo { get; set; }

        [Display(
            Name = "Main Content Blocks",
            GroupName = SystemTabNames.Content,
            Order = 25)]
        [AllowedTypes(AllowedTypes = new[] { typeof(KeeblerStartPageBlock.KeeblerStartPageBlock) })]
        public virtual ContentArea MainContentBlocks { get; set; }
    }
}