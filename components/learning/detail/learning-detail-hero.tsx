"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Star, CalendarDays } from "lucide-react";

import { Container } from "../../ui/container";
import { getCategoryMeta, difficultyStyles } from "../learning-meta";

type LearningDetailHeroProps = {
  log: {
    title: string;
    date: string;
    category: string;
    difficulty?: string;
    favorite?: boolean;
  };
};

export default function LearningDetailHero({ log }: LearningDetailHeroProps) {
  const meta = getCategoryMeta(log.category);
  const Icon = meta.icon;

  return (
    <section className="pb-12 pt-20 sm:pt-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl"
        >
          <Link
            href="/learning"
            className="inline-flex items-center gap-2 rounded-xl border-[2px] border-black bg-white px-4 py-2 text-sm font-bold transition hover:-translate-x-0.5"
          >
            <ArrowLeft size={15} />
            Back to log
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span
              className="flex items-center gap-1.5 rounded-full border-[2px] border-black px-3.5 py-1.5 text-xs font-bold uppercase"
              style={{ background: meta.color }}
            >
              <Icon size={13} />
              {meta.label}
            </span>

            {log.difficulty && (
              <span
                className={`rounded-full border-[2px] border-black px-3.5 py-1.5 text-xs font-bold uppercase ${
                  difficultyStyles[log.difficulty] ?? "bg-neutral-200"
                }`}
              >
                {log.difficulty}
              </span>
            )}

            {log.favorite && (
              <span className="flex items-center gap-1.5 rounded-full border-[2px] border-black bg-[var(--yellow)] px-3.5 py-1.5 text-xs font-bold">
                <Star size={12} fill="black" />
                Favorite
              </span>
            )}
          </div>

          <h1 className="mt-5 font-heading text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
            {log.title}
          </h1>

          <div className="mt-4 flex items-center gap-2 text-sm text-neutral-500">
            <CalendarDays size={15} />
            {new Date(log.date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}