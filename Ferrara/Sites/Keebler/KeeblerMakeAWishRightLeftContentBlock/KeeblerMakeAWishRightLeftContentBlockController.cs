using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Web;
using EPiServer.Web.Mvc;

namespace Ferrara.Sites.Keebler.KeeblerMakeAWishRightLeftContentBlock
{
    public class KeeblerMakeAWishRightLeftContentBlockController : BlockController<KeeblerMakeAWishRightLeftContentBlock>
    {
        public override ActionResult Index(KeeblerMakeAWishRightLeftContentBlock currentBlock)
        {
            return PartialView(currentBlock);
        }
    }
}
