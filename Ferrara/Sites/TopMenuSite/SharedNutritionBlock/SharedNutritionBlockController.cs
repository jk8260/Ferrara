using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Web;
using EPiServer.Web.Mvc;

namespace Ferrara.Sites.TopMenuSite.SharedNutritionBlock
{
    public class SharedNutritionBlockController : BlockController<SharedNutritionBlock>
    {
        public override ActionResult Index(SharedNutritionBlock currentBlock)
        {
            return PartialView(currentBlock);
        }
    }
}
