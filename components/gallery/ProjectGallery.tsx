"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project, ProjectCategory } from "@/types";
import { siteConfig } from "@/lib/config/site";
import { Badge } from "@/components/ui/Badge";
import { LightboxModal } from "@/components/gallery/LightboxModal";
import { Eye, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectGalleryProps {
  projects?: Project[];
  initialCategory?: ProjectCategory;
  showFilters?: boolean;
}

export function ProjectGallery({
  projects = siteConfig.projects,
  initialCategory = "todos",
  showFilters = true,
}: ProjectGalleryProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>(initialCategory);

  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    images: { url: string; alt: string; caption?: string }[];
    index: number;
  }>({
    isOpen: false,
    images: [],
    index: 0,
  });

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "todos") {
      return projects;
    }
    return projects.filter((p) => p.category === selectedCategory);
  }, [projects, selectedCategory]);

  const openLightbox = (project: Project) => {
    const images = project.gallery.length > 0
      ? project.gallery
      : [{ url: project.coverImage, alt: project.title, caption: project.description }];

    setLightboxState({
      isOpen: true,
      images,
      index: 0,
    });
  };

  return (
    <div className="space-y-10">
      {/* Filtros de Categorías */}
      {showFilters && (
        <div className="flex flex-wrap items-center gap-2 pb-2">
          {siteConfig.projectCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  "px-4 py-2 text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer focus-visible:outline-brand-wood",
                  isSelected
                    ? "bg-brand-charcoal text-white font-medium shadow-xs"
                    : "bg-brand-stone text-brand-charcoal/80 hover:bg-brand-sand border border-brand-border/60"
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Grid de Proyectos */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 bg-brand-stone border border-brand-border p-8">
          <p className="text-brand-muted text-sm">
            Actualmente no hay proyectos disponibles en esta categoría.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group relative flex flex-col bg-white border border-brand-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-brand-wood/40"
            >
              {/* Contenedor de la Imagen */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-200">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Overlay con botones de acción */}
                <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                  <button
                    type="button"
                    onClick={() => openLightbox(project)}
                    className="p-3 bg-white text-brand-charcoal hover:bg-brand-cream transition-colors cursor-pointer shadow-md focus-visible:outline-white"
                    aria-label={`Ver galería ampliada de ${project.title}`}
                  >
                    <Eye className="w-5 h-5" />
                  </button>

                  <Link
                    href={`/proyectos/${project.slug}`}
                    className="p-3 bg-brand-wood text-white hover:bg-brand-wood-dark transition-colors shadow-md focus-visible:outline-white"
                    aria-label={`Ver detalles del proyecto ${project.title}`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>

                {/* Badge de Categoría */}
                <div className="absolute top-4 left-4 pointer-events-none">
                  <Badge variant="dark">{project.categoryLabel}</Badge>
                </div>
              </div>

              {/* Contenido del Proyecto */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-light text-brand-charcoal tracking-tight group-hover:text-brand-wood transition-colors">
                    <Link
                      href={`/proyectos/${project.slug}`}
                      className="focus-visible:outline-brand-wood"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-stone-600 font-light line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-border/60 flex items-center justify-between">
                  <span className="text-xs text-brand-muted tracking-wider uppercase">
                    {project.materials?.[0] || "Solución a medida"}
                  </span>
                  <Link
                    href={`/proyectos/${project.slug}`}
                    className="text-xs uppercase tracking-wider text-brand-wood hover:text-brand-wood-dark font-medium inline-flex items-center gap-1 group/link"
                  >
                    <span>Ver proyecto</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Modal Lightbox */}
      <LightboxModal
        isOpen={lightboxState.isOpen}
        images={lightboxState.images}
        currentIndex={lightboxState.index}
        onClose={() => setLightboxState((prev) => ({ ...prev, isOpen: false }))}
        onNavigate={(newIndex) =>
          setLightboxState((prev) => ({ ...prev, index: newIndex }))
        }
      />
    </div>
  );
}
