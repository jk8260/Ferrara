using EPiServer.DataAnnotations;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Ferrara
{

    public class Global
    {
        public static readonly string LoginPath = "/util/login.aspx";
        public static readonly string AppRelativeLoginPath = string.Format("~{0}", LoginPath);

        /// <summary>
        /// Group names for content types and properties
        /// </summary>
        [GroupDefinitions()]
        public static class GroupNames
        {
            
            [Display(Name = "Keebler", Order = 5)]
            public const string Keebler = "Keebler";

            [Display(Name = "Top Menu Sites", Order = 10)]
            public const string TopMenuSites = "Top Menu Sites";

            [Display(Name = "Brand Theme", Order = 12)]
            public const string BrandTheme = "Brand Theme";

            [Display(Name = "Footer", Order = 16)]
            public const string Footer = "Footer";

            [Display(Name = "Recipe Filter", Order = 16)]
            public const string RecipeFilter = "RecipeFilter";

            [Display(Name = "Metadata", Order = 19)]
            public const string MetaData = "Metadata";

            [Display(Name = "SiteSettings", Order = 22)]
            public const string SiteSettings = "SiteSettings";

            [Display(Name = "Specialized", Order = 25)]
            public const string Specialized = "Specialized";

            [Display(Name = "Default", Order = 28)]
            public const string Default = "Default";
            
            [Display(Name = "Custom CSS", Order = 30)]
            public const string CustomCSS = "Custom CSS";
        }

        /// <summary>
        /// Tags to use for the main widths used in the Bootstrap HTML framework
        /// </summary>
        public static class ContentAreaTags
        {
            public const string FullWidth = "span12";
            public const string TwoThirdsWidth = "span8";
            public const string HalfWidth = "span6";
            public const string OneThirdWidth = "span4";
            public const string NoRenderer = "norenderer";
        }

        /// <summary>
        /// Main widths used in the Bootstrap HTML framework
        /// </summary>
        public static class ContentAreaWidths
        {
            public const int FullWidth = 12;
            public const int TwoThirdsWidth = 8;
            public const int HalfWidth = 6;
            public const int OneThirdWidth = 4;
        }

        public static Dictionary<string, int> ContentAreaTagWidths = new Dictionary<string, int>
            {
                { ContentAreaTags.FullWidth, ContentAreaWidths.FullWidth },
                { ContentAreaTags.TwoThirdsWidth, ContentAreaWidths.TwoThirdsWidth },
                { ContentAreaTags.HalfWidth, ContentAreaWidths.HalfWidth },
                { ContentAreaTags.OneThirdWidth, ContentAreaWidths.OneThirdWidth }
            };

        /// <summary>
        /// Names used for UIHint attributes to map specific rendering controls to page properties
        /// </summary>
        public static class SiteUIHints
        {
            public const string Contact = "contact";
            public const string Strings = "StringList";
            public const string StringsCollection = "StringsCollection";
        }

        /// <summary>
        /// Virtual path to folder with static graphics, such as "~/Static/gfx/"
        /// </summary>
        public const string StaticGraphicsFolderPath = "~/Static/gfx/";

        public static class DescriptionHints
        {
            public const string ImageSizing = "Use Appropriate Image Sizing to Optimize Page Load";
        }
    }
}
