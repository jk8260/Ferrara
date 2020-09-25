using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Shell.ObjectEditing;
using EPiServer.Web.WebControls;
using Ferrara;

namespace Ferrara.Common
{
    public abstract class StartPageBase : SitePageData
    {
        public abstract string SiteName { get; }
    }
}