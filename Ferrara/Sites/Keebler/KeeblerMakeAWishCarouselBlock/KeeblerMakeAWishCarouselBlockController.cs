using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Web;
using EPiServer.Web.Mvc;

namespace Ferrara.Sites.Keebler.KeeblerMakeAWishCarouselBlock
{
    public class KeeblerMakeAWishCarouselBlockController : BlockController<KeeblerMakeAWishCarouselBlock>
    {
        public override ActionResult Index(KeeblerMakeAWishCarouselBlock currentBlock)
        {
            return PartialView(currentBlock);
        }
    }
}
