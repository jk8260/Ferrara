using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Web;
using EPiServer.Web.Mvc;

namespace Ferrara.Sites.TopMenuSite.SharedNavBackgroundBlock
{
    public class SharedNavBackgroundBlockController : BlockController<SharedNavBackgroundBlock>
    {
        public override ActionResult Index(SharedNavBackgroundBlock currentBlock)
        {
            return PartialView(currentBlock);
        }
    }
}
