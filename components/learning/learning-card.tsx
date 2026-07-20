"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";

import { getCategoryMeta, difficultyStyles } from "./learning-meta";

type LearningCardProps = {
  log: {
    _id: string;
    title: string;
    slug: string;
    date: string;
    category: string;
    summary?: string;
    difficulty?: string;
    favorite?: boolean;
  };
};

export default function LearningCard({ log }: LearningCardProps) {
  const meta = getCategoryMeta(log.category);
  const Icon = meta.icon;
  const date = new Date(log.date);
  const day = date.toLocaleDateString("en-US", { day: "2-digit" });
  const weekday = date.toLocaleDateString("en-US", { weekday: "short" });

  return (
    <motion.article whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="h-full">
      <Link
        href={`/learning/${log.slug}`}
        className="group flex h-full gap-4 rounded-2xl border-[3px] border-black bg-white p-4 shadow-[5px_5px_0px_#000] transition-all hover:shadow-[8px_8px_0px_#000]"
      >
        {/* calendar-day badge */}
        <div
          className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl border-[3px] border-black"
          style={{ background: meta.color }}
        >
          <span className="font-heading text-2xl font-black leading-none">{day}</span>
          <span className="mt-0.5 text-[9px] font-bold uppercase tracking-wide">{weekday}</span>
        </div>

        {/* content */}
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-center justify-between gap-2">
            <span className="flex items-center gap-1.5 truncate text-[11px] font-bold uppercase tracking-wide text-neutral-500">
              <Icon size={12} />
              {meta.label}
            </span>
            {log.favorite && <Star size={13} fill="black" className="shrink-0" />}
          </div>

          <h3 className="mt-1.5 line-clamp-2 font-heading text-[15px] font-black leading-snug">
            {log.title}
          </h3>

          {log.summary && (
            <p className="mt-1 line-clamp-2 flex-1 text-xs leading-relaxed text-neutral-500">
              {log.summary}
            </p>
          )}

          <div className="mt-2 flex items-center justify-between">
            {log.difficulty ? (
              <span
                className={`rounded-full border-[1.5px] border-black px-2 py-0.5 text-[9px] font-bold uppercase ${
                  difficultyStyles[log.difficulty] ?? "bg-neutral-200"
                }`}
              >
                {log.difficulty}
              </span>
            ) : (
              <span />
            )}
            <ArrowUpRight
              size={14}
              className="shrink-0 text-neutral-300 transition-all group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}