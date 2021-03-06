﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Web;
using System.Web.Http;

namespace Ferrara
{
    public class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.MapHttpAttributeRoutes();
            config.Formatters.JsonFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/html"));
            System.Diagnostics.Debug.WriteLine("config.Routes");
            System.Diagnostics.Debug.WriteLine(config.Routes.VirtualPathRoot);
            System.Diagnostics.Debug.WriteLine(config.Routes.Count);
        }
    }
}