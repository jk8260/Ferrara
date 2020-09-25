using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ferrara.Business.Rendering.Keebler
{
    public class MAWVideoList : Dictionary<string, string>
    {
        public MAWVideoList()
        {
            Add("OnScroll", "Play Video On-Scroll");
            Add("OnLoad", "Play Video On-Page-Load");
            Add("OnHover", "Video Play Button On-Hover");
        }
    }
}