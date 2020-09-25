using System;
using System.ComponentModel.DataAnnotations;
using EPiServer;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;

namespace Ferrara.Sites.Keebler.KeeblerRecipesCategoryCardBlock
{
    [ContentType(DisplayName = "Keebler Recipes Category Card Block", 
        GUID = "f9408556-fae0-4dc9-a19f-8a21fb129fca",
        GroupName = Global.GroupNames.Keebler,
        Description = "Navigation Recipe Category Card - 3rd Layer")]
    [Models.SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail.png")]
    public class KeeblerRecipesCategoryCardBlock : KeeblerRecipesCategoryCardBlockData
    {
        [CultureSpecific]
        [Display(
             Name = "Recipe Name",
             GroupName = SystemTabNames.Content,
             Order = 100)]
        [Required]
        public virtual string CardName { get; set; }


        [CultureSpecific]
        [Display(
            Name = "Recipe Card Image",
            GroupName = SystemTabNames.Content,
            Order = 200)]
        public virtual Url CardImage { get; set; }

        [CultureSpecific]
        [Display(
             Name = "Recipe Card Description",
             GroupName = SystemTabNames.Content,
             Order = 150)]
        [Required]
        public virtual XhtmlString CardDescription { get; set; }

        [CultureSpecific]
        [Display(
             Name = "Recipe Info (ex: Prep Time, Cook Time)",
             GroupName = SystemTabNames.Content,
             Order = 150)]
        public virtual XhtmlString RecipeTimeInfo { get; set; }

        [CultureSpecific]
        [Display(
            Name = "Recipe Page, link to this recipe's detail page",
            GroupName = SystemTabNames.Content,
            Order = 300)]
        public virtual PageReference RecipePage { get; set; }

    }
}
