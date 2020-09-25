using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Web;
using EPiServer.Web.Mvc;

namespace Ferrara.Sites.Keebler.CategoryTabBlock
{
    public class CategoryTabBlockController : BlockController<CategoryTabBlock>
    {
        public override ActionResult Index(CategoryTabBlock currentBlock)
        {
            return PartialView(currentBlock);
        }
    }
}
