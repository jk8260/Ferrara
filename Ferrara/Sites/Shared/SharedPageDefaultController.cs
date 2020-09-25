using EPiServer.Framework.DataAnnotations;
using Ferrara.Common;

namespace Ferrara.Sites.Shared
{
    [TemplateDescriptor(Inherited = true)]
    public class SharedPageDefaultController : DefaultPageController<SharedPageData>
    {
        public override string ViewName
        {
            get { return "~/Sites/Shared/{0}/Index.cshtml"; }
        }
    }
}
