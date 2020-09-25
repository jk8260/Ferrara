using System.Collections.Generic;

namespace Ferrara.Business.Rendering
{
    public class BrandsCodesList : Dictionary<string, string>
    {
        public BrandsCodesList()
        {
            Add("murraySugarFree", "Murray Sugar Free");
            Add("murrayFood", "Murray Food");
            Add("mothersCookies", "Mother's Cookies");
            Add("famousAmosSite", "Famous Amos");
            Add("keebler", "Keebler");

        }
    }
}