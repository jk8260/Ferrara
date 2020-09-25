using System;
using System.ComponentModel.DataAnnotations;
using EPiServer;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Shell.ObjectEditing;
using EPiServer.Web;
using Ferrara.Models;

namespace Ferrara.Sites.Keebler.KeeblerMakeAWishRightLeftContentBlock
{
    [ContentType(DisplayName = "Keebler Make A Wish Main Content Block", 
        GUID = "9705f391-0f21-4c77-862e-6292c49654d9",
        GroupName = Global.GroupNames.Keebler,
        Description = "Right / Left Oriented Images")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail.png")]
    public class KeeblerMakeAWishRightLeftContentBlock : BlockData
    {
        [Display(
           Name = "Custom CSS ID For Main Content Block",
           Description = "Custom CSS ID For Main Content Block",
           GroupName = Global.GroupNames.CustomCSS,
           Order = 6)]
        public virtual String CustomIdForMainContentBlock { get; set; }

        [Display(
            Name = "Orientation",
            GroupName = SystemTabNames.Content,
            Order = 15)]
        [Required]
        [EditorDescriptor(EditorDescriptorType =
        typeof(Business.EditorDescriptors.CustomSelectionFactoryEditorDescriptor<Business.Rendering.MAWRightLeftClassList>))]
        public virtual string OrientationClass { get; set; }

        [Display(
            Name = "Section Title",
            GroupName = SystemTabNames.Content,
            Order = 20)]
        [UIHint(UIHint.Textarea)]
        public virtual string SectionTitle { get; set; }

        [Display(
            Name = "Section Title Block (If you would like to have title appear above current block, leave 'Section Title' blank and input Section Title Block here)",
            GroupName = SystemTabNames.Content,
            Order = 30)]
        [MaxItems(1)]
        [AllowedTypes(AllowedTypes = new[] { typeof(KeeblerMakeAWishTitleBlock.KeeblerMakeAWishTitleBlock)})]
        public virtual ContentArea SectionTitleBlock { get; set; }

        [Display(
           Name = "Section Description",
           GroupName = SystemTabNames.Content,
           Order = 40)]
        public virtual XhtmlString SectionDescription { get; set; }

        [Display(
            Name = "Section Image",
            GroupName = SystemTabNames.Content,
            Order = 50)]
        [MaxItems(1)]
        [Required]
        [AllowedTypes(AllowedTypes = new[] { typeof(KeeblerImageBlock.KeeblerImageBlock) })]
        public virtual ContentArea MainImage { get; set; }

        [Display(
           Name = "Image Caption (Optional)",
           GroupName = SystemTabNames.Content,
           Order = 60)]
        [UIHint(UIHint.Textarea)]
        public virtual string ImageCaption { get; set; }

        
        [Display(
          Name = "Button(s) Area",
          GroupName = SystemTabNames.Content,
          Order = 70)]
        [MaxItems(2)]
        [AllowedTypes(AllowedTypes = new[] { typeof(KeeblerClassicButtonBlock.KeeblerClassicButtonBlock), typeof(KeeblerDestiniButtonBlock.KeeblerDestiniButtonBlock) })]
        public virtual ContentArea ButtonContentArea { get; set; }
    }
}