using System;
using System.Web.Http;
using System.Net.Http;

namespace Ferrara.Sites.Keebler.KeeblerMakeAWishSocialMediaBlock
{
    public class KeeblerMakeAWishSocialMediaApiController : ApiController
    {
        static readonly HttpClient client = new HttpClient();

        [HttpGet]
        [Route("KeeblerInstagramApi/")]
        public async System.Threading.Tasks.Task<string> InstagramApiAsync()
        {
            try
            {
                HttpResponseMessage response = await client.GetAsync("https://api.instagram.com/v1/users/self/media/recent/?access_token=3009699235.1677ed0.ef114fe837e64399be0ef7013c36b02b&count=8");
                response.EnsureSuccessStatusCode();
                string responseBody = await response.Content.ReadAsStringAsync();

                return responseBody.ToString();
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }
        
        [HttpGet]
        [Route("KeeblerFacebookApi/")]
        public string FacebookApi()
        {
            return "Facebook .Net EndPoint Test is Working";
        }
    }
}