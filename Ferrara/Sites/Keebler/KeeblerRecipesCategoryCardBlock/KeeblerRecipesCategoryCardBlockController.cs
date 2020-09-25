using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Web;
using EPiServer.Web.Mvc;

namespace Ferrara.Sites.Keebler.KeeblerRecipesCategoryCardBlock
{
    public class KeeblerRecipesCategoryTabBlockController : BlockController<KeeblerRecipesCategoryCardBlock>
    {
        public override ActionResult Index(KeeblerRecipesCategoryCardBlock currentBlock)
        {
            return PartialView(currentBlock);
        }
    }
}
