using System.Collections.Generic;

namespace Ferrara.Business.Rendering
{
    public class ImageOrSprite : Dictionary<string, string>
    {
        public ImageOrSprite()
        {
            Add("Sprite", "Animation Sprite");
            Add("Image", "Static Image");
        }
    }
}