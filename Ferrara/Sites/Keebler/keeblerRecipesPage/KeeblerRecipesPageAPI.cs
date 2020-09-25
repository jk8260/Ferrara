using EPiServer;
using EPiServer.Core;
using EPiServer.ServiceLocation;
using EPiServer.Web.Mvc.Html;
using Ferrara.Models.keebler;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;

namespace Ferrara.Sites.Keebler.KeeblerRecipesPage
{
    public class KeeblerRecipesPageAPIController : ApiController
    {
        /// <summary>
        /// Get the content of KeeplerProductPage type by ContentReference ID
        /// </summary>
        /// <param name="id">Episerver ContentReference ID</param>
        /// <returns></returns>
        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("KeeblerRecipesPage/{id:int}")]
        // GET api/<controller>/5
        public string Get(int id)
        {

            try
            {
                IContentRepository factory = DataFactory.Instance;
                KeeblerRecipesPage page = factory.Get<KeeblerRecipesPage>(new ContentReference(id));
                var serviceLocator = ServiceLocator.Current.GetInstance<IContentLoader>();
                var urlHelper = ServiceLocator.Current.GetInstance<UrlHelper>();

                // Build Product Image
                var recipeImages = new Dictionary<int, Dictionary<string, string>>();

                if (page.RecipeImage != null)
                {
                    var i = 0;
                    foreach (var image in page.RecipeImage.Items)
                    {
                        var recipeImageBlock = serviceLocator.Get<KeeblerImageBlock.KeeblerImageBlock>(image.ContentLink);
                        var recipeImage = new Dictionary<string, string>();
                        recipeImage["src"] = urlHelper.ContentUrl(recipeImageBlock.ProductImage);
                        recipeImage["altSEO"] = recipeImageBlock.AltSEO;
                        recipeImages[i] = recipeImage;
                        i++;
                    }
                }

                // Build Nutrition Srcs List
                var nutritionSrcs = new Dictionary<string, string>();

                if (page.NutritionBlocks != null)
                {

                    foreach (var image in page.NutritionBlocks.Items)
                    {
                        var nutritionBlock = serviceLocator.Get<KeeblerNutritionBlock.KeeblerNutritionBlock>(image.ContentLink);

                        nutritionSrcs[nutritionBlock.BagSize] = urlHelper.ContentUrl(nutritionBlock.ProductImage);
                    }
                }


                return JsonConvert.SerializeObject(
                    new keeblerProduct()
                    {
                        ProductImage = recipeImages,
                        ProductDescriptionName = page.RecipeDescriptionName,
                        ProductDescription = page.RecipeDescription,
                        NutritionInfoButton = page.NutritionInfoButton,
                        BuyNowButton = page.BuyNowButton,
                        NutritionSrcs = nutritionSrcs
                    }
                );
            }
            catch (Exception)
            {
                return null;
            }

        }
    }
}