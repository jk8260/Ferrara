using System;
using System.ComponentModel.DataAnnotations;
using EPiServer;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Shell.ObjectEditing;
using Ferrara.Models;

namespace Ferrara.Sites.Keebler.KeeblerMakeAWishVideoBlock
{
    [ContentType(DisplayName = "Keebler Make A Wish Video Block", 
        GUID = "7572779d-8cc9-43ae-a89c-c4d6e4d73fbc", 
        Description = "")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail.png")]
    public class KeeblerMakeAWishVideoBlock : BlockData
    {
        
        [CultureSpecific]
        [Display(
            Name = "Video Block",
            Description = "Video Block",
            GroupName = SystemTabNames.Content,
            Order = 3)]
        [Required]
        public virtual  Url VideoBlock { get; set; }

        [Required]
        [Display(
           Name = "Video Play Options*",
           Description = "",
           GroupName = SystemTabNames.Content,
           Order = 6)]
        [EditorDescriptor(EditorDescriptorType =
        typeof(Business.EditorDescriptors.CustomSelectionFactoryEditorDescriptor<Business.Rendering.Keebler.MAWVideoList>))]
        public virtual string VideoPlayOption { get; set; }

        [CultureSpecific]
        [Display(
           Name = "Display scroll down button (Select if you'd like the scroll down button to display)",
           Description = "Select if you'd like the scroll down button to display",
           GroupName = SystemTabNames.Content,
           Order = 9)]
        public virtual Boolean DisplayScrollDownBtn { get; set; }

        [Display(
           Name = "Id of div to scroll to",
           Description = "Div ID to scroll to",
           GroupName = SystemTabNames.Content,
           Order = 12)]
        public virtual string ScrollToDiv { get; set; }

        [Display(
           Name = "Custom CSS ID For Video Block Div",
           Description = "Custom CSS ID For Video Block Div",
           GroupName = Global.GroupNames.CustomCSS,
           Order = 3)]
        public virtual string CustomIdForVideoBlockDiv { get; set; }

    }
}