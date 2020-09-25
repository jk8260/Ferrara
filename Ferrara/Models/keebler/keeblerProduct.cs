using EPiServer;
using EPiServer.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ferrara.Models.keebler
{
    public class keeblerProduct
    {
        public virtual Dictionary <int, Dictionary<string,string>> ProductImage { get; set; }
        public virtual Dictionary<string, string> NutritionSrcs { get; set; }
        public virtual Dictionary<int, Dictionary<string, object>> RecipesCategoryCardBlocks { get; set; }
        public virtual string LinkToRecipePage { get; set; }
        public string ProductDescriptionName { get; set; }
        public virtual XhtmlString ProductDescription { get; set; }
        public string NutritionInfoButton { get; set; }
        public string BuyNowButton { get; set; }
    }
}