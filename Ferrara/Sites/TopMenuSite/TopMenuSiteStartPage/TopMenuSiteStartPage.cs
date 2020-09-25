using System;
using System.ComponentModel.DataAnnotations;
using EPiServer;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Shell.ObjectEditing;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using Ferrara.Common;
using Ferrara.Models;

namespace Ferrara.Sites.TopMenuSite.TopMenuSiteStartPage
{
    [ContentType(DisplayName = "Top Menu Site StartPage", 
        GUID = "64cf489d-d4cf-4719-aef8-b0313aec4caf",
        GroupName = Global.GroupNames.TopMenuSites,
        Description = "Start page with a top nav menu.")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail-standard.png")]
    public class TopMenuSiteStartPage : StartPageBase
    {
        public override string SiteName
        {
            get { return WebsiteName.MurraySugarFree; }
        }
       
        [Display(
            Name = "Brand Logo",
            Description = "Add a brand logo",
            GroupName = SystemTabNames.Content,
            Order = 2)]
        public virtual ContentArea Logo { get; set; }

        [Display(
            Name = "Brand Tagline",
            Description = "Enter a brand tagline",
            GroupName = SystemTabNames.Content,
            Order = 4)]
        public virtual XhtmlString Tagline { get; set; }

        [Display(
            Name = "Brand Description*",
            Description = "Enter a brand description",
            GroupName = SystemTabNames.Content,
            Order = 6)]
        [Required]
        public virtual XhtmlString BrandDescription { get; set; }

        [Display(
            Name = "Main Image",
            Description = "Add a main image",
            GroupName = SystemTabNames.Content,
            Order = 8)]
        public virtual Url MainImage { get; set; }

        //Used for Mother's Site
        [Display(
           Name = "Background for Nav Bar Image (Mother's Site)",
           Description = "Only used for mothers site",
           GroupName = SystemTabNames.Content,
           Order = 85)]
        public virtual ContentArea NavBarImage { get; set; }

        //Used for Mother's Site
        [Display(
           Name = "Nav Links Area (Mother's Site)",
           Description = "Only used for mothers site",
           GroupName = SystemTabNames.Content,
           Order = 86)]
        [MaxItems(3)]
        public virtual ContentArea NavBarItems { get; set; }
    }
}