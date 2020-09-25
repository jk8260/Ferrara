using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Web;
using EPiServer.Web.Mvc;

namespace Ferrara.Sites.Keebler.KeeblerDestiniButtonBlock
{
    public class KeeblerDestiniButtonBlockController : BlockController<KeeblerDestiniButtonBlock>
    {
        public override ActionResult Index(KeeblerDestiniButtonBlock currentBlock)
        {
            return PartialView(currentBlock);
        }
    }
}
