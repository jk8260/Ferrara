using System;
using System.ComponentModel.DataAnnotations;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using Ferrara.Models;

namespace Ferrara.Sites.TopMenuSite.SharedRecipeListBlock
{
    [ContentType(DisplayName = "Shared Recipe List Block", 
        GUID = "6e415413-2744-4588-b65e-a23d628b8ebd",
        GroupName = Global.GroupNames.TopMenuSites,
        Description = "Block to input a new recipe on recipe list page")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail.png")]
    public class SharedRecipeListBlock : BlockData
    {
        [CultureSpecific]
        [Display(
            Name = "Recipe Name",
            Description = "Name of recipe",
            GroupName = SystemTabNames.Content,
            Order = 10)]
        public virtual string RecipeName { get; set; }

        [CultureSpecific]
        [Display(
            Name = "Recipe Description",
            Description = "Input recipe description here",
            GroupName = SystemTabNames.Content,
            Order = 20)]

        public virtual XhtmlString RecipeDescription { get; set; }

        [CultureSpecific]
        [Display(
           Name = "Link Label",
           Description = "Label used for recipe details link",
           GroupName = SystemTabNames.Content,
           Order = 30)]
        public virtual string RecipeLinkLabel { get; set; }

        [CultureSpecific]
        [Display(
            Name = "Link to Recipe Details",
            Description = "Link to Recipe Details Page",
            GroupName = SystemTabNames.Content,
            Order = 40)]
        public virtual PageReference RecipeDetailsLink { get; set; }
    }
}