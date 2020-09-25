﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Web;
using EPiServer.Web.Mvc;

namespace Ferrara.Sites.Keebler.KeeblerStartPageBlock
{
    public class KeeblerStartPageBlockController : BlockController<KeeblerStartPageBlock>
    {
        public override ActionResult Index(KeeblerStartPageBlock currentBlock)
        {
            return PartialView(currentBlock);
        }
    }
}
