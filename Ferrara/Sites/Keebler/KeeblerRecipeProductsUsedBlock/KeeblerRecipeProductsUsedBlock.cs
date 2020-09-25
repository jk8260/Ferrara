using System;
using System.ComponentModel.DataAnnotations;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;

namespace Ferrara.Sites.Keebler.KeeblerRecipeProductsUsedBlock
{
    [ContentType(DisplayName = "Keebler Recipe Products Used Block", 
    GUID = "cb61049d-23a4-4d6b-ab42-22eac5c72501", 
    Description = "")]
    public class KeeblerRecipeProductsUsedBlock : BlockData
    {
        [Display(
           Name = "Product Name",
           GroupName = SystemTabNames.Content,
           Order = 10)]
        public virtual string ProductNameLabel { get; set; }

        [Display(
            Name = "Product Description",
            GroupName = SystemTabNames.Content,
            Order = 20)]
        public virtual XhtmlString ProductDescription { get; set; }

        [CultureSpecific]
        [Display(
            Name = "Buy Now Link",
            Description = "Script Link",
            GroupName = SystemTabNames.Content,
            Order = 50)]
        [Required]
        public virtual string BuyNowLink { get; set; }
    }
}