using System;
using System.ComponentModel.DataAnnotations;
using EPiServer;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using Ferrara.Models;

namespace Ferrara.Sites.Keebler.KeeblerNutritionBlock
{
    [ContentType(
        DisplayName = "Keebler Nutrition Block", 
        GUID = "76dbb2eb-af23-4379-bcdf-37b5942e65fb",
        GroupName = Global.GroupNames.Keebler,
        Description = "Block for Bag Size & Nutrition Block Image")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail.png")]
    public class KeeblerNutritionBlock : BlockData
    {
        [Display(
           Name = "Product Image",
           Description = Global.DescriptionHints.ImageSizing,
           GroupName = SystemTabNames.Content,
           Order = 10)]
        [Required]
        public virtual Url ProductImage { get; set; }

        [Display(
           Name = "Bag Size (displays indrop down if there are multiple)",
           GroupName = SystemTabNames.Content,
           Order = 20)]
        [Required]
        public virtual string BagSize { get; set; }
    }
}