using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Web;
using EPiServer.Web.Mvc;

namespace Ferrara.Sites.Keebler.KeeblerFooterBlock
{
    public class KeeblerFooterBlockController : BlockController<KeeblerFooterBlock>
    {
        public override ActionResult Index(KeeblerFooterBlock currentBlock)
        {
            return PartialView(currentBlock);
        }
    }
}
