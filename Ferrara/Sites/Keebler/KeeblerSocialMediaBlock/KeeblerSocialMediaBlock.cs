using System;
using System.ComponentModel.DataAnnotations;
using System.Security.Policy;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using Ferrara.Models;

namespace Ferrara.Sites.Keebler.KeeblerSocialMediaBlock
{
    [ContentType(DisplayName = "Keebler Social Media Links Block", GUID = "691c870e-b801-485f-9d65-1a743796aa36", Description = "Block for all Social Media Links & Icons")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail.png")]

    public class KeeblerSocialMediaBlock : BlockData
    {
        [Display(
            Name = "Facebook Link",
            GroupName = SystemTabNames.Content,
            Order = 10)]
        [CultureSpecific]
        public virtual string FacebookLink { get; set; }

        [Display(
            Name = "Instagram Link",
            GroupName = SystemTabNames.Content,
            Order = 20)]
        [CultureSpecific]
        public virtual string InstagramLink { get; set; }

        [Display(
            Name = "Pinterest Link",
            GroupName = SystemTabNames.Content,
            Order = 30)]
        [CultureSpecific]
        public virtual string PinterestLink { get; set; }

        [Display(
            Name = "Twitter Link",
            GroupName = SystemTabNames.Content,
            Order = 40)]
        [CultureSpecific]
        public virtual string TwitterLink { get; set; }

        [Display(
            Name = "Youtube Link",
            GroupName = SystemTabNames.Content,
            Order = 50)]
        [CultureSpecific]
        public virtual string YouTubeLink { get; set; }
    }
}