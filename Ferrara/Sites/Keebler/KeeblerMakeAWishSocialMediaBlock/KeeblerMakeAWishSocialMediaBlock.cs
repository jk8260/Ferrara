using System.ComponentModel.DataAnnotations;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using Ferrara.Models;
using EPiServer.Shell.ObjectEditing;
using System;

namespace Ferrara.Sites.Keebler.KeeblerMakeAWishSocialMediaBlock
{
    [ContentType(DisplayName = "Keebler Make A Wish Social Media Block", 
        GUID = "087a1c5e-afa1-400a-8c89-057a85972a7f", 
        Description = "")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail-standard.png")]
    public class KeeblerMakeAWishSocialMediaBlock : BlockData
    {
        [Display(
           Name = "Social Media Head Line",
           Description = "Social Medin Head Line",
           GroupName = SystemTabNames.Content,
           Order = 3)]
        public virtual String SocialMediaHeadLine { get; set; }

        [Display(
           Name = "Social Media URL Link",
           Description = "Social Media URL Link",
           GroupName = SystemTabNames.Content,
           Order = 6)]
        public virtual String FollowButtonLink { get; set; }

        [Required]
        [Display(
           Name = "Social Media*",
           Description = "",
           GroupName = SystemTabNames.Content,
           Order = 9)]
        [EditorDescriptor(EditorDescriptorType =
        typeof(Business.EditorDescriptors.CustomSelectionFactoryEditorDescriptor<Business.Rendering.Keebler.MAWSocialMediaList>))]
        public virtual string SocialMediaName { get; set; }

        [Display(
           Name = "Custom CSS ID For Social Media Div",
           Description = "Custom CSS ID For Social Media Div",
           GroupName = Global.GroupNames.CustomCSS,
           Order = 3)]
        public virtual String CustomIdSocialMediaBlockDiv { get; set; }

    }
}