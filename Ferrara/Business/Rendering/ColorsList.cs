using System.Collections.Generic;

namespace Ferrara.Business.Rendering
{
    public class ColorsList : Dictionary<string, string>
    {
        public ColorsList()
        {
            Add("#794187", "Mother's Cookies Purple");
            Add("#8cd4e3", "Famous Amos Light Blue");
            Add("#fbe4b4", "Murray Sugar Free Beige");
            Add("#18488e", "Dark Blue");
            Add("transparent", "Transparent (no color)");
        }
    }
}