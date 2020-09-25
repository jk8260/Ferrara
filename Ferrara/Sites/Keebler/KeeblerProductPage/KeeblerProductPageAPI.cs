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

namespace Ferrara.Sites.Keebler.KeeplerProductPage
{
    public class KeeblerProductPageAPIController : ApiController
    {
        /// <summary>
        /// Get the content of KeeplerProductPage type by ContentReference ID
        /// </summary>
        /// <param name="id">Episerver ContentReference ID</param>
        /// <returns></returns>
        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("keeblerProductPage/{id:int}")]
        // GET api/<controller>/5
        public string Get(int id)
        {

            try
            {
                IContentRepository factory = DataFactory.Instance;
                KeeblerProductPage page = factory.Get<KeeblerProductPage>(new ContentReference(id));
                var serviceLocator = ServiceLocator.Current.GetInstance<IContentLoader>();
                var urlHelper = ServiceLocator.Current.GetInstance<UrlHelper>();

                // Build Product Image
                var productImages = new Dictionary<int, Dictionary<string, string>>();

                if (page.ProductImage != null)
                {
                    var i = 0;
                    foreach (var image in page.ProductImage.Items)
                    {
                        var productImageBlock = serviceLocator.Get<KeeblerImageBlock.KeeblerImageBlock>(image.ContentLink);
                        var productImage = new Dictionary<string, string>();
                        productImage["src"] = urlHelper.ContentUrl(productImageBlock.ProductImage);
                        productImage["altSEO"] = productImageBlock.AltSEO;
                        productImage["nutritionTabName"] = productImageBlock.NutritionDropdownTagName;
                        productImages[i] = productImage;
                        i++; 
                    }
                }

                // Build Recipe Cards 
                var recipeCards = new Dictionary<int, Dictionary<string, object>>();

                if (page.RecipesCategoryCardBlocks != null)
                {
                    var i = 0;
                    foreach (var recipe in page.RecipesCategoryCardBlocks.Items)
                    {
                        var recipeBlock = serviceLocator.Get<KeeblerRecipesCategoryCardBlock.KeeblerRecipesCategoryCardBlock>(recipe.ContentLink);

                        var recipeBlockDetails = new Dictionary<string, object>();
                        recipeBlockDetails["recipeName"] = urlHelper.ContentUrl(recipeBlock.CardName);
                        recipeBlockDetails["cardDescription"] = recipeBlock.CardDescription;
                        recipeBlockDetails["imageSrc"] = urlHelper.ContentUrl(recipeBlock.CardImage);
                        recipeBlockDetails["recipePageLink"] = urlHelper.ContentUrl(recipeBlock.RecipePage);
                        recipeCards[i] = recipeBlockDetails;
                        i++;
                    }
                } else
                {
                    recipeCards = null;
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
                    new keeblerProduct() { 
                        ProductImage = productImages,
                        ProductDescriptionName = page.ProductDescriptionName,
                        ProductDescription = page.ProductDescription,
                        NutritionInfoButton = page.NutritionInfoButton,
                        BuyNowButton = page.BuyNowButton,
                        NutritionSrcs = nutritionSrcs,
                        RecipesCategoryCardBlocks = recipeCards,
                        LinkToRecipePage = urlHelper.ContentUrl(page.LinkToRecipePage)
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