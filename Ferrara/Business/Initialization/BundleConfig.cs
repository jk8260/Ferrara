using System.Web.Optimization;
using EPiServer.Framework;
using EPiServer.Framework.Initialization;

namespace Ferrara.Business.Initialization
{
    [InitializableModule]
    public class BundleConfig : IInitializableModule
    {
        public void Initialize(InitializationEngine context)
        {
            if (context.HostType == HostType.WebApplication)
            {
                RegisterBundles(BundleTable.Bundles);
            }
        }

        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/js").Include(
                        "~/Static/js/jquery.js", //jquery.js can be removed and linked from CDN instead, we use a local one for demo purposes without internet connection
                        "~/Static/js/bootstrap.js",
                        "~/Static/js/bootstrap.bundle.js"
                        ));

            bundles.Add(new ScriptBundle("~/bundles/js/TopMenuSite").Include(
              "~/Static/js/TopMenuSite/TopMenuSiteGlobal/TopMenuSiteGlobal.js"
            ));
            bundles.Add(new ScriptBundle("~/bundles/js/SharedProductDetailsPage").Include(
              "~/Static/js/TopMenuSite/nutritionDropdown/nutritionDropdown.js",
              "~/Static/js/TopMenuSite/carousel/carousel.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/js/Header").Include(
              "~/Static/js/TopMenuSite/logoStyle/logoStyle.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/js/SweetTreatsSPA").Include(
              "~/Static/js/Keebler/SweetTreatsPage/SweetTreatsSPA/SweetTreatsSPA.js",
              "~/Static/js/Keebler/SweetTreatsPage/SweetTreatsSPAHelpers/SweetTreatsSPAHelpers.js",
              "~/Static/js/Keebler/SweetTreatsPage/SweetTreatsUrlRouting/SweetTreatsUrlRouting.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/js/SweetTreatsProductsAPI").Include(
              "~/Static/js/Keebler/SweetTreatsPage/SweetTreatsProductsAPI/SweetTreatsProductsAPI.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/js/KeeblerHomePage").Include(
              "~/Static/js/Keebler/KeeblerHomePage/UrlRouting/UrlRouting.js",
              "~/Static/js/Keebler/HomePage/HomePage.js",
              "~/Static/js/Keebler/KeeblerHomePageHorizontalScroll/KeeblerHomePageHorizontalScroll.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/js/KeeblerGlobalTs").Include(
              "~/Static/js/Keebler/KeeblerGlobalTs/KeeblerGlobalTs.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/js/KeeblerLocalStorageForStartPageTs").Include(
              "~/Static/js/Keebler/KeeblerLocalStorageForStartPageTs/KeeblerLocalStorageForStartPageTs.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/js/RecipeAPIParser").Include(
               "~/Static/js/Keebler/RecipePage/RecipeAPIParser.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/js/keebler").Include(
                "~/Static/js/Keebler/custom-dropdown/custom-dropdown.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/js/FudgeDrip").Include(
                "~/Static/js/Keebler/FudgeDrip/FudgeDrip.js"
            ));
            
            bundles.Add(new ScriptBundle("~/bundles/js/MakeAWishVideoBlock").Include(
                "~/Static/js/Keebler/MakeAWish/MakeAWishVideoBlock/MakeAWishVideoBlock.js"
            ));
            
            bundles.Add(new ScriptBundle("~/bundles/js/MakeAWishSocialMediaBlock").Include(
                "~/Static/js/Keebler/MakeAWish/MakeAWishSocialMediaBlock/MakeAWishSocialMediaBlock.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/js/MakeAWishCarouselBlock").Include(
                "~/Static/js/Keebler/MakeAWish/MakeAWishCarouselBlock/MakeAWishCarouselBlock.js"
            ));

            bundles.Add(new StyleBundle("~/bundles/css")
                .Include("~/Static/css/bootstrap.css", new CssRewriteUrlTransform())
                .Include("~/Static/css/bootstrap-grid.css")
                .Include("~/Static/css/bootstrap-reboot.css")
                .Include("~/Static/css/media.css")
                .Include("~/Static/css/style.css", new CssRewriteUrlTransform())
                .Include("~/Static/css/editmode.css"));

            bundles.Add(new StyleBundle("~/bundles/css/topMenuSite")
                .Include("~/Static/css/TopMenuSite/Style.css", new CssRewriteUrlTransform())
                .Include("~/Static/css/TopMenuSite/nutrition-block.css", new CssRewriteUrlTransform())
                );

            bundles.Add(new StyleBundle("~/bundles/css/famousAmosSite")
                .Include("~/Static/css/FamousAmosSite/style.css", new CssRewriteUrlTransform())
                );
            bundles.Add(new StyleBundle("~/bundles/css/mothersCookies")
                .Include("~/Static/css/MothersCookies/style.css", new CssRewriteUrlTransform())
                );
            bundles.Add(new StyleBundle("~/bundles/css/murraySugarFree")
                .Include("~/Static/css/MurraySugarFree/style.css", new CssRewriteUrlTransform())
                );
            bundles.Add(new StyleBundle("~/bundles/css/murrayFood")
                .Include("~/Static/css/MurrayFood/style.css", new CssRewriteUrlTransform())
                );

            bundles.Add(new StyleBundle("~/bundles/css/keebler")
                .Include("~/Static/css/Keebler/Style.css", new CssRewriteUrlTransform())
                );
        }

        public void Uninitialize(InitializationEngine context)
        {
        }

        public void Preload(string[] parameters)
        {
        }
    }
}
