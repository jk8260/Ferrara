using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using EPiServer.Shell.ObjectEditing;

namespace Ferrara.Business.EditorDescriptors
{
    public class CustomSelectionFactory<T> : ISelectionFactory
    {
        public IEnumerable<ISelectItem> GetSelections(ExtendedMetadata metadata)
        {
            var settings = Activator.CreateInstance<T>() as Dictionary<string, string>;

            if (settings == null)
            {
                yield break;
            }

            foreach (var setting in settings.ToList())
            {
                yield return new SelectItem()
                {
                    Value = setting.Key.ToLower(),
                    Text = setting.Value
                };
            }
        }
    }
}