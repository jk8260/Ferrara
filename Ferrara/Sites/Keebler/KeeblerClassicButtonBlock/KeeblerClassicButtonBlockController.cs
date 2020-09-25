﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Web;
using EPiServer.Web.Mvc;

namespace Ferrara.Sites.Keebler.KeeblerClassicButtonBlock
{
    public class KeeblerClassicButtonBlockController : BlockController<KeeblerClassicButtonBlock>
    {
        public override ActionResult Index(KeeblerClassicButtonBlock currentBlock)
        {
            return PartialView(currentBlock);
        }
    }
}
