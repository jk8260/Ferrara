using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Web;
using EPiServer.Web.Mvc;

namespace Ferrara.Sites.Keebler.KeeblerMakeAWishVideoBlock
{
    public class KeeblerMakeAWishVideoBlockController : BlockController<KeeblerMakeAWishVideoBlock>
    {
        public override ActionResult Index(KeeblerMakeAWishVideoBlock currentBlock)
        {
            return PartialView(currentBlock);
        }
    }
}
