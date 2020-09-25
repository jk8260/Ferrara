using EPiServer;
using EPiServer.Core;
using EPiServer.ServiceLocation;
using EPiServer.Web.Routing;
using Ferrara.Business;
using Ferrara.Models;
using Ferrara.Models.keebler;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;



namespace Ferrara.Sites.Keebler.KeeblerRecipesCategoriesListingPage
{
    
    public class KeeblerRecipesCategoriesListingPageAPIController : ApiController
    {
        private Injected<IContentLoader> _contentLoader { get; set; }



        [HttpGet]
        [Route("KeeblerRecipesCategoriesListingPage/{id:int}")]
        // GET api/<controller>
        public string Get(int id)
        {
            IList<KeeblerCategory> categoryPagesList = new List<KeeblerCategory>();

            try
            {
                var serviceLocator = ServiceLocator.Current.GetInstance<IContentLoader>();
                var results = _contentLoader.Service.GetChildren<KeeblerRecipesCategoryPage.KeeblerRecipesCategoryPage>(new ContentReference(id)).FilterForDisplay().ToList();


                foreach (var categoryPage in results)
                {
                    var category = new KeeblerCategory();
                    category.RecipesCard= new List<KeeblerRecipeCard>();
                    category.CategoryTitle = categoryPage.CategoryTitle;

                    //Importing Images Files
                    category.CategoryImage = categoryPage.CategoryImage;

                    if (categoryPage.TabsContainer != null)
                    {
                        foreach (var tabContainer in categoryPage.TabsContainer.Items)
                        {
                            var tabsBlock = serviceLocator.Get<KeeblerRecipesCategoryCardBlock.KeeblerRecipesCategoryCardBlock>(tabContainer.ContentLink);
                            var tab = new KeeblerRecipeCard();

                            tab.RecipeCardTitle = tabsBlock.CardName;
                            tab.RecipeCardDescription = tabsBlock.CardDescription;
                            tab.RecipeCardInfo = tabsBlock.RecipeTimeInfo;
                            tab.RecipeCardImage = tabsBlock.CardImage;
                            tab.RecipePage = ServiceLocator.Current.GetInstance<UrlResolver>().GetUrl(tabsBlock.RecipePage);

                            tab.WinterBool = tabsBlock.WinterBool;
                            tab.SpringBool = tabsBlock.SpringBool;
                            tab.FallBool = tabsBlock.FallBool;
                            tab.SummerBool = tabsBlock.SummerBool;
                            tab.HolidayBool = tabsBlock.HolidayBool;
                            tab.QuickEasyBool = tabsBlock.QuickEasyBool;
                            tab.PartyPleasersBool = tabsBlock.PartyPleasersBool;
                            tab.SweetSaltyBool = tabsBlock.SweetSaltyBool;
                            tab.CustomFilter1 = tabsBlock.CustomFilter1;
                            tab.CustomFilter2 = tabsBlock.CustomFilter2;
                            tab.CustomFilter3 = tabsBlock.CustomFilter3;

                            category.RecipesCard.Add(tab);
                        }
                    }

                    categoryPagesList.Add(category);
                }
            }
            catch (Exception e)
            {
                return e.Message;
            }

            return JsonConvert.SerializeObject(categoryPagesList);
        }


    }
}