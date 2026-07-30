import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-4 md:space-y-5",
        align === "center" && "text-center",
        className
      )}
    >
      {/* 1. EYEBROW (Button Badge) */}
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center rounded-full border-[2.5px] md:border-[3px] border-black bg-(--yellow) px-4 py-1.5 md:py-2",
            "font-heading text-xs md:text-sm font-bold uppercase tracking-wider select-none"
          )}
        >
          {eyebrow}
        </div>
      )}

      {/* 2. TITLE (Main Heading) */}
      <h2
        className={cn(
          "font-heading font-black leading-tight tracking-tight text-neutral-900",
          "text-3xl sm:text-4xl lg:text-5xl"
        )}
      >
        {title}
      </h2>

      {/* 3. DESCRIPTION (Subtext) */}
      {description && (
        <p
          className={cn(
            "text-neutral-600 font-normal leading-relaxed max-w-2xl",
            "text-base md:text-lg whitespace-pre-line",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
