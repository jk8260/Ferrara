using System.Collections.Generic;

namespace Ferrara.Business.Rendering
{
    public class MAWRightLeftClassList : Dictionary<string, string>
    {
        public MAWRightLeftClassList()
        {
            Add("right-oriented-section", "Main Content Block - Image Right Oriented");
            Add("left-oriented-section", "Main Content Block - Image Left Oriented");
        }
    }
}