﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Web;
using EPiServer.Web.Mvc;

namespace Ferrara.Sites.Keebler.KeeblerImageBlock
{
    public class KeeblerImageBlockController : BlockController<KeeblerImageBlock>
    {
        public override ActionResult Index(KeeblerImageBlock currentBlock)
        {
            return PartialView(currentBlock);
        }
    }
}
