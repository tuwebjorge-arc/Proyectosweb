import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        isCenter ? "text-center mx-auto max-w-3xl" : "max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "flex items-center gap-2 mb-3 text-xs font-semibold tracking-widest uppercase",
            isCenter && "justify-center",
            isDark ? "text-brand-wood-light" : "text-brand-wood"
          )}
        >
          <span className="w-5 h-[1.5px] bg-current" />
          <span>{eyebrow}</span>
          {isCenter && <span className="w-5 h-[1.5px] bg-current" />}
        </div>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.15]",
          isDark ? "text-brand-cream" : "text-brand-charcoal"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg font-normal leading-relaxed",
            isDark ? "text-stone-300" : "text-stone-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
