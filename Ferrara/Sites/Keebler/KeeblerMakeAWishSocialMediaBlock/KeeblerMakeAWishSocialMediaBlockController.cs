using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Web;
using EPiServer.Web.Mvc;

namespace Ferrara.Sites.Keebler.KeeblerMakeAWishSocialMediaBlock
{
    public class KeeblerMakeAWishSocialMediaBlockController : BlockController<KeeblerMakeAWishSocialMediaBlock>
    {
        public override ActionResult Index(KeeblerMakeAWishSocialMediaBlock currentBlock)
        {
            return PartialView(currentBlock);
        }
    }
}
