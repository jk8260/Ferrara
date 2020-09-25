using EPiServer;
using Ferrara.Models.keebler;
using Ferrara.Sites.Keebler.ProductIconBlock;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ferrara.Models.keebler
{
    public class KeeblerCategoryTab
    { 
        public string TabTitle { get; set; }
        public IList<keeblerProductIcon> ProductsIcons { get; set; }
    }
}