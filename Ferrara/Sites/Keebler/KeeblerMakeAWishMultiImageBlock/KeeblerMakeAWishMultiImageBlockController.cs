using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Web;
using EPiServer.Web.Mvc;

namespace Ferrara.Sites.Keebler.KeeblerMakeAWishMultiImageBlock
{
    public class KeeblerMakeAWishMultiImageBlockController : BlockController<KeeblerMakeAWishMultiImageBlock>
    {
        public override ActionResult Index(KeeblerMakeAWishMultiImageBlock currentBlock)
        {
            return PartialView(currentBlock);
        }
    }
}
