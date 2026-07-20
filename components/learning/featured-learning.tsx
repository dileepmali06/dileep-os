"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";

import { Container } from "../ui/container";
import { categoryMeta, difficultyStyles } from "./learning-meta";

type FeaturedLog = {
  _id: string;
  title: string;
  slug: string;
  date: string;
  category: string;
  summary?: string;
  difficulty?: string;
  favorite?: boolean;
};

type FeaturedLearningProps = {
  logs: FeaturedLog[];
};

const fanRotations = [-10, -5, 0, 5, 10, -8, 8];

export default function FeaturedLearning({ logs }: FeaturedLearningProps) {
  if (!logs?.length) return null;

  return (
    <section className="pb-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="mb-14 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border-[3px] border-black bg-[var(--yellow)]">
              <Star size={18} fill="black" />
            </div>
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
                Favorites
              </p>
              <h2 className="text-2xl font-black sm:text-3xl">Standout Lessons</h2>
            </div>
          </div>

          {/* desktop: fanned hand of cards */}
          <div className="hidden lg:block">
            <div className="mx-auto flex max-w-4xl items-end justify-center pb-6 pt-10">
              {logs.map((log, index) => {
                const meta = categoryMeta[log.category] ?? categoryMeta.default;
                const Icon = meta.icon;
                const rotation = fanRotations[index % fanRotations.length];

                return (
                  <motion.div
                    key={log._id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.06 }}
                    whileHover={{
                      y: -28,
                      rotate: 0,
                      scale: 1.06,
                      zIndex: 50,
                      transition: { duration: 0.2 },
                    }}
                    style={{
                      rotate: rotation,
                      zIndex: index,
                      marginLeft: index === 0 ? 0 : -56,
                    }}
                    className="group relative"
                  >
                    <Link
                      href={`/learning/${log.slug}`}
                      className="flex h-72 w-52 flex-col rounded-2xl border-[3px] border-black bg-white p-5 shadow-[6px_6px_0px_#000] transition-shadow group-hover:shadow-[9px_9px_0px_#000]"
                    >
                      <div className="flex items-center justify-between">
                        <div
                          className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-black"
                          style={{ background: meta.color }}
                        >
                          <Icon size={15} />
                        </div>
                        {log.difficulty && (
                          <span
                            className={`rounded-full border-2 border-black px-2 py-0.5 text-[9px] font-bold uppercase ${
                              difficultyStyles[log.difficulty] ?? "bg-neutral-200"
                            }`}
                          >
                            {log.difficulty}
                          </span>
                        )}
                      </div>

                      <h3 className="mt-3 line-clamp-3 font-heading text-base font-black leading-tight">
                        {log.title}
                      </h3>

                      {log.summary && (
                        <p className="mt-2 line-clamp-3 flex-1 text-xs leading-relaxed text-neutral-600">
                          {log.summary}
                        </p>
                      )}

                      <div className="mt-3 flex items-center justify-between border-t-2 border-dashed border-black/10 pt-3">
                        <span className="font-mono text-[10px] text-neutral-400">
                          {new Date(log.date).toLocaleDateString("en-US", {
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                        <ArrowUpRight
                          size={13}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <p className="mt-2 text-center font-mono text-xs text-neutral-400">
              hover a card to pull it out
            </p>
          </div>

          {/* mobile/tablet: simple stacked list */}
          <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
            {logs.map((log, index) => {
              const meta = categoryMeta[log.category] ?? categoryMeta.default;
              const Icon = meta.icon;

              return (
                <motion.div
                  key={log._id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                >
                  <Link
                    href={`/learning/${log.slug}`}
                    className="group flex h-full flex-col rounded-2xl border-[3px] border-black bg-white p-5 shadow-[6px_6px_0px_#000] transition-all hover:-translate-y-1 hover:shadow-[9px_9px_0px_#000]"
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-black"
                        style={{ background: meta.color }}
                      >
                        <Icon size={16} />
                      </div>
                      {log.difficulty && (
                        <span
                          className={`rounded-full border-2 border-black px-2.5 py-0.5 text-[10px] font-bold uppercase ${
                            difficultyStyles[log.difficulty] ?? "bg-neutral-200"
                          }`}
                        >
                          {log.difficulty}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-4 line-clamp-2 font-heading text-lg font-black leading-tight">
                      {log.title}
                    </h3>

                    {log.summary && (
                      <p className="mt-2 line-clamp-2 flex-1 text-sm text-neutral-600">
                        {log.summary}
                      </p>
                    )}

                    <div className="mt-4 flex items-center justify-between border-t-2 border-dashed border-black/10 pt-3">
                      <span className="font-mono text-xs text-neutral-400">
                        {new Date(log.date).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <ArrowUpRight
                        size={15}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}