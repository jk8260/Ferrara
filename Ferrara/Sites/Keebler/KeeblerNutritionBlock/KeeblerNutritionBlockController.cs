using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Web;
using EPiServer.Web.Mvc;

namespace Ferrara.Sites.Keebler.KeeblerNutritionBlock
{
    public class KeeblerNutritionBlockController : BlockController<KeeblerNutritionBlock>
    {
        public override ActionResult Index(KeeblerNutritionBlock currentBlock)
        {
            return PartialView(currentBlock);
        }
    }
}
