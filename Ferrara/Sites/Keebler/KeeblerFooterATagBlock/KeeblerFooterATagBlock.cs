using System;
using System.ComponentModel.DataAnnotations;
using EPiServer;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using Ferrara.Models;

namespace Ferrara.Sites.Keebler.KeeblerFooterATagBlock
{
    [ContentType(DisplayName = "Keebler Footer Link Block", 
        GUID = "ad8db90c-bd74-4788-a9a9-b7dfa9503502",
        GroupName = Global.GroupNames.Keebler,
        Description = "Keebler Footer Link Block")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail.png")]
    public class KeeblerFooterATagBlock : BlockData
    {
        [CultureSpecific]
        [Display(
            Name = "Link Label",
            GroupName = SystemTabNames.Content,
            Order = 10)]
        [Required]
        public virtual string ATagName { get; set; }
        
        [CultureSpecific]
        [Display(
            Name = "Link URL",
            GroupName = SystemTabNames.Content,
            Order = 20)]
        [Required]
        public virtual Url ATagURL { get; set; }
    }
}