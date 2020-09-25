using System.ComponentModel.DataAnnotations;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using Ferrara.Models;

namespace Ferrara.Sites.TopMenuSite.SharedToolsPage
{
    [ContentType(
        DisplayName = "Shared Tools Page",
        GUID = "7705b254-a339-4d51-a468-8aca076df93f",
        GroupName = Global.GroupNames.TopMenuSites,
        Description = "Tools Page")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail-standard.png")]
    public class SharedToolsPage : TopMenuSitePageData
    {
        [CultureSpecific]
        [Display(
            Name = "Tools Main Body*",
            Description = "Content for Tools Page",
            GroupName = SystemTabNames.Content,
            Order = 1)]
        [Required]
        public virtual XhtmlString ToolsBody { get; set; }
    }
}