using System;
using System.ComponentModel.DataAnnotations;
using EPiServer;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Shell.ObjectEditing;
using EPiServer.Web;
using Ferrara.Models;

namespace Ferrara.Sites.Keebler.KeeblerStartPageBlock
{
    [ContentType(
        DisplayName = "Keebler Start Page Block", 
        GUID = "ed05e295-ed41-4d09-a501-d8ef9e672c10",
        GroupName = Global.GroupNames.Keebler,
        Description = "Keebler Start Page Block")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail.png")]
    public class KeeblerStartPageBlock : BlockData
    {
        [Display(
            Name = "Orientation",
            GroupName = SystemTabNames.Content,
            Order = 15)]
        [Required]
        [EditorDescriptor(EditorDescriptorType =
        typeof(Business.EditorDescriptors.CustomSelectionFactoryEditorDescriptor<Business.Rendering.ClassList>))]
        public virtual string OrientationClass { get; set; }

        [Display(
            Name = "Section Title",
            GroupName = SystemTabNames.Content,
            Order = 20)]
        [UIHint(UIHint.Textarea)]
        public virtual string SectionTitle { get; set; }

        [Display(
            Name = "Section Description",
            GroupName = SystemTabNames.Content,
            Order = 30)]
        public virtual XhtmlString SectionDescription { get; set; }

        [Display(
            Name = "Use Static Image or Animation Sprite?",
            GroupName = SystemTabNames.Content,
            Order = 35)]
        [Required]
        [EditorDescriptor(EditorDescriptorType =
        typeof(Business.EditorDescriptors.CustomSelectionFactoryEditorDescriptor<Business.Rendering.ImageOrSprite>))]
        public virtual string ImageOrSprite { get; set; }

        [Display(
            Name = "Section Image",
            GroupName = SystemTabNames.Content,
            Order = 40)]
        [MaxItems(1)]
        [AllowedTypes(AllowedTypes = new[] { typeof(KeeblerImageBlock.KeeblerImageBlock) })]
        public virtual ContentArea MainImage { get; set; }

        [Display(
            Name = "Animation Sprite Sheet",
            GroupName = SystemTabNames.Content,
            Order = 45)]
        public virtual Url SpriteSheet { get; set; }

        [Display(
            Name = "Main Button Link Label",
            GroupName = SystemTabNames.Content,
            Order = 50)]
        public virtual string MainLinkLabel { get; set; }

        [Display(
           Name = "Show Video in Popup",
           GroupName = SystemTabNames.Content,
           Order = 60)]
        public virtual bool showPopup { get; set; }


        [Display(
            Name = "Main Button Link",
            GroupName = SystemTabNames.Content,
            Order = 60)]
        public virtual Url MainLink { get; set; }
        
        [Display(
            Name = "Add optional lower section?",
            GroupName = SystemTabNames.Content,
            Order = 65)]
        public virtual Boolean AddLowerSection { get; set; }

        [Display(
            Name = "Optional Lower Section Header",
            GroupName = SystemTabNames.Content,
            Order = 70)]
        public virtual string SecondaryHeader { get; set; }

        [Display(
            Name = "Optional Lower Section Link Label",
            GroupName = SystemTabNames.Content,
            Order = 80)]
        public virtual string SecondaryLinkLabel { get; set; }

        [Display(
            Name = "Optional Lower Section Link",
            GroupName = SystemTabNames.Content,
            Order = 90)]
        public virtual Url SecondaryLink { get; set; }
    }
}