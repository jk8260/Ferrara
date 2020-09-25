using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Ferrara.Common
{
    public class MultiSiteViewEngine : RazorViewEngine
    {
        public MultiSiteViewEngine()
        {
            var viewSearchLocations = new List<string>();
            var viewPartialsSearchLocations = new List<string>();


            var topMenuSiteViewSearchLocations = new[] { "~/Sites/TopMenuSite/{1}/{0}.cshtml",
                                                      "~/Sites/TopMenuSite/Shared/{1}/{0}.cshtml",
                                                      "~/Sites/TopMenuSite/Shared/Blocks/{1}/{0}.cshtml",
                                                      "~/Sites/TopMenuSite/Shared/DisplayTemplates/{1}/{0}.cshtml",
                                                      "~/Sites/TopMenuSite/Shared/Layouts/{1}/{0}.cshtml"
                                                    }.ToList();

            var topMenuSiteViewPartialsSearchLocations = new[]
            {
                "~/Sites/TopMenuSite/{1}/{0}.cshtml",
                "~/Sites/TopMenuSite/Shared/Partials/{0}.cshtml",
                "~/Sites/TopMenuSite/Shared/{0}.cshtml"
            }.ToList();



            var keeblerViewSearchLocations = new[] { "~/Sites/Keebler/{1}/{0}.cshtml",
                                                      "~/Sites/Keebler/Shared/{1}/{0}.cshtml",
                                                      "~/Sites/Keebler/Shared/Blocks/{1}/{0}.cshtml",
                                                      "~/Sites/Keebler/Shared/DisplayTemplates/{1}/{0}.cshtml",
                                                      "~/Sites/Keebler/Shared/Layouts/{1}/{0}.cshtml"
                                                    }.ToList();

            var keeblerViewPartialsSearchLocations = new[]
            {
                "~/Sites/Keebler/{1}/{0}.cshtml",
                "~/Sites/Keebler/Shared/Partials/{0}.cshtml",
                "~/Sites/Keebler/Shared/{0}.cshtml"
            }.ToList();





            viewSearchLocations.AddRange(topMenuSiteViewSearchLocations);
            viewSearchLocations.AddRange(keeblerViewSearchLocations);
            ViewLocationFormats = viewSearchLocations.ToArray();

            viewPartialsSearchLocations.AddRange(topMenuSiteViewPartialsSearchLocations);
            viewPartialsSearchLocations.AddRange(keeblerViewPartialsSearchLocations);
            PartialViewLocationFormats = viewPartialsSearchLocations.ToArray();

        }
    }
}