using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Web;
using EPiServer.Web.Mvc;

namespace Ferrara.Sites.TopMenuSite.SharedRecipeListImageBlock
{
    public class SharedRecipeListImageBlockController : BlockController<SharedRecipeListImageBlock>
    {
        public override ActionResult Index(SharedRecipeListImageBlock currentBlock)
        {
            return PartialView(currentBlock);
        }
    }
}
