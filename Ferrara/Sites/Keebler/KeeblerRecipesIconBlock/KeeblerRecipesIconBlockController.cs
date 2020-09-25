using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Web;
using EPiServer.Web.Mvc;

namespace Ferrara.Sites.Keebler.KeeblerRecipesIconBlock
{
    public class KeeblerRecipesIconBlockController : BlockController<KeeblerRecipesIconBlock>
    {
        public override ActionResult Index(KeeblerRecipesIconBlock currentBlock)
        {
            return PartialView(currentBlock);
        }
    }
}
