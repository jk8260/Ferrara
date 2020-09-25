using EPiServer.Framework.DataAnnotations;
using Ferrara.Common;

namespace Ferrara.Sites.Keebler
{
    [TemplateDescriptor(Inherited = true)]
    public class KeeblerDefaultPageController : DefaultPageController<KeeblerPageData>
    {
        public override string ViewName
        {
            get { return "~/Sites/Keebler/{0}/Index.cshtml"; }
        }
    }
}