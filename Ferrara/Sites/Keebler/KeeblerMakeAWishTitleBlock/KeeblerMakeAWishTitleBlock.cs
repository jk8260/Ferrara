using System;
using System.ComponentModel.DataAnnotations;
using EPiServer;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Shell.ObjectEditing;
using EPiServer.Web;
using Ferrara.Models;

namespace Ferrara.Sites.Keebler.KeeblerMakeAWishTitleBlock
{
    [ContentType(DisplayName = "Keebler Make A Wish Title Block", 
        GUID = "c73bca64-aaed-4ec0-ab39-e6f2f19cc5e7", 
        Description = "Make a Wish title block")]
    public class KeeblerMakeAWishTitleBlock : BlockData
    {
        [Required]
        [Display(
           Name = "Title for Block",
           GroupName = SystemTabNames.Content,
           Order = 10)]
        [UIHint(UIHint.Textarea)]
        public virtual string TitleBlock { get; set; }

    }
}