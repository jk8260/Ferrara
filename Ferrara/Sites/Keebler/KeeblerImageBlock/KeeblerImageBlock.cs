using System;
using System.ComponentModel.DataAnnotations;
using EPiServer;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using Ferrara.Models;

namespace Ferrara.Sites.Keebler.KeeblerImageBlock
{
    [ContentType(DisplayName = "Keebler Image Block", 
        GUID = "ec9b3b6e-8195-407e-9d41-6001cadae9f4",
        GroupName = Global.GroupNames.Keebler,
        Description = "Image with Alt for SEO")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail.png")]
    public class KeeblerImageBlock : BlockData
    {
        [Display(
           Name = "Product",
           Description = Global.DescriptionHints.ImageSizing,
           GroupName = SystemTabNames.Content,
           Order = 10)]
        [Required]
        public virtual Url ProductImage { get; set; }

        [Display(
           Name = "SEO alt text",
           Description = "SEO alt text",
           GroupName = SystemTabNames.Content,
           Order = 20)]
        [Required]
        public virtual String AltSEO { get; set; }

        [Display(
           Name = "Tab Name in Nutrition Dropdown `Must match Nutrition Tab Name: ONLY FOR KEEBLER PRODUCT BLOCK",
           Description = "Tab Name in Nutrition Dropdown `Must match Keebler Nutrition Tab Name: ONLY FOR KEEBLER PRODUCT BLOCK",
           GroupName = SystemTabNames.Content,
           Order = 30)]
        public virtual String NutritionDropdownTagName { get; set; }
    }
}