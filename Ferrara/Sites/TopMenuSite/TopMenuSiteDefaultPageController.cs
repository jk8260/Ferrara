using EPiServer.Framework.DataAnnotations;
using Ferrara.Common;

namespace Ferrara.Sites.TopMenuSite
{
    [TemplateDescriptor(Inherited = true)]
    public class TopMenuSiteDefaultPageController : DefaultPageController<TopMenuSitePageData>
    {
        public override string ViewName
        {
            get { return "~/Sites/TopMenuSite/{0}/Index.cshtml"; }
        }
    }
}