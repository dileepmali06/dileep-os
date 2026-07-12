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
        "space-y-4",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center rounded-full border-[3px] border-black bg-[var(--yellow)] px-4 py-2",
            "font-heading text-sm font-bold uppercase tracking-wider"
          )}
        >
          {eyebrow}
        </div>
      )}

      <h2
        className={cn(
          "font-heading text-4xl font-black leading-none tracking-tight",
          "sm:text-5xl lg:text-6xl"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "max-w-2xl text-lg leading-relaxed text-neutral-600",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}