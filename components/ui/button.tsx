import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center whitespace-nowrap",
    "font-heading font-bold leading-[1.2] tracking-tight",
    "border-[3px] border-black",
    "transition-all duration-150 ease-out",
    "select-none shrink-0",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:translate-x-[3px] active:translate-y-[3px]",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-[var(--yellow)]",
          "text-black",
          "shadow-[5px_5px_0px_#000]",
          "hover:-translate-x-1",
          "hover:-translate-y-1",
          "hover:shadow-[8px_8px_0px_#000]",
        ],

        secondary: [
          "bg-[var(--blue)]",
          "text-black",
          "shadow-[5px_5px_0px_#000]",
          "hover:-translate-x-1",
          "hover:-translate-y-1",
          "hover:shadow-[8px_8px_0px_#000]",
        ],

        success: [
          "bg-[var(--green)]",
          "text-black",
          "shadow-[5px_5px_0px_#000]",
          "hover:-translate-x-1",
          "hover:-translate-y-1",
          "hover:shadow-[8px_8px_0px_#000]",
        ],

        danger: [
          "bg-[var(--pink)]",
          "text-black",
          "shadow-[5px_5px_0px_#000]",
          "hover:-translate-x-1",
          "hover:-translate-y-1",
          "hover:shadow-[8px_8px_0px_#000]",
        ],

        outline: [
          "bg-white",
          "text-black",
          "shadow-[5px_5px_0px_#000]",
          "hover:-translate-x-1",
          "hover:-translate-y-1",
          "hover:shadow-[8px_8px_0px_#000]",
        ],

        ghost: [
          "bg-transparent",
          "text-black",
          "border-transparent",
          "shadow-none",
          "hover:bg-black",
          "hover:text-white",
        ],
      },

      size: {
        sm: "h-11 px-7 text-sm rounded-xl",

        md: "h-12 px-9 text-base rounded-2xl",

        lg: "h-14 px-11 text-lg rounded-2xl",

        xl: "h-16 px-14 text-xl rounded-3xl",

        icon: "h-12 w-12 rounded-2xl p-0",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "font-heading",
          buttonVariants({
            variant,
            size,
          }),
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };