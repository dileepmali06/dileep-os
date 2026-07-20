"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Coffee, Code2, Clock3, Star, FolderTree } from "lucide-react";

import { Container } from "../ui/container";

const ORANGE = "var(--orange, #fb923c)";

type JavaSnippetHeroProps = {
  snippet: {
    title: string;
    description: string;
    category: string;
    complexity: string;
    featured?: boolean;
  };
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

export default function JavaSnippetHero({ snippet }: JavaSnippetHeroProps) {
  return (
    <section className="pb-16 pt-16 sm:pt-16">
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="overflow-hidden rounded-[28px] border-[4px] border-black bg-white shadow-[10px_10px_0px_#000]"
        >
          {/* file tab / breadcrumb bar */}
          <div className="flex flex-wrap items-center gap-3 border-b-[3px] border-black bg-neutral-50 px-5 py-3.5 sm:px-7">
            <Link
              href="/java"
              className="flex shrink-0 items-center gap-1.5 rounded-lg border-[2px] border-black bg-white px-3 py-1.5 text-sm font-bold transition hover:-translate-x-0.5"
            >
              <ArrowLeft size={15} />
              Java
            </Link>

            <span className="truncate font-mono text-xs text-neutral-400 sm:text-sm">
              java / {snippet.category} /{" "}
              <span className="text-black">{slugify(snippet.title)}.java</span>
            </span>

            {snippet.featured && (
              <span className="ml-auto flex shrink-0 items-center gap-1.5 rounded-full border-[2px] border-black bg-[var(--yellow)] px-3 py-1 text-xs font-black">
                <Star size={12} fill="black" />
                Featured
              </span>
            )}
          </div>

          {/* title + description */}
          <div className="p-6 sm:p-8 md:p-10">
            <div
              className="inline-flex items-center gap-2 rounded-full border-[2px] border-black px-3.5 py-1.5 text-xs font-black"
              style={{ background: ORANGE }}
            >
              <Coffee size={13} />
              Java Snippet
            </div>

            <h1 className="mt-5 max-w-4xl font-heading text-3xl font-black leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {snippet.title}
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              {snippet.description}
            </p>

            {/* properties strip */}
            <div className="mt-8 grid grid-cols-1 gap-4 border-t-2 border-dashed border-black/15 pt-6 sm:grid-cols-3 sm:divide-x-2 sm:divide-black/10">
              <div className="flex items-center gap-3 sm:pr-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-[2px] border-black bg-[var(--green)]">
                  <FolderTree size={17} />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">
                    Category
                  </p>
                  <p className="truncate font-heading text-lg font-black">
                    {snippet.category}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:px-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-[2px] border-black bg-[var(--blue)]">
                  <Clock3 size={17} />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">
                    Complexity
                  </p>
                  <p className="truncate font-heading text-lg font-black">
                    {snippet.complexity}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:pl-4">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-[2px] border-black"
                  style={{ background: ORANGE }}
                >
                  <Code2 size={17} />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">
                    Language
                  </p>
                  <p className="truncate font-heading text-lg font-black">Java</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}