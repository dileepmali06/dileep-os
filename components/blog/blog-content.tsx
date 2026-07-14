import Image from "next/image";
import { PortableText, type PortableTextComponents } from "@portabletext/react";

import { Container } from "@/components/ui/container";
import { urlFor } from "@/sanity/lib/image";

interface Props {
  blog: any;
}

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="mb-5 mt-12 font-heading text-3xl font-black leading-tight sm:text-4xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 mt-10 font-heading text-2xl font-black leading-tight sm:text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-8 font-heading text-xl font-bold leading-tight sm:text-2xl">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mb-3 mt-6 font-heading text-lg font-bold">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="mb-5 leading-relaxed text-neutral-700 sm:text-lg">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-7 rounded-r-xl border-l-[4px] border-black bg-neutral-50 py-4 pl-6 pr-4 text-lg italic text-neutral-700">
        {children}
      </blockquote>
    ),
  },

  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-black">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="rounded-md border border-black/15 bg-neutral-100 px-1.5 py-0.5 font-mono text-[0.9em]">
        {children}
      </code>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold underline decoration-2 underline-offset-2 transition-colors hover:text-neutral-500"
      >
        {children}
      </a>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="mb-5 space-y-2.5">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-5 list-decimal space-y-2.5 pl-5">{children}</ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => (
      <li className="flex gap-3 leading-relaxed text-neutral-700 sm:text-lg">
        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="leading-relaxed text-neutral-700 sm:text-lg">
        {children}
      </li>
    ),
  },

  types: {
    image: ({ value }) =>
      value?.asset ? (
        <div className="relative my-8 aspect-video overflow-hidden rounded-2xl border-[3px] border-black shadow-[6px_6px_0px_#000]">
          <Image
            src={urlFor(value).width(1000).url()}
            alt={value.alt || ""}
            fill
            sizes="(max-width: 768px) 100vw, 700px"
            className="object-cover"
          />
        </div>
      ) : null,

    code: ({ value }) => (
      <pre className="my-7 overflow-x-auto rounded-xl border-[3px] border-black bg-neutral-900 p-5 font-mono text-sm leading-relaxed text-white">
        <code>{value?.code}</code>
      </pre>
    ),
  },
};

export function BlogContent({ blog }: Props) {
  if (!blog.content) return null;

  return (
    <section className="pb-24">
      <Container>
        <article className="mx-auto max-w-3xl">
          <PortableText value={blog.content} components={components} />
        </article>
      </Container>
    </section>
  );
}