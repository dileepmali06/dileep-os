import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock3 } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { urlFor } from "@/sanity/lib/image";

interface Props {
  blog: any;
}

export function BlogHero({ blog }: Props) {
  return (
    <section className="section-padding">
      <Container>
        <div className="mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-sm text-neutral-500 transition-colors hover:text-black"
          >
            <ArrowLeft size={15} />
            Back to articles
          </Link>

          {blog.category && (
            <div className="mt-6">
              <Badge>{blog.category}</Badge>
            </div>
          )}

          <h1 className="mt-6 font-heading text-4xl font-black leading-tight sm:text-5xl">
            {blog.title}
          </h1>

          <p className="mt-6 text-lg text-neutral-600 sm:text-xl">
            {blog.excerpt}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {blog.publishedAt && (
              <div className="flex items-center gap-2.5 rounded-xl border-[2px] border-black bg-white px-4 py-2.5 shadow-[3px_3px_0px_#000]">
                <div className="flex h-7 w-7 items-center justify-center rounded-md border-[2px] border-black bg-[var(--yellow)]">
                  <Calendar size={13} />
                </div>
                <span className="text-sm font-semibold">
                  {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            )}

            {blog.readingTime && (
              <div className="flex items-center gap-2.5 rounded-xl border-[2px] border-black bg-white px-4 py-2.5 shadow-[3px_3px_0px_#000]">
                <div className="flex h-7 w-7 items-center justify-center rounded-md border-[2px] border-black bg-[var(--pink)]">
                  <Clock3 size={13} />
                </div>
                <span className="text-sm font-semibold">
                  {blog.readingTime} min read
                </span>
              </div>
            )}
          </div>

          {blog.coverImage && (
            <div className="relative mt-10 aspect-video overflow-hidden rounded-[24px] border-[4px] border-black shadow-[8px_8px_0px_#000]">
              <Image
                src={urlFor(blog.coverImage).width(1200).height(675).url()}
                alt={blog.title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}