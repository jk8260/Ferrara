using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Web;
using EPiServer.Web.Mvc;

namespace Ferrara.Sites.Keebler.KeeblerSocialMediaBlock
{
    public class KeeblerSocialMediaBlockController : BlockController<KeeblerSocialMediaBlock>
    {
        public override ActionResult Index(KeeblerSocialMediaBlock currentBlock)
        {
            return PartialView(currentBlock);
        }
    }
}
