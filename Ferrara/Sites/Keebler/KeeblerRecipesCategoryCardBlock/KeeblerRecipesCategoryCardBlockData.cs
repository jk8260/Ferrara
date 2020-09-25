using EPiServer.Core;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Ferrara.Sites.Keebler.KeeblerRecipesCategoryCardBlock
{
    public class KeeblerRecipesCategoryCardBlockData: BlockData
    {
        
        [Display(
            Name = "Winter",
            Description = "Winter Filter",
            GroupName = Global.GroupNames.RecipeFilter,
            Order = 12)]
        public virtual bool WinterBool { get; set; }

        [Display(
            Name = "Spring",
            Description = "Spring Filter",
            GroupName = Global.GroupNames.RecipeFilter,
            Order = 15)]
        public virtual bool SpringBool { get; set; }

        [Display(
            Name = "Fall",
            Description = "Fall Filter",
            GroupName = Global.GroupNames.RecipeFilter,
            Order = 18)]
        public virtual bool FallBool { get; set; }

        [Display(
            Name = "Summer",
            Description = "Summer Filter",
            GroupName = Global.GroupNames.RecipeFilter,
            Order = 21)]
        public virtual bool SummerBool { get; set; }

        [Display(
            Name = "Holiday",
            Description = "Holiday Filter",
            GroupName = Global.GroupNames.RecipeFilter,
            Order = 24)]
        public virtual bool HolidayBool { get; set; }

        [Display(
            Name = "Quick & Easy",
            Description = "Quick & Easy Filter",
            GroupName = Global.GroupNames.RecipeFilter,
            Order = 27)]
        public virtual bool QuickEasyBool { get; set; }

        [Display(
            Name = "Party Pleasers",
            Description = "Party Pleasers Filter",
            GroupName = Global.GroupNames.RecipeFilter,
            Order = 30)]
        public virtual bool PartyPleasersBool { get; set; }

        [Display(
            Name = "Sweet & Salty",
            Description = "Sweet & Salty Filter",
            GroupName = Global.GroupNames.RecipeFilter,
            Order = 33)]
        public virtual bool SweetSaltyBool { get; set; }

        [Display(
            Name = "Custom Fliter 1",
            Description = "Custom Fliter 1",
            GroupName = Global.GroupNames.RecipeFilter,
            Order = 36)]
        public virtual bool CustomFilter1 { get; set; }
        
        [Display(
            Name = "Custom Fliter 2",
            Description = "Custom Fliter 2",
            GroupName = Global.GroupNames.RecipeFilter,
            Order = 39)]
        public virtual bool CustomFilter2 { get; set; }
        
        [Display(
            Name = "Custom Fliter 3",
            Description = "Custom Fliter 3",
            GroupName = Global.GroupNames.RecipeFilter,
            Order = 42)]
        public virtual bool CustomFilter3 { get; set; }
    }
}