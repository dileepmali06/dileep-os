import Image from "next/image";
import type { PortableTextComponents } from "@portabletext/react";

import { urlFor } from "@/sanity/lib/image";

export const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mb-4 mt-9 font-heading text-2xl font-black leading-tight sm:text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-7 font-heading text-xl font-bold">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="mb-5 leading-relaxed text-neutral-700">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 rounded-r-xl border-l-[4px] border-black bg-neutral-50 py-4 pl-6 pr-4 italic text-neutral-700">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-black">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold underline decoration-2 underline-offset-2 hover:text-neutral-500"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mb-5 space-y-2">{children}</ul>,
    number: ({ children }) => (
      <ol className="mb-5 list-decimal space-y-2 pl-5">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex gap-3 leading-relaxed text-neutral-700">
        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="leading-relaxed text-neutral-700">{children}</li>
    ),
  },
  types: {
    image: ({ value }) =>
      value?.asset ? (
        <div className="relative my-7 aspect-video overflow-hidden rounded-2xl border-[3px] border-black shadow-[6px_6px_0px_#000]">
          <Image
            src={urlFor(value).width(900).url()}
            alt={value.alt || ""}
            fill
            className="object-cover"
          />
        </div>
      ) : null,
  },
};