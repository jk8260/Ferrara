using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Web;
using EPiServer.Web.Mvc;

namespace Ferrara.Sites.Keebler.KeeblerMakeAWishTopBottomNoneContentBlock
{
    public class KeeblerMakeAWishTopBottomNoneContentBlockController : BlockController<KeeblerMakeAWishTopBottomNoneContentBlock>
    {
        public override ActionResult Index(KeeblerMakeAWishTopBottomNoneContentBlock currentBlock)
        {
            return PartialView(currentBlock);
        }
    }
}
