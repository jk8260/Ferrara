using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Web;
using EPiServer.Web.Mvc;

namespace Ferrara.Sites.Keebler.KeeblerMakeAWishTitleBlock
{
    public class KeeblerMakeAWishTitleBlockController : BlockController<KeeblerMakeAWishTitleBlock>
    {
        public override ActionResult Index(KeeblerMakeAWishTitleBlock currentBlock)
        {
            return PartialView(currentBlock);
        }
    }
}
