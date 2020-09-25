using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Web;
using EPiServer.Web.Mvc;


namespace Ferrara.Sites.TopMenuSite.SharedImageBlock
{
    public class SharedImageBlockController : BlockController<SharedImageBlock>
    {
        public override ActionResult Index(SharedImageBlock currentBlock)
        {
            return PartialView(currentBlock);
        }
    }
}
