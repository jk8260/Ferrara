using System;
using System.ComponentModel.DataAnnotations;
using EPiServer;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using Ferrara.Models;

namespace Ferrara.Sites.TopMenuSite.SharedImageBlock
{
    [ContentType(DisplayName = "Shared Image Block", 
        GUID = "cf60d8e9-bce2-457a-a786-726887365d94",
        GroupName = Global.GroupNames.TopMenuSites,
        Description = "Shared Image Block")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail.png")]
    public class SharedImageBlock : BlockData
    {
        [Display(
           Name = "Product Image*",
           Description = Global.DescriptionHints.ImageSizing,
           GroupName = SystemTabNames.Content,
           Order = 10)]
        [Required]
        public virtual Url productImage { get; set; }

        [Display(
           Name = "SEO Alt Text*",
           Description = "SEO alt text",
           GroupName = SystemTabNames.Content,
           Order = 10)]
        [Required]
        public virtual String altSEO { get; set; }
    }
}