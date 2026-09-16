import { MetadataRoute } from "next";
import { siteConfig, APP_URL } from "@/lib/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Páginas estáticas
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${APP_URL}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${APP_URL}/servicios`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${APP_URL}/proyectos`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${APP_URL}/sobre-nosotros`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${APP_URL}/contacto`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${APP_URL}/aviso-legal`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${APP_URL}/privacidad`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${APP_URL}/cookies`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Páginas dinámicas de servicios
  const serviceRoutes: MetadataRoute.Sitemap = siteConfig.services.map((service) => ({
    url: `${APP_URL}/servicios/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Páginas dinámicas de proyectos
  const projectRoutes: MetadataRoute.Sitemap = siteConfig.projects.map((project) => ({
    url: `${APP_URL}/proyectos/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
