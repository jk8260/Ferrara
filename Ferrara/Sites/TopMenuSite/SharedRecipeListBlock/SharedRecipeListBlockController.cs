using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Web;
using EPiServer.Web.Mvc;

namespace Ferrara.Sites.TopMenuSite.SharedRecipeListBlock
{
    public class SharedRecipeListBlockController : BlockController<SharedRecipeListBlock>
    {
        public override ActionResult Index(SharedRecipeListBlock currentBlock)
        {
            return PartialView(currentBlock);
        }
    }
}
