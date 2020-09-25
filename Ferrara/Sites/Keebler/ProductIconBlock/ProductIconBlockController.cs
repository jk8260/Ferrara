using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Web;
using EPiServer.Web.Mvc;

namespace Ferrara.Sites.Keebler.ProductIconBlock
{
    public class ProductIconBlockController : BlockController<ProductIconBlock>
    {
        public override ActionResult Index(ProductIconBlock currentBlock)
        {
            return PartialView(currentBlock);
        }
    }
}
