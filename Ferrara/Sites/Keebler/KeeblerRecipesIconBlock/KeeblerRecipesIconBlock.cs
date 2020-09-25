using System;
using System.ComponentModel.DataAnnotations;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using Ferrara.Models;

namespace Ferrara.Sites.Keebler.KeeblerRecipesIconBlock
{
    [ContentType(DisplayName = "Keebler Recipes Icon Block", 
        GUID = "dd8cb98a-34fc-4b8f-9898-b0d3d96e9e4f", 
        Description = "")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail.png")]
    public class KeeblerRecipesIconBlock : BlockData
    {
        [CultureSpecific]
        [Display(
            Name = "Recipe Name",
            GroupName = SystemTabNames.Content,
            Order = 100)]
        public virtual string RecipeName { get; set; }

        [CultureSpecific]
        [Display(
            Name = "Recipe Page",
            GroupName = SystemTabNames.Content,
            Order = 100)]
        public virtual PageReference RecipePage { get; set; }
    }
}