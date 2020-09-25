using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;

namespace Ferrara.Models.keebler
{
    public class keeblerRecipes
    {
        public virtual Dictionary<int, Dictionary<string, string>> RecipeImage { get; set; }
        public virtual Dictionary<string, string> NutritionSrcs { get; set; }
        public string RecipeDescriptionName { get; set; }
        public virtual XhtmlString RecipeDescription { get; set; }
        public string NutritionInfoButton { get; set; }
        public string BuyNowButton { get; set; }
    }
}