"use client";

import { motion } from "framer-motion";
import { FileCode2, Star, Grid2X2, Coffee, ArrowUpRight } from "lucide-react";

import { Container } from "../ui/container";

type JavaStatsProps = {
  stats: {
    totalSnippets: number;
    featuredSnippets: number;
    totalCategories: number;
    arrays: number;
    strings: number;
    hashmap: number;
    trees: number;
    graphs: number;
    dynamicProgramming: number;
    collections: number;
    oop: number;
    streams: number;
    springBoot: number;
  };
};

// falls back to a warm orange if --orange isn't defined in your theme
const ORANGE = "var(--orange, #fb923c)";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function JavaStats({ stats }: JavaStatsProps) {
  const overview = [
    { title: "Java snippets", value: stats.totalSnippets ?? 0, icon: FileCode2, color: ORANGE },
    { title: "Categories", value: stats.totalCategories ?? 0, icon: Grid2X2, color: "var(--green)" },
    { title: "Featured", value: stats.featuredSnippets ?? 0, icon: Star, color: "var(--yellow)" },
    { title: "Language", value: "Java", icon: Coffee, color: "var(--blue)" },
  ];

  const categories = [
    { label: "Arrays", value: stats.arrays ?? 0 },
    { label: "Strings", value: stats.strings ?? 0 },
    { label: "HashMap", value: stats.hashmap ?? 0 },
    { label: "Trees", value: stats.trees ?? 0 },
    { label: "Graphs", value: stats.graphs ?? 0 },
    { label: "DP", value: stats.dynamicProgramming ?? 0 },
    { label: "Collections", value: stats.collections ?? 0 },
    { label: "OOP", value: stats.oop ?? 0 },
    { label: "Streams", value: stats.streams ?? 0 },
    { label: "Spring", value: stats.springBoot ?? 0 },
  ];

  const maxCategoryValue = Math.max(...categories.map((c) => c.value), 1);

  // was previously producing an invalid Tailwind class ("px-4.5", not in the
  // default spacing scale) which silently failed to apply — using bracket
  // arbitrary values instead so every tier reliably renders
  function sizeForValue(value: number) {
    const ratio = value / maxCategoryValue;
    if (ratio > 0.75) return "text-xl py-4 px-5 sm:text-2xl sm:py-5 sm:px-6";
    if (ratio > 0.45) return "text-lg py-3.5 px-4 sm:text-xl sm:py-4 sm:px-5";
    if (ratio > 0.2) return "text-base py-3 px-[18px] sm:text-lg sm:py-3.5";
    return "text-sm py-2.5 px-3.5 sm:text-base sm:py-3 sm:px-4";
  }

  return (
    <section className="pb-20">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div variants={fadeUp} className="mb-8 sm:mb-10">
            <h2 className="text-3xl font-black sm:text-4xl">Java library overview</h2>
            <p className="mt-3 max-w-2xl text-sm text-neutral-600 sm:text-base">
              A quick snapshot of the Java snippet collection, organized into
              practical categories for interviews, backend development, and
              everyday coding.
            </p>
          </motion.div>

          {/* overview: unified divided band */}
          <motion.div
            variants={fadeUp}
            className="overflow-hidden rounded-[22px] border-[3px] border-black bg-white shadow-[8px_8px_0px_#000] sm:rounded-[28px] sm:shadow-[10px_10px_0px_#000]"
          >
            <div className="grid divide-y-[3px] divide-black sm:grid-cols-2 sm:divide-x-[3px] sm:divide-y-0 xl:grid-cols-4">
              {overview.map((item) => (
                <div key={item.title} className="flex items-center gap-4 p-5 sm:p-6">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-[2px] border-black sm:h-12 sm:w-12"
                    style={{ background: item.color }}
                  >
                    <item.icon size={18} className="sm:h-5 sm:w-5" />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate font-heading text-xl font-black sm:text-2xl">
                      {item.value}
                    </p>
                    <p className="mt-0.5 text-xs font-semibold text-neutral-500">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* categories: size-by-count tag cloud */}
          <motion.div
            variants={fadeUp}
            className="mt-8 rounded-[22px] border-[3px] border-black bg-white p-5 shadow-[8px_8px_0px_#000] sm:rounded-[28px] sm:p-8 sm:shadow-[10px_10px_0px_#000]"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 sm:text-sm">
                  Categories
                </p>
                <h3 className="mt-2 text-2xl font-black sm:text-3xl">Explore by topic</h3>
              </div>

              <p className="max-w-xl text-sm text-neutral-600 sm:text-base">
                Every snippet is grouped into a category — bigger chips mean
                more snippets are available.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:mt-8 sm:gap-3">
              {categories.map((category) => (
                <div
                  key={category.label}
                  className={`group flex items-center gap-2 rounded-2xl border-[2px] border-black bg-[var(--cream)] font-black transition-all hover:-translate-y-0.5 sm:gap-2.5 ${sizeForValue(
                    category.value
                  )}`}
                >
                  <span className="whitespace-nowrap">{category.label}</span>
                  <span className="flex shrink-0 items-center gap-1 rounded-full border-[1.5px] border-black bg-white px-2 py-0.5 text-xs">
                    {category.value}
                    <ArrowUpRight
                      size={12}
                      className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}