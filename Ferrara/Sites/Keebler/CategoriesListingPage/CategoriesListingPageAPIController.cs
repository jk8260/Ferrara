using EPiServer;
using EPiServer.Core;
using EPiServer.ServiceLocation;
using Ferrara.Business;
using Ferrara.Models;
using Ferrara.Models.keebler;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Ferrara.Sites.Keebler.CategoriesListingPage
{
    public class CategoriesListingPageAPIController : ApiController
    {
        private Injected<IContentLoader> _contentLoader { get; set; }



        [HttpGet]
        [Route("CategoriesListingPage/{id:int}")]
        // GET api/<controller>
        public string Get(int id)
        {
            IList<KeeblerCategory> categoryPagesList = new List<KeeblerCategory>();

            try
            {
                var serviceLocator = ServiceLocator.Current.GetInstance<IContentLoader>();
                // this will return a List<CategoryPage.CategoryPage> for this id
                var results = _contentLoader.Service.GetChildren<CategoryPage.CategoryPage>(new ContentReference(id)).FilterForDisplay().ToList();

                foreach (var categoryPage in results)
                {
                    var category = new KeeblerCategory();
                    category.CategoryTabBlock = new List<KeeblerCategoryTab>();
                    category.CategoryTitle = categoryPage.CategoryTitle;

                    //Importing Images Files
                    category.CategoryImage = categoryPage.CategoryImage;

                    if (categoryPage.TabsContainer != null)
                    {
                        foreach (var tabContainer in categoryPage.TabsContainer.Items)
                        {
                            var tabsBlock = serviceLocator.Get<CategoryTabBlock.CategoryTabBlock>(tabContainer.ContentLink);
                            var tab = new KeeblerCategoryTab();

                            tab.TabTitle = tabsBlock.TabTitle;

                            if (tabsBlock.IconsContainer != null)
                            {
                                tab.ProductsIcons = new List<keeblerProductIcon>();

                                foreach (var iconBlock in tabsBlock.IconsContainer.Items)
                                {
                                    var icon = serviceLocator.Get<ProductIconBlock.ProductIconBlock>(iconBlock.ContentLink);

                                    if(icon != null)
                                    {
                                        tab.ProductsIcons.Add(new keeblerProductIcon()
                                        {
                                            ProductName = icon.ProductName,
                                            ProductPageId = icon.ProductPage != null ? icon.ProductPage.ID : 0,
                                            UrlPath = "blabla/bla/bla/" //icon.UrlPath
                                        }); ; 
                                    }
                                }
                            }
                            else
                            {
                                tab.ProductsIcons = new List<keeblerProductIcon>();
                            }

                            category.CategoryTabBlock.Add(tab);
                        }
                    }

                    categoryPagesList.Add(category);
                }

            }
            catch (Exception e)
            {
                return e.Message;
            }

            //System.IO.File.WriteAllText(@"c:\temp\dumpResults.json", JsonConvert.SerializeObject(categoryPagesList));

            // LETS READ AND USE THIS JSON WITH FOUR MAIN NODES STARTING WITH "Features' with Ernie's face
            // TODO : Add Ernie's Favorites to the result set from EpiServer
            if (System.IO.File.Exists(AppDomain.CurrentDomain.BaseDirectory + "\\bin\\mockResults.json"))
            {
                return System.IO.File.ReadAllText(AppDomain.CurrentDomain.BaseDirectory + "\\bin\\mockResults.json");
            }
            else if (System.IO.File.Exists(AppDomain.CurrentDomain.BaseDirectory + "\\bin\\mockManyResults.json"))
            {
                return System.IO.File.ReadAllText(AppDomain.CurrentDomain.BaseDirectory + "\\bin\\mockManyResults.json");
            }
            else
                return JsonConvert.SerializeObject(categoryPagesList);
        }


    }
}