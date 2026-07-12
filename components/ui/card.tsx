import * as React from "react";

import { cn } from "@/lib/utils";

function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        [
          "bg-white",
          "border-[3px] border-black",
          "rounded-[24px]",
          "shadow-[6px_6px_0px_#000]",
          "transition-all duration-150 ease-out",
          "overflow-hidden",
        ],
        className
      )}
      {...props}
    />
  );
}

function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        [
          "flex flex-col",
          "gap-3",
          "p-6",
          "pb-5",
        ],
        className
      )}
      {...props}
    />
  );
}

function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        [
          "font-heading",
          "text-3xl",
          "font-bold",
          "leading-tight",
          "tracking-tight",
          "text-black",
        ],
        className
      )}
      {...props}
    />
  );
}

function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        [
          "text-base",
          "leading-relaxed",
          "text-neutral-600",
        ],
        className
      )}
      {...props}
    />
  );
}

function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        [
          "px-6",
          "pb-5",
        ],
        className
      )}
      {...props}
    />
  );
}

function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        [
          "px-6",
          "pb-6",
          "pt-2",
          "flex",
          "flex-wrap",
          "items-center",
          "gap-3",
        ],
        className
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};