using System;
using System.ComponentModel.DataAnnotations;
using EPiServer;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using Ferrara.Models;

namespace Ferrara.Sites.Keebler.KeeblerClassicButtonBlock
{
    [ContentType(DisplayName = "Keebler Classic Button Block", 
        GUID = "707833d9-2067-4f0b-9b51-2279af7d940c", 
        Description = "Keebler Button Block - Used for buttons that go to specific links on a new tab")]
    [SiteImageUrl(Global.StaticGraphicsFolderPath + "page-type-thumbnail.png")]
    public class KeeblerClassicButtonBlock : BlockData
    {
        [CultureSpecific]
        [Display(
            Name = "Button Label",
            GroupName = SystemTabNames.Content,
            Order = 10)]
        [Required]
        public virtual string ButtonLabel { get; set; }

        [CultureSpecific]
        [Display(
            Name = "URL link",
            GroupName = SystemTabNames.Content,
            Order = 20)]
        [Required]
        public virtual Url ButtonURL { get; set; }

        [Display(
           Name = "Custom CSS ID For Classic Button",
           Description = "Custom CSS ID For Classic Button",
           GroupName = Global.GroupNames.CustomCSS,
           Order = 30)]
        public virtual String CustomIdClassicButton { get; set; }
    }
}