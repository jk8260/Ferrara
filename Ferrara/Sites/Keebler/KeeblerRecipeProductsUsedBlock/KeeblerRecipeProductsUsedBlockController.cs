using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Web;
using EPiServer.Web.Mvc;

namespace Ferrara.Sites.Keebler.KeeblerRecipeProductsUsedBlock
{
    public class KeeblerRecipeProductsUsedBlockController : BlockController<KeeblerRecipeProductsUsedBlock>
    {
        public override ActionResult Index(KeeblerRecipeProductsUsedBlock currentBlock)
        {
            return PartialView(currentBlock);
        }
    }
}
