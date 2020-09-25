using System;
using System.ComponentModel.DataAnnotations;
using EPiServer;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using Ferrara.Models;

namespace Ferrara.Sites.Keebler.KeeblerDestiniButtonBlock
{
    [ContentType(DisplayName = "Keebler Destini Button Block", 
        GUID = "75127f5f-ba2c-4bea-8094-d68cc8468c19", 
        Description = "Destini Button Block - Used for buttons that will have a Destini pop-up modal")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail.png")]

    public class KeeblerDestiniButtonBlock : BlockData
    {
        [CultureSpecific]
        [Display(
            Name = "Button Label",
            GroupName = SystemTabNames.Content,
            Order = 10)]
        [Required]
        public virtual string ButtonLabel { get; set; }


        [Display(
           Name = "Custom CSS ID For Destini Button",
           Description = "Custom CSS ID For Destini Button",
           GroupName = Global.GroupNames.CustomCSS,
           Order = 20)]
        public virtual String CustomIdDestiniButton { get; set; }

        [Required]
        [Display(
          Name = "Pop-up Modal ID*",
          Description = "ID for pop-up modal ",
          GroupName = SystemTabNames.Content,
          Order = 20)]
        public virtual String ModalID { get; set; }

        [Display(
           Name = "Destini Product ID for modal (example: deluxe-grahams)",
           Description = "Enter a product ID",
           GroupName = SystemTabNames.Content,
           Order = 30)]
        [Required]
        public virtual string DestiniProductID { get; set; }
    }
}