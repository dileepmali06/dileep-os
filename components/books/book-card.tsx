"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, BookOpen } from "lucide-react";

import { getStatusMeta, spineColorFor } from "./book-meta";
import ReadingProgress from "./reading-progress";

type BookCardProps = {
  book: {
    _id: string;
    title: string;
    slug: string;
    author: string;
    status?: string;
    progress?: number;
    rating?: number;
    favorite?: boolean;
    genres?: string[];
    coverImage?: string;
  };
};

export default function BookCard({ book }: BookCardProps) {
  const status = getStatusMeta(book.status);
  const spine = spineColorFor(book._id);

  return (
    <Link href={`/books/${book.slug}`} className="group block">
      {/* 3D book object */}
      <div className="[perspective:1200px]">
        <motion.div
          whileHover={{ rotateY: -18, y: -6 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative aspect-[2/3] w-full origin-left"
        >
          {/* spine (visible as the cover rotates open) */}
          <div
            className="absolute inset-y-0 left-0 w-4 rounded-l-sm border-y-[3px] border-l-[3px] border-black"
            style={{
              background: spine,
              transform: "translateZ(-6px) rotateY(90deg)",
              transformOrigin: "left",
            }}
          />

          {/* page edges (stacked paper look) */}
          <div
            className="absolute inset-y-1 right-0 w-3 rounded-r-sm"
            style={{
              background:
                "repeating-linear-gradient(to bottom, #f5f0e6 0px, #f5f0e6 2px, #e8e1d0 2.5px)",
              transform: "translateZ(-3px)",
              boxShadow: "inset -1px 0 0 rgba(0,0,0,0.15)",
            }}
          />

          {/* front cover */}
          <div className="relative h-full w-full overflow-hidden rounded-sm border-[3px] border-black shadow-[6px_10px_16px_rgba(0,0,0,0.25)] transition-shadow duration-300 group-hover:shadow-[10px_16px_26px_rgba(0,0,0,0.35)]">
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

            {/* subtle cover sheen */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {book.favorite && (
              <span className="absolute right-3 top-0 flex h-9 w-7 items-center justify-center border-x-[3px] border-b-[3px] border-black bg-[var(--yellow)] shadow-sm">
                <Star size={12} fill="black" />
              </span>
            )}

            <span
              className="absolute bottom-2.5 left-2.5 rounded-full border-[2px] border-black px-2.5 py-0.5 text-[10px] font-bold uppercase shadow-sm"
              style={{ background: status.color }}
            >
              {status.label}
            </span>
          </div>
        </motion.div>
      </div>

      {/* details below the book */}
      <div className="mt-4 px-0.5">
        <h3 className="line-clamp-2 font-heading text-base font-black leading-tight transition-colors group-hover:text-neutral-600">
          {book.title}
        </h3>
        <p className="mt-1 truncate text-sm text-neutral-500">{book.author}</p>

        {typeof book.rating === "number" && (
          <div className="mt-2 flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={13}
                className={i < book.rating! ? "fill-[var(--yellow)] text-black" : "text-neutral-200"}
              />
            ))}
          </div>
        )}

        {book.status === "reading" && book.progress !== undefined && (
          <div className="mt-3">
            <ReadingProgress progress={book.progress} compact />
          </div>
        )}

        {book.genres && book.genres.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {book.genres.slice(0, 2).map((genre) => (
              <span
                key={genre}
                className="rounded-full border border-black/15 bg-neutral-50 px-2 py-0.5 text-[10px] font-medium text-neutral-600"
              >
                {genre}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}