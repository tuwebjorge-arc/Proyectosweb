"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxModalProps {
  isOpen: boolean;
  images: { url: string; alt: string; caption?: string }[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export function LightboxModal({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxModalProps) {
  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    } else {
      onNavigate(images.length - 1);
    }
  }, [currentIndex, images.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex < images.length - 1) {
      onNavigate(currentIndex + 1);
    } else {
      onNavigate(0);
    }
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Visualizador de imágenes"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-200"
    >
      {/* Botón cerrar */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition-colors cursor-pointer focus-visible:outline-white"
        aria-label="Cerrar visualizador"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navegación anterior */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-4 sm:left-6 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition-colors cursor-pointer focus-visible:outline-white"
          aria-label="Fotografía anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Contenedor de la imagen */}
      <div className="relative w-full max-w-5xl h-[70vh] sm:h-[80vh] flex flex-col items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src={currentImage.url}
            alt={currentImage.alt || "Imagen del proyecto"}
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-contain"
            priority
          />
        </div>

        {/* Pie de foto y contador */}
        <div className="mt-4 text-center text-white max-w-xl">
          {currentImage.caption && (
            <p className="text-sm font-light text-stone-300">
              {currentImage.caption}
            </p>
          )}
          {images.length > 1 && (
            <p className="text-xs text-stone-400 tracking-widest mt-1 uppercase">
              {currentIndex + 1} / {images.length}
            </p>
          )}
        </div>
      </div>

      {/* Navegación siguiente */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={handleNext}
          className="absolute right-4 sm:right-6 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition-colors cursor-pointer focus-visible:outline-white"
          aria-label="Fotografía siguiente"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
