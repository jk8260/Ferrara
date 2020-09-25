using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Web;
using EPiServer.Web.Mvc;

namespace Ferrara.Sites.TopMenuSite.SharedNavItemBlock
{
    public class SharedNavItemBlockController : BlockController<SharedNavItemBlock>
    {
        public override ActionResult Index(SharedNavItemBlock currentBlock)
        {
            return PartialView(currentBlock);
        }
    }
}
