using System;
using System.ComponentModel.DataAnnotations;
using EPiServer;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using Ferrara.Models;

namespace Ferrara.Sites.TopMenuSite.SharedNavBackgroundBlock
{
    [ContentType(DisplayName = "Shared Navigation Background Block", 
        GUID = "59ae8785-842e-4660-a58d-ec3947a615d4", 
        Description = "Shared Navigation Background Block")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail.png")]
    public class SharedNavBackgroundBlock : BlockData
    {
        [Display(
         Name = "Nav Image*",
         Description = "Add a nav image",
         GroupName = SystemTabNames.Content,
         Order = 10)]
        [Required]
        public virtual Url NavImage { get; set; }
    }
}