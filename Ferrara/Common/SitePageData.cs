using System;
using System.ComponentModel.DataAnnotations;
using EPiServer;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Shell.ObjectEditing;
using EPiServer.Web;
using Ferrara.Business.Rendering;
using Ferrara.Models.Properties;
using Ferrara.Sites.Keebler.KeeblerSocialMediaBlock;

namespace Ferrara.Common
{
    public abstract class SitePageData : PageData, ICustomCssInContentArea
    {

        [Display(
           Name = "Header Animation for Desktop",
           Description = "Header Animation used for desktop",
           GroupName = Global.GroupNames.BrandTheme,
           Order = 4)]
        public virtual Url HeaderAnimationDesktop { get; set; }

        [Display(
           Name = "Header Animation for mobile",
           Description = "Header Animation used for mobile",
           GroupName = Global.GroupNames.BrandTheme,
           Order = 5)]
        public virtual Url HeaderAnimationMobile { get; set; }

        [Display(
           Name = "Loading Spinner Image",
           Description = "Loading Spinner Image",
           GroupName = Global.GroupNames.BrandTheme,
           Order = 6)]
        public virtual Url LoadingSpinnerImage { get; set; }

        [Display(
           Name = "Loading Spinner Timeout in MS",
           Description = "Loading Spinner Timeout in MS",
           GroupName = Global.GroupNames.BrandTheme,
           Order = 7)]
        public virtual int LoadingSpinnerTimeout { get; set; }

        [Display(
           Name = "Loading Spinner Pixel Size",
           Description = "Loading Spinner Pixel Size",
           GroupName = Global.GroupNames.BrandTheme,
           Order = 8)]
        public virtual int LoadingSpinnerPixelSize { get; set; }

        [Display(
           Name = "Footer Block",
           Description = "Footer",
           GroupName = Global.GroupNames.Footer,
           Order = 10)]
        [MaxItems(1)]
        public virtual ContentArea FooterBlock { get; set; }
        
        [Display(
           Name = "Social Media Block - Displayed in Header",
           GroupName = Global.GroupNames.BrandTheme,
           Order = 11)]
        [MaxItems(1)]
        public virtual ContentArea SocialMediaBlock { get; set; }

        [CultureSpecific]
        [Display(
            Name = "Link to Home Page",
            Description = "Link to Home Page",
            GroupName = Global.GroupNames.BrandTheme,
            Order = 380)]
        public virtual PageReference HomePageLink { get; set; }

        [Display(
           Name = "Header Logo",
           Description = "Add a header logo",
           GroupName = Global.GroupNames.BrandTheme,
           Order = 382)]
        public virtual ContentArea HeaderLogo { get; set; }


        [Display(
           Name = "Header Banner Image",
           Description = "Add a header banner image",
           GroupName = Global.GroupNames.BrandTheme,
           Order = 383)]
        public virtual Url HeaderBannerImage { get; set; }

        [Display(
           Name = "Banner Image (Murray Foods Site)",
           Description = "Add a banner image (will be displayed below nav bar)",
           GroupName = Global.GroupNames.BrandTheme,
           Order = 384)]
        public virtual Url BannerImage { get; set; }

        [Required]
        [Display(
           Name = "Header Color*",
           Description = "Add a header color",
           GroupName = Global.GroupNames.BrandTheme,
           Order = 385)]
        [EditorDescriptor(EditorDescriptorType =
        typeof(Business.EditorDescriptors.CustomSelectionFactoryEditorDescriptor<Business.Rendering.ColorsList>))]
        public virtual string HeaderColor { get; set; }

        [Display(
           Name = "Header Tagline",
           Description = "Add a header tagline",
           GroupName = Global.GroupNames.BrandTheme,
           Order = 386)]
        public virtual string HeaderTagline { get; set; }

        [Required]
        [Display(
            Name = "Meta Title*",
            Description = "Meta Title",
            GroupName = Global.GroupNames.MetaData,
            Order = 400)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual string MetaTitle { get; set; }

        [Display(
            Name = "Meta Description",
            Description = "Meta Description",
        GroupName = Global.GroupNames.MetaData,
        Order = 410)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual string MetaDescription { get; set; }

        [Display(
            Name = "Meta Keywords",
            Description = "Meta Keywords",
            GroupName = Global.GroupNames.MetaData,
            Order = 415)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual string MetaKeywords { get; set; }

        [Display(
            Name = "OG Title",
            Description = "OG Title",
            GroupName = Global.GroupNames.MetaData,
            Order = 420)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual string OgTitle { get; set; }

        [Display(
            Name = "OG Description",
            Description = "OG Description",
            GroupName = Global.GroupNames.MetaData,
            Order = 422)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual string OgDescription { get; set; }

        [Display(
            Name = "OG Type",
            Description = "OG Type",
            GroupName = Global.GroupNames.MetaData,
            Order = 425)]
        [CultureSpecific]
        public virtual string OgType { get; set; }

        [Display(
            Name = "OG Image",
            Description = "OG Image",
            GroupName = Global.GroupNames.MetaData,
            Order = 427)]
        [CultureSpecific]
        public virtual Url OgImage { get; set; }

        [Display(
            Name = "OG Image Width",
            Description = "OG Image Width",
            GroupName = Global.GroupNames.MetaData,
            Order = 432)]
        [CultureSpecific]
        public virtual string OgImageWidth { get; set; }

        [Display(
            Name = "OG Image Height",
            Description = "OG Image Height",
            GroupName = Global.GroupNames.MetaData,
            Order = 435)]
        [CultureSpecific]
        public virtual string OgImageHeight { get; set; }

        [Display(
            Name = "OG Image Alt",
            Description = "OG Image Alt",
            GroupName = Global.GroupNames.MetaData,
            Order = 437)]
        [CultureSpecific]
        public virtual string OgImageAlt { get; set; }

        [Display(
            GroupName = SystemTabNames.Content,
            Order = 440)]
        [UIHint(UIHint.Image)]
        [Ignore]// add this to ignore this property
        public virtual ContentReference PageImage { get; set; }

        [Display(
            GroupName = SystemTabNames.Settings,
            Order = 460)]
        [CultureSpecific]
        public virtual bool HideSiteHeader { get; set; }

        [Display(
            GroupName = SystemTabNames.Settings,
            Order = 470)]
        [CultureSpecific]
        public virtual bool HideSiteFooter { get; set; }

        [Required]
        [Display(
           Name = "Main Background Color*",
           Description = "Main Background Color",
           GroupName = Global.GroupNames.BrandTheme,
           Order = 480)]
            [EditorDescriptor(EditorDescriptorType =
        typeof(Business.EditorDescriptors.CustomSelectionFactoryEditorDescriptor<Business.Rendering.ColorsList>))]
        public virtual string BackgroundColor { get; set; }

        [Display(
           Name = "Main Background Image - If none entered, background will default to color selected.",
           Description = "Main background image",
           GroupName = Global.GroupNames.BrandTheme,
           Order = 490)]
        public virtual Url BackgroundImage { get; set; }

        [Display(
           Name = "Brand Icon - Browser Tab",
           Description = "This will appear on the browser tab, should be png file",
           GroupName = Global.GroupNames.BrandTheme,
           Order = 494)]
        public virtual Url BrandsIcon { get; set; }

        [Required]
        [Display(
               Name = "Brand Theme*",
               Description = "Select one of the predefined themes.",
               GroupName = Global.GroupNames.BrandTheme,
               Order = 500)]
        [EditorDescriptor(EditorDescriptorType =
            typeof(Business.EditorDescriptors.CustomSelectionFactoryEditorDescriptor<Business.Rendering.BrandsCodesList>))]
        public virtual string BrandsCode { get; set; }

        [Display(
            Name = "Where to Buy Brand Code (example: motherscookiesfr)",
            Description = "Where to buy code (ex: motherscookiesfr)",
            GroupName = Global.GroupNames.BrandTheme,
            Order = 515)]
        [CultureSpecific]
        public virtual string WhereToBuyBrandCode { get; set; }

        [Display(
            Name = "Sweet Treats Page Number for Search Bar",
            Description = "Recipes Page Number for Search Bar",
            GroupName = SystemTabNames.Content,
            Order = 550)]
        [CultureSpecific]
        public virtual int SweetTreatsPageNumber { get; set; }

        //[Display(
        //   Name = "Add CSS File",
        //   Description = "Add CSS File",
        //   GroupName = Global.GroupNames.CustomCSS,
        //   Order = 550)]
        //[CultureSpecific]
        //public virtual Url AddCSSFile { get; set; }

        [Display(
           Name = "Add Custom CSS",
           Description = "Add Custom CSS",
           GroupName = Global.GroupNames.CustomCSS,
           Order = 550)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual string CustomCSSCode { get; set; }

        [Display(
            Name = "Recipes Page Number for Search Bar",
            Description = "Recipes Page Number for Search Bar",
            GroupName = SystemTabNames.Content,
            Order = 600)]
        [CultureSpecific]
        public virtual int RecipesPageNumber { get; set; }

        [Display(
            Name = "OG Sitename",
            Description = "OG Sitename",
            GroupName = Global.GroupNames.MetaData,
            Order = 435)]
        [CultureSpecific]
        public virtual string OgSitename { get; set; }

        public string ContentAreaCssClass
        {
            get { return "teaserblock"; } //Page partials should be style like teasers
        }
    }
}