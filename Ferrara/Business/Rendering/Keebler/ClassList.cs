using System.Collections.Generic;

namespace Ferrara.Business.Rendering
{
    public class ClassList : Dictionary<string, string>
    {
        public ClassList()
        {
            Add("left-oriented-section", "Start Page Block - Image Left Oriented");
            Add("right-oriented-section", "Start Page Block - Image Right Oriented");
        }
    }
}