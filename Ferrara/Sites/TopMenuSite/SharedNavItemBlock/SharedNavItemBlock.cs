using System;
using System.ComponentModel.DataAnnotations;
using EPiServer;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using Ferrara.Models;

namespace Ferrara.Sites.TopMenuSite.SharedNavItemBlock
{
    [ContentType(DisplayName = "Shared Nav Item Block", 
        GUID = "0cc98039-e495-44d6-98ba-215eca1162c8",
        GroupName = Global.GroupNames.TopMenuSites,
        Description = "Custom Navigation Link")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail.png")]
    public class SharedNavItemBlock : BlockData
    {
        [CultureSpecific]
        [Display(
            Name = "Nav Link Label*",
            Description = "Add a label for the nav link",
            GroupName = SystemTabNames.Content,
            Order = 10)]
        [Required]
        public virtual string NavItemLabel { get; set; }

        [CultureSpecific]
        [Display(
            Name = "Nav Link*",
            Description = "Add a link for the nav item",
            GroupName = SystemTabNames.Content,
            Order = 20)]
        [Required]
        public virtual PageReference NavItemLink { get; set; }
    }
}