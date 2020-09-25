using System;
using System.ComponentModel.DataAnnotations;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using Ferrara.Models;

namespace Ferrara.Sites.Keebler.KeeblerWhereToBuyBlock
{
    [ContentType(DisplayName = "Keebler Where To Buy Block", 
        GUID = "c30ae881-2836-41c8-b1b5-bf6d298776c2",
        GroupName = Global.GroupNames.Keebler,
        Description = "Keebler Where To Buy Block")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail.png")]
    public class KeeblerWhereToBuyBlock : BlockData
    {

        [CultureSpecific]
        [Display(
            Name = "Script Link",
            Description = "Script Link",
            GroupName = SystemTabNames.Content,
            Order = 10)]
        [Required]
        public virtual string Link { get; set; }

    }
}