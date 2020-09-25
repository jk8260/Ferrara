using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Web;
using EPiServer.Web.Mvc;

namespace Ferrara.Sites.TopMenuSite.SharedProductListBlock
{
    public class SharedProductListBlockController : BlockController<SharedProductListBlock>
    {
        public override ActionResult Index(SharedProductListBlock currentBlock)
        {
            return PartialView(currentBlock);
        }
    }
}
