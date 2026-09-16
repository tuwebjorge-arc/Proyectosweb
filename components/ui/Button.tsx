import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none rounded-none tracking-wide text-center";

  const variantClasses = {
    primary:
      "bg-brand-wood text-white hover:bg-brand-wood-dark focus-visible:outline-brand-wood shadow-sm active:scale-[0.99]",
    secondary:
      "bg-brand-stone text-brand-charcoal hover:bg-brand-sand border border-brand-border focus-visible:outline-brand-charcoal",
    outline:
      "border border-brand-charcoal/30 text-brand-charcoal hover:bg-brand-charcoal hover:text-white focus-visible:outline-brand-charcoal",
    dark:
      "bg-brand-charcoal text-brand-cream hover:bg-brand-dark focus-visible:outline-white",
    ghost:
      "text-brand-charcoal hover:bg-brand-stone/80 focus-visible:outline-brand-charcoal",
  };

  const sizeClasses = {
    sm: "text-xs px-3.5 py-2 uppercase tracking-wider",
    md: "text-sm px-5 py-3 uppercase tracking-wider",
    lg: "text-sm md:text-base px-7 py-3.5 uppercase tracking-wider",
  };

  const combinedClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
