import { MetadataRoute } from "next";
import { siteConfig, APP_URL } from "@/lib/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/servicios",
    "/proyectos",
    "/sobre-nosotros",
    "/contacto",
    "/aviso-legal",
    "/privacidad",
    "/cookies",
  ].map((route) => ({
    url: `${APP_URL}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const servicesRoutes = siteConfig.services.map((service) => ({
    url: `${APP_URL}/servicios/${service.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...servicesRoutes];
}
