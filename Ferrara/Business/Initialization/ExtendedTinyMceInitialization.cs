using EPiServer.Cms.TinyMce.Core;
using EPiServer.Framework;
using EPiServer.Framework.Initialization;
using EPiServer.ServiceLocation;
using Ferrara.Models;

namespace Ferrara.Business.Initialization
{
    [ModuleDependency(typeof(TinyMceInitialization))]
    public class ExtendedTinyMceInitialization : IConfigurableModule
    {
        public void Initialize(InitializationEngine context)
        {
        }

        public void Uninitialize(InitializationEngine context)
        {
        }

        public void ConfigureContainer(ServiceConfigurationContext context)
        {
            context.Services.Configure<TinyMceConfiguration>(config =>
            {
                // Add content CSS to the default settings.
                config.Default()                   
                .AddPlugin("code colorpicker textpattern textcolor")
                 .Toolbar("formatselect styleselect | bold italic forecolor backcolor | epi -link image epi-image-editor epi-personalized-content | bullist numlist outdent indent | code searchreplace fullscreen | colorpicker textpattern textcolor | help")
                .ContentCss("/static/css/editor.css");

                // Passing a second argument to For<> will clone the given settings object
                // instead of the default one and extend it with some basic toolbar commands.
                config.For<EditorialBlock>(t => t.MainBody, config.Empty())
                    .AddEpiserverSupport()
                    .DisableMenubar()
                    .Toolbar("bold italic underline strikethrough");
                    
            });
        }
    }
}
