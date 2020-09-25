using System;
using System.ComponentModel.DataAnnotations;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using Ferrara.Models;

namespace Ferrara.Sites.TopMenuSite.SharedRecipeListImageBlock
{
    [ContentType(DisplayName = "Shared Recipe List Image Block", 
        Description = "Image block for recipe list blocks",
        GUID = "8a89d02b-cbfd-4fcf-b6a7-57ec0dacc4dc", 
        GroupName = Global.GroupNames.TopMenuSites)]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail.png")]
    public class SharedRecipeListImageBlock : BlockData
    {
        [Display(
            Name = "Recipe Product Image*",
            Description = "Add a recipe product image",
            GroupName = SystemTabNames.Content,
            Order = 10)]
        [Required]
        public virtual ContentArea RecipeProductImage { get; set; }
    }
}