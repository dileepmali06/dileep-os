"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock3, Tag, Star } from "lucide-react";

const ORANGE = "var(--orange, #fb923c)";

type JavaCardProps = {
  snippet: {
    _id: string;
    title: string;
    slug: string;
    category: string;
    description: string;
    complexity: string;
    tags?: string[];
    featured?: boolean;
  };
  rotation?: string;
};

const categoryColors: Record<string, string> = {
  arrays: "var(--yellow)",
  strings: "var(--green)",
  hashmap: "var(--blue)",
  trees: "var(--pink)",
  graphs: "var(--yellow)",
  dp: "var(--green)",
  collections: "var(--orange, #fb923c)",
  oop: "var(--blue)",
  streams: "var(--pink)",
  springboot: "var(--green)",
};

function colorForCategory(category: string) {
  const key = category?.toLowerCase().replace(/\s+/g, "");
  return categoryColors[key] ?? ORANGE;
}

export default function JavaCard({ snippet, rotation = "" }: JavaCardProps) {
  const cornerColor = colorForCategory(snippet.category);
  const ghostLetter = snippet.category?.charAt(0)?.toUpperCase() ?? "J";

  return (
    <motion.article
      whileHover={{ y: -6, rotate: 0 }}
      transition={{ duration: 0.2 }}
      className={`group h-full ${rotation}`}
    >
      <Link
        href={`/java/${snippet.slug}`}
        className="relative flex h-full flex-col overflow-hidden rounded-[20px] border-[3px] border-black bg-white shadow-[7px_7px_0px_#000] transition-shadow hover:shadow-[10px_10px_0px_#000]"
      >
        {/* ghost watermark letter */}
        <span className="pointer-events-none absolute -right-3 -top-6 select-none font-heading text-[130px] font-black leading-none text-black/[0.035]">
          {ghostLetter}
        </span>

        {/* folded corner */}
        <div
          className="absolute right-0 top-0 h-0 w-0 border-b-[34px] border-l-[34px] border-b-transparent"
          style={{ borderLeftColor: cornerColor }}
        />
        <div
          className="absolute right-0 top-0 h-0 w-0 border-b-[34px] border-l-[34px] border-b-transparent opacity-40"
          style={{ borderLeftColor: "#000" }}
        />

        <div className="relative flex flex-1 flex-col p-6">
          <div className="flex items-center justify-between gap-3">
            <span
              className="rounded-full border-[2px] border-black px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wide"
              style={{ background: cornerColor }}
            >
              {snippet.category}
            </span>

            {snippet.featured && (
              <Star size={16} className="shrink-0 fill-[var(--yellow)] text-black" />
            )}
          </div>

          <h3 className="mt-4 line-clamp-2 font-heading text-xl font-black leading-tight">
            {snippet.title}
          </h3>

          <p className="mt-2.5 line-clamp-2 flex-1 text-sm leading-relaxed text-neutral-600">
            {snippet.description}
          </p>

          {!!snippet.tags?.length && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {snippet.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 rounded-md border border-black/15 bg-neutral-50 px-2 py-0.5 text-[11px] font-medium text-neutral-600"
                >
                  <Tag size={10} />
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-5 flex items-center justify-between border-t-[2px] border-dashed border-black/15 pt-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-500">
              <Clock3 size={13} />
              {snippet.complexity}
            </span>

            <div className="flex h-8 w-8 items-center justify-center rounded-lg border-[2px] border-black bg-black text-white transition-transform group-hover:rotate-45">
              <ArrowUpRight size={14} />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}