using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ferrara.Business.Rendering.Keebler
{
    public class MAWSocialMediaList : Dictionary<string, string>
    {
        public MAWSocialMediaList()
        {
            Add("Instagram", "Instagram");
            Add("Facebook", "Facebook");
        }
    }
}