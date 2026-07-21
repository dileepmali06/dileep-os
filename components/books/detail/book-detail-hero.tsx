"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Star, BookOpen } from "lucide-react";

import { Container } from "../../ui/container";
import { getStatusMeta, spineColorFor } from "../book-meta";
import ReadingProgress from "../reading-progress";

type BookDetailHeroProps = {
  book: {
    title: string;
    author: string;
    description?: string;
    status?: string;
    progress?: number;
    rating?: number;
    favorite?: boolean;
    genres?: string[];
    coverImage?: string;
  };
};

export default function BookDetailHero({ book }: BookDetailHeroProps) {
  const status = getStatusMeta(book.status);
  const spine = spineColorFor(book.title);

  return (
    <section className="overflow-hidden pb-16 pt-28 sm:pt-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-5xl"
        >
          <Link
            href="/books"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-black bg-white px-4 py-2 text-sm font-bold transition hover:-translate-x-0.5"
          >
            <ArrowLeft size={15} />
            Back to shelf
          </Link>

          <div className="mt-8 grid gap-12 md:grid-cols-[240px_1fr] md:items-center md:gap-14">
            {/* 3D book, always slightly open */}
            <div className="mx-auto w-40 shrink-0 md:mx-0 md:w-full">
              <div className="[perspective:1400px]">
                <motion.div
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: -22 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="relative aspect-[2/3] w-full origin-left"
                >
                  {/* spine */}
                  <div
                    className="absolute inset-y-0 left-0 w-5 rounded-l-sm border-y-[3px] border-l-[3px] border-black"
                    style={{
                      background: spine,
                      transform: "translateZ(-8px) rotateY(90deg)",
                      transformOrigin: "left",
                    }}
                  />

                  {/* page edges */}
                  <div
                    className="absolute inset-y-1 right-0 w-3.5 rounded-r-sm"
                    style={{
                      background:
                        "repeating-linear-gradient(to bottom, #f5f0e6 0px, #f5f0e6 2px, #e8e1d0 2.5px)",
                      transform: "translateZ(-4px)",
                      boxShadow: "inset -1px 0 0 rgba(0,0,0,0.15)",
                    }}
                  />

                  {/* front cover */}
                  <div className="relative h-full w-full overflow-hidden rounded-sm border-[3px] border-black shadow-[10px_16px_26px_rgba(0,0,0,0.3)]">
                    {book.coverImage ? (
                      <Image
                        src={book.coverImage}
                        alt={book.title}
                        fill
                        sizes="(max-width: 768px) 160px, 240px"
                        className="object-contain bg-white"
                      />
                    ) : (
                      <div
                        className="flex h-full flex-col items-center justify-center gap-3 p-5 text-center"
                        style={{ background: `linear-gradient(160deg, ${spine}, ${spine}99)` }}
                      >
                        <BookOpen size={34} className="text-black/50" />
                        <p className="line-clamp-4 font-heading text-sm font-black leading-tight text-black/80">
                          {book.title}
                        </p>
                      </div>
                    )}

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/20" />

                    {book.favorite && (
                      <span className="absolute right-3.5 top-0 flex h-9 w-7 items-center justify-center border-x-[3px] border-b-[3px] border-black bg-[var(--yellow)] shadow-sm">
                        <Star size={12} fill="black" />
                      </span>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* info */}
            <div className="min-w-0 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center gap-2.5 md:justify-start">
                <span
                  className="rounded-full border-[2px] border-black px-3 py-1 text-[11px] font-bold uppercase"
                  style={{ background: status.color }}
                >
                  {status.label}
                </span>
                {book.genres?.slice(0, 3).map((g) => (
                  <span
                    key={g}
                    className="rounded-full border-[2px] border-black bg-neutral-50 px-3 py-1 text-[11px] font-bold text-neutral-600"
                  >
                    {g}
                  </span>
                ))}
              </div>

              <h1 className="mt-4 font-heading text-3xl font-black leading-tight sm:text-4xl">
                {book.title}
              </h1>
              <p className="mt-1.5 text-base font-semibold text-neutral-500">by {book.author}</p>

              {typeof book.rating === "number" && (
                <div className="mt-3 flex items-center justify-center gap-1 md:justify-start">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={17}
                      className={i < book.rating! ? "fill-black text-black" : "text-neutral-200"}
                    />
                  ))}
                </div>
              )}

              {book.description && (
                <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 md:mx-0">
                  {book.description}
                </p>
              )}

              {book.status === "reading" && typeof book.progress === "number" && (
                <div className="mx-auto mt-5 max-w-sm md:mx-0">
                  <div className="mb-1.5 flex items-center justify-between text-xs font-bold text-neutral-500">
                    <span>Reading progress</span>
                    <span>{book.progress}%</span>
                  </div>
                  <ReadingProgress progress={book.progress} />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}