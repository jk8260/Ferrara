using System;
using System.ComponentModel.DataAnnotations;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using Ferrara.Models;

namespace Ferrara.Sites.TopMenuSite.SharedNutritionBlock
{
    [ContentType(DisplayName = "Shared Nutrition Block", 
        GUID = "f6dc24a5-c209-4b95-b604-b7330567324c",
        GroupName = Global.GroupNames.TopMenuSites,
        Description = "Shared Nutrition Block")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail.png")]
    public class SharedNutritionBlock : BlockData
    {
        [Display(
            Name = "Display name in the dropdown",
            Description = "Display name in the dropdown",
            GroupName = SystemTabNames.Content,
            Order = 2)]
        [CultureSpecific]
        [Required]
        public virtual string DropDownDisplayName { get; set; }

        [Display(
            Name = "Servings per packaging about # (First Line)*",
            Description = "Servings per packaging about # (First Line)",
            GroupName = SystemTabNames.Content,
            Order = 3)]
        [CultureSpecific]
        public virtual string ServingsPerLine { get; set; }

        [Display(
            Name = "Serving Size # (#g)",
            Description = "Serving Size # (#g)",
            GroupName = SystemTabNames.Content,
            Order = 4)]
        [CultureSpecific]
        public virtual string ServingSizeLine { get; set; }

        [Display(
            Name = "Calories",
            Description = "Calories",
            GroupName = SystemTabNames.Content,
            Order = 12)]
        [CultureSpecific]
        public virtual string Calories { get; set; }

        [Display(
            Name = "Total Fat Grams",
            Description = "Total Fat Grams",
            GroupName = SystemTabNames.Content,
            Order = 15)]
        [CultureSpecific]
        public virtual string TotalFatGrams { get; set; }

        [Display(
            Name = "Total Fat Daily Percentage",
            Description = "Total Fat Daily Percentage",
            GroupName = SystemTabNames.Content,
            Order = 18)]
        [CultureSpecific]
        public virtual string TotalFatDailyPercentage { get; set; }

        [Display(
            Name = "Saturated Fat Daily Grams",
            Description = "Saturated Fat Daily Grams",
            GroupName = SystemTabNames.Content,
            Order = 21)]
        [CultureSpecific]
        public virtual string SaturatedFatDailyGrams { get; set; }

        [Display(
            Name = "Saturated Fat Daily Percentage",
            Description = "Saturated Fat Daily Percentage",
            GroupName = SystemTabNames.Content,
            Order = 24)]
        [CultureSpecific]
        public virtual string SaturatedFatDailyPercentage { get; set; }

        [Display(
            Name = "Trans Fat Daily Grams",
            Description = "Trans Fat Daily Grams",
            GroupName = SystemTabNames.Content,
            Order = 27)]
        [CultureSpecific]
        public virtual string TransFatDailyGrams { get; set; }

        [Display(
            Name = "Cholesterol mg",
            Description = "Cholesterol mg",
            GroupName = SystemTabNames.Content,
            Order = 33)]
        [CultureSpecific]
        public virtual string CholesterolMg { get; set; }

        [Display(
            Name = "Cholesterol Percentage",
            Description = "Cholesterol Percentage",
            GroupName = SystemTabNames.Content,
            Order = 36)]
        [CultureSpecific]
        public virtual string CholesterolPercentage { get; set; }

        [Display(
            Name = "Sodium mg",
            Description = "Sodium mg",
            GroupName = SystemTabNames.Content,
            Order = 39)]
        [CultureSpecific]
        public virtual string SodiumMg { get; set; }

        [Display(
            Name = "Sodium Percentage",
            Description = "Sodium Percentage",
            GroupName = SystemTabNames.Content,
            Order = 42)]
        [CultureSpecific]
        public virtual string SodiumPercentage { get; set; }

        [Display(
            Name = "Carbohydrate Grams",
            Description = "Carbohydrate Grams",
            GroupName = SystemTabNames.Content,
            Order = 45)]
        [CultureSpecific]
        public virtual string CarbohydrateGrams { get; set; }

        [Display(
            Name = "Carbohydrate Percentage",
            Description = "Carbohydrate Percentage",
            GroupName = SystemTabNames.Content,
            Order = 48)]
        [CultureSpecific]
        public virtual string CarbohydratePercentage { get; set; }

        [Display(
            Name = "Fiber Grams",
            Description = "Fiber Grams",
            GroupName = SystemTabNames.Content,
            Order = 51)]
        [CultureSpecific]
        public virtual string FiberGrams { get; set; }

        [Display(
            Name = "Fiber Percentage",
            Description = "Fiber Percentage",
            GroupName = SystemTabNames.Content,
            Order = 54)]
        [CultureSpecific]
        public virtual string FiberPercentage { get; set; }

        [Display(
            Name = "Sugar Grams",
            Description = "Sugar Grams",
            GroupName = SystemTabNames.Content,
            Order = 57)]
        [CultureSpecific]
        public virtual string SugarGrams { get; set; }

        [Display(
            Name = "Added Sugar Grams",
            Description = "Added Sugar Grams",
            GroupName = SystemTabNames.Content,
            Order = 63)]
        [CultureSpecific]
        public virtual string AddedSugarGrams { get; set; }

        [Display(
            Name = "Added Sugar Percentage",
            Description = "Added Sugar Percentage",
            GroupName = SystemTabNames.Content,
            Order = 66)]
        [CultureSpecific]
        public virtual string AddedSugarPercentage { get; set; }

        [Display(
            Name = "Protein Grams",
            Description = "Protein Grams",
            GroupName = SystemTabNames.Content,
            Order = 69)]
        [CultureSpecific]
        public virtual string ProteinGrams { get; set; }

        [Display(
            Name = "Vitamin D mcg",
            Description = "Vitamin D mcg",
            GroupName = SystemTabNames.Content,
            Order = 75)]
        [CultureSpecific]
        public virtual string VitaminDMcg { get; set; }

        [Display(
            Name = "Vitamin D Percentage",
            Description = "Vitamin D Percentage",
            GroupName = SystemTabNames.Content,
            Order = 78)]
        [CultureSpecific]
        public virtual string VitaminDPercentage { get; set; }

        [Display(
            Name = "Calcium mg",
            Description = "Calcium mg",
            GroupName = SystemTabNames.Content,
            Order = 88)]
        [CultureSpecific]
        public virtual string CalciumMg { get; set; }

        [Display(
            Name = "Calcium Percentage",
            Description = "Calcium Percentage",
            GroupName = SystemTabNames.Content,
            Order = 90)]
        [CultureSpecific]
        public virtual string CalciumPercentage { get; set; }

        [Display(
            Name = "Iron mg",
            Description = "Iron mg",
            GroupName = SystemTabNames.Content,
            Order = 92)]
        [CultureSpecific]
        public virtual string IronMg { get; set; }

        [Display(
            Name = "Iron Percentage",
            Description = "Iron Percentage",
            GroupName = SystemTabNames.Content,
            Order = 94)]
        [CultureSpecific]
        public virtual string IronPercentage { get; set; }

        [Display(
            Name = "Potassium mg",
            Description = "Potassium mg",
            GroupName = SystemTabNames.Content,
            Order = 96)]
        [CultureSpecific]
        public virtual string PotassiumMg { get; set; }

        [Display(
            Name = "Potassium Percentage",
            Description = "Potassium Percentage",
            GroupName = SystemTabNames.Content,
            Order = 98)]
        [CultureSpecific]
        public virtual string PotassiumPercentage { get; set; }

        [Display(
            Name = "Ingredients",
            Description = "Ingredients",
            GroupName = SystemTabNames.Content,
            Order = 99)]
        [CultureSpecific]
        public virtual XhtmlString Ingredients { get; set; }
    }
}