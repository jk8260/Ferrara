using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Web;
using EPiServer.Web.Mvc;

namespace Ferrara.Sites.Keebler.KeeblerWhereToBuyBlock
{
    public class KeeblerWhereToBuyBlockController : BlockController<KeeblerWhereToBuyBlock>
    {
        public override ActionResult Index(KeeblerWhereToBuyBlock currentBlock)
        {
            return PartialView(currentBlock);
        }
    }
}
