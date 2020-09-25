using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Web;
using EPiServer.Web.Mvc;

namespace Ferrara.Sites.Keebler.KeeblerExploreBlock
{
    public class KeeblerExploreBlockController : BlockController<KeeblerExploreBlock>
    {
        public override ActionResult Index(KeeblerExploreBlock currentBlock)
        {
            return PartialView(currentBlock);
        }
    }
}
