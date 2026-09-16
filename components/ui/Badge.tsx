import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "wood" | "dark" | "outline";
}

export function Badge({
  children,
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variantClasses = {
    default: "bg-brand-stone text-brand-charcoal border border-brand-border",
    wood: "bg-brand-wood/10 text-brand-wood-dark border border-brand-wood/20",
    dark: "bg-brand-charcoal text-brand-cream",
    outline: "border border-brand-border text-brand-muted",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center text-[11px] font-semibold tracking-widest uppercase px-2.5 py-1",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
