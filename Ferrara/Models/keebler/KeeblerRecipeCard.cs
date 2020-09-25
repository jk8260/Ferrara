using EPiServer;
using EPiServer.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Routing;

namespace Ferrara.Models.keebler
{
    public class KeeblerRecipeCard
    {
        public Url RecipeCardImage { get; set; }
        public string RecipeCardTitle { get; set; }
        public XhtmlString RecipeCardDescription { get; set; }
        public XhtmlString RecipeCardInfo { get; set; }
        public string RecipePage { get; set; } 
        public bool WinterBool { get; set; } 
        public bool SpringBool { get; set; } 
        public bool FallBool { get; set; } 
        public bool SummerBool { get; set; } 
        public bool HolidayBool { get; set; } 
        public bool QuickEasyBool { get; set; } 
        public bool PartyPleasersBool { get; set; } 
        public bool SweetSaltyBool { get; set; } 
        public bool CustomFilter1 { get; set; } 
        public bool CustomFilter2 { get; set; }
        public bool CustomFilter3 { get; set; }
    }
}