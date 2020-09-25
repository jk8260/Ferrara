using System;
using System.ComponentModel.DataAnnotations;
using EPiServer;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using Ferrara.Common;
using Ferrara.Models;

namespace Ferrara.Sites.Keebler.KeeblerMakeAWishTemplatePage
{
    [ContentType(DisplayName = "Keebler Make A Wish Template Page", 
        GUID = "7419b2bd-05a6-4c96-a9f8-85f437f75784", 
        Description = "")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail-standard.png")]
    public class KeeblerMakeAWishTemplatePage : KeeblerPageData
    {

        [Display(
           Name = "Content Block",
           Description = "Content Block", 
           GroupName = SystemTabNames.Content,
           Order = 3)]
        public virtual ContentArea ContentBlock { get; set; }
        
        [Display(
           Name = "Custom CSS ID For Main Page Div",
           Description = "Custom CSS ID For Main Page Div", 
           GroupName = Global.GroupNames.CustomCSS,
           Order = 6)]
        public virtual String CustomIdForMainPageDiv { get; set; }

        [CultureSpecific]
        [Display(
            Name = "Add Custom Css File",
            GroupName = Global.GroupNames.CustomCSS,
            Order = 19)]
        public virtual Url CustomCssFile { get; set; }
    }
}