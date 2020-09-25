using System;
using System.ComponentModel.DataAnnotations;
using System.Security.Policy;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using Ferrara.Models;

namespace Ferrara.Sites.Keebler.KeeblerFooterBlock
{
    [ContentType(
        DisplayName = "Keebler Footer Block", 
        GUID = "e5b43468-c6c1-4516-9882-25378501086c",
        GroupName = Global.GroupNames.Keebler,
        Description = "Keebler Footer Block")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail.png")]
    public class KeeblerFooterBlock : BlockData
    {
        [Display(
           Name = "Social Media Block",
           GroupName = SystemTabNames.Content,
           Order = 50)]
        [AllowedTypes(AllowedTypes = new[] { typeof(KeeblerSocialMediaBlock.KeeblerSocialMediaBlock) })]
        [MaxItems(1)]
        public virtual ContentArea SocialMediaBlock { get; set; }

        [Display(
           Name = "Main Links",
           GroupName = SystemTabNames.Content,
           Order = 60)]
        [AllowedTypes(AllowedTypes = new[] { typeof(KeeblerFooterATagBlock.KeeblerFooterATagBlock) })]
        public virtual ContentArea MainLinksArea { get; set; }

        [Display(
            Name = "Ferrara Link",
            GroupName = SystemTabNames.Content,
            Order = 70)]
        [CultureSpecific]
        [Required]
        public virtual string FerraraLink { get; set; }

        [Display(
            Name = "Ferrara Brand Image Block",
            GroupName = SystemTabNames.Content,
            Order = 80)]
        [CultureSpecific]
        [Required]
        [AllowedTypes(AllowedTypes = new[] { typeof(KeeblerImageBlock.KeeblerImageBlock) })]
        [MaxItems(1)]
        public virtual ContentArea FerraraBrandImage { get; set; }

        [Display(
            Name = "Other Brands Link",
            GroupName = SystemTabNames.Content,
            Order = 90)]
        [CultureSpecific]
        [Required]
        public virtual string OtherBrandsLink { get; set; }
    }
}