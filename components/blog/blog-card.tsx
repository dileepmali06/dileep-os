import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock3,
  ArrowUpRight,
  FileText,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { urlFor } from "@/sanity/lib/image";

interface Blog {
  _id: string;
  title: string;
  excerpt: string;
  slug: {
    current: string;
  };
  coverImage?: any;
  category?: string;
  tags?: string[];
  publishedAt?: string;
  readingTime?: number;
  featured?: boolean;
}

interface BlogCardProps {
  blog: Blog;
}

const fallbackColors = [
  "var(--yellow)",
  "var(--blue)",
  "var(--green)",
  "var(--pink)",
  "var(--orange)",
];

export function BlogCard({
  blog,
}: BlogCardProps) {
  const imageUrl = blog.coverImage
    ? urlFor(blog.coverImage)
        .width(800)
        .height(450)
        .fit("crop")
        .url()
    : null;

  const fallbackColor =
    fallbackColors[
      blog.title.length %
        fallbackColors.length
    ];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border-[3px] border-black bg-white shadow-[8px_8px_0px_#000] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_#000]">
      <Link
        href={`/blog/${blog.slug.current}`}
        className="block"
      >
        <div className="relative aspect-[16/9] overflow-hidden border-b-[3px] border-black bg-neutral-100">

          {/* Image */}
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={blog.title}
              fill
              sizes="(max-width:768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div
              className="flex h-full w-full flex-col items-center justify-center p-6 text-center"
              style={{
                background:
                  fallbackColor,
              }}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-[3px] border-black bg-white shadow-[4px_4px_0px_#000]">
                <FileText
                  size={30}
                />
              </div>

              <h3 className="mt-4 line-clamp-2 max-w-[260px] font-heading text-xl font-black leading-tight text-black">
                {blog.title}
              </h3>

              <p className="mt-2 text-sm font-medium text-black/70">
                {blog.category ||
                  "Article"}
              </p>
            </div>
          )}

          {/* Top Meta */}
          <div className="absolute left-3 top-3 flex flex-wrap gap-2">
            {blog.category && (
              <span className="rounded-full border-[2px] border-black bg-white px-3 py-1 text-xs font-bold shadow-[2px_2px_0px_#000]">
                {blog.category}
              </span>
            )}

            {blog.featured && (
              <span className="rounded-full border-[2px] border-black bg-[var(--yellow)] px-3 py-1 text-xs font-bold shadow-[2px_2px_0px_#000]">
                Featured
              </span>
            )}
          </div>

          {/* Reading Time */}
          {blog.readingTime && (
            <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full border-[2px] border-black bg-white px-2.5 py-1 text-xs font-semibold shadow-[2px_2px_0px_#000]">
              <Clock3 size={12} />
              {blog.readingTime} min
            </span>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <Link
          href={`/blog/${blog.slug.current}`}
        >
          <h2 className="font-heading text-xl font-black leading-tight transition-colors duration-200 group-hover:text-neutral-600 sm:text-2xl">
            {blog.title}
          </h2>
        </Link>

        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-neutral-600 sm:text-base">
          {blog.excerpt}
        </p>

        {/* Tags */}
        {blog.tags &&
          blog.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {blog.tags
                .slice(0, 3)
                .map(
                  (
                    tag,
                    index
                  ) => {
                    const variants = [
                      undefined,
                      "secondary",
                      "success",
                      "danger",
                    ];

                    return (
                      <Badge
                        key={tag}
                        variant={
                          variants[
                            index %
                              variants.length
                          ] as any
                        }
                      >
                        {tag}
                      </Badge>
                    );
                  }
                )}
            </div>
          )}

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between border-t-[2px] border-black/10 pt-4">
          {blog.publishedAt ? (
            <span className="flex items-center gap-1.5 text-xs text-neutral-500 sm:text-sm">
              <Calendar
                size={14}
              />

              {new Date(
                blog.publishedAt
              ).toLocaleDateString(
                "en-US",
                {
                  month:
                    "short",
                  year:
                    "numeric",
                }
              )}
            </span>
          ) : (
            <span />
          )}

          <Link
            href={`/blog/${blog.slug.current}`}
            className="group/link flex items-center gap-1 text-sm font-semibold"
          >
            Read Article

            <ArrowUpRight
              size={15}
              className="transition-transform duration-200 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}