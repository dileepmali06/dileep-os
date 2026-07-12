import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  [
    "inline-flex items-center justify-center",
    "font-heading font-semibold",
    "border-[2px] border-black",
    "rounded-full",
    "leading-none",
    "whitespace-nowrap",
    "transition-all duration-150",
    "select-none",
  ],
  {
    variants: {
      variant: {
        default:
          "bg-[var(--yellow)] text-black",

        secondary:
          "bg-[var(--blue)] text-black",

        success:
          "bg-[var(--green)] text-black",

        danger:
          "bg-[var(--pink)] text-black",

        outline:
          "bg-white text-black",

        dark:
          "bg-black text-white border-black",
      },

      size: {
        sm: "h-7 px-3 text-xs",
        md: "h-8 px-4 text-sm",
        lg: "h-10 px-5 text-base",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({
  className,
  variant,
  size,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        badgeVariants({
          variant,
          size,
        }),
        className
      )}
      {...props}
    />
  );
}

export { Badge, badgeVariants };