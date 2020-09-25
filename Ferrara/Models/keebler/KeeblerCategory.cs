using EPiServer;
using Ferrara.Sites.Keebler.CategoryTabBlock;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ferrara.Models.keebler
{
    public class KeeblerCategory
    {
        public Url CategoryImage { get; set; }
        public string CategoryTitle { get; set; }
        public IList<KeeblerCategoryTab> CategoryTabBlock { get; set; }
        public IList<KeeblerRecipeCard> RecipesCard { get; set; }
    }
}