using System.Collections.Generic;

namespace Ferrara.Business.Rendering
{
    public class MAWTopBottomNoneClassList : Dictionary<string, string>
    {
        public MAWTopBottomNoneClassList()
        {
            Add("top-oriented-section", "Main Content Block - Image Top Oriented");
            Add("bottom-oriented-section", "Main Content Block - Image Bottom Oriented");
            Add("no-image-oriented-section", "Main Content Block - No image");
        }
    }
}