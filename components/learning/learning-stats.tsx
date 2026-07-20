"use client";

import { motion } from "framer-motion";
import { BookOpen, Star, Layers } from "lucide-react";

import { Container } from "../ui/container";

type LearningStatsProps = {
  stats: {
    totalLogs: number;
    favoriteLogs: number;
    totalCategories: number;
    easy: number;
    medium: number;
    hard: number;
  };
};

const difficultyConfig = [
  { title: "Easy", key: "easy", color: "#86efac" },
  { title: "Medium", key: "medium", color: "#fde68a" },
  { title: "Hard", key: "hard", color: "#fca5a5" },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function LearningStats({ stats }: LearningStatsProps) {
  const easy = stats.easy ?? 0;
  const medium = stats.medium ?? 0;
  const hard = stats.hard ?? 0;
  const total = Math.max(easy + medium + hard, 1);

  const overview = [
    { title: "Total Entries", value: stats.totalLogs ?? 0, icon: BookOpen, color: "var(--blue)" },
    { title: "Favorites", value: stats.favoriteLogs ?? 0, icon: Star, color: "var(--yellow)" },
    { title: "Categories", value: stats.totalCategories ?? 0, icon: Layers, color: "var(--green)" },
  ];

  // build conic-gradient stops from difficulty proportions
  const gradientStops = difficultyConfig
    .map((d, index) => {
      const value = stats[d.key] ?? 0;
      const cumulative = difficultyConfig
        .slice(0, index)
        .reduce((sum, prev) => sum + (stats[prev.key] ?? 0), 0);
      const start = (cumulative / total) * 360;
      const end = ((cumulative + value) / total) * 360;
      return `${d.color} ${start}deg ${end}deg`;
    })
    .join(", ");

  return (
    <section className="pb-20">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {/* compact overview row */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-3">
            {overview.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-3 rounded-2xl border-[3px] border-black bg-white px-5 py-3 shadow-[4px_4px_0px_#000]"
              >
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border-2 border-black"
                  style={{ background: item.color }}
                >
                  <item.icon size={16} />
                </div>
                <div>
                  <p className="font-heading text-xl font-black leading-none">{item.value}</p>
                  <p className="mt-0.5 text-[11px] font-semibold text-neutral-500">{item.title}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* donut chart */}
          <motion.div
            variants={fadeUp}
            className="mt-8 rounded-[28px] border-[3px] border-black bg-white p-7 shadow-[8px_8px_0px_#000] sm:p-9"
          >
            <p className="mb-6 text-center font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
              Difficulty breakdown
            </p>

            <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-12">
              {/* donut */}
              <div className="relative flex h-44 w-44 shrink-0 items-center justify-center">
                <div
                  className="absolute inset-0 rounded-full border-[3px] border-black"
                  style={{ background: `conic-gradient(${gradientStops})` }}
                />
                <div className="relative flex h-24 w-24 flex-col items-center justify-center rounded-full border-[3px] border-black bg-white">
                  <span className="font-heading text-2xl font-black leading-none">{total}</span>
                  <span className="mt-1 text-[10px] font-semibold uppercase text-neutral-400">
                    total
                  </span>
                </div>
              </div>

              {/* legend */}
              <div className="flex flex-col gap-3">
                {difficultyConfig.map((d) => {
                  const value = stats[d.key] ?? 0;
                  const percent = Math.round((value / total) * 100);

                  return (
                    <div
                      key={d.key}
                      className="flex items-center gap-3 rounded-xl border-2 border-black px-4 py-2.5"
                    >
                      <span
                        className="h-3.5 w-3.5 shrink-0 rounded-full border-2 border-black"
                        style={{ background: d.color }}
                      />
                      <span className="min-w-[70px] text-sm font-bold">{d.title}</span>
                      <span className="ml-auto font-heading text-lg font-black">{value}</span>
                      <span className="w-10 text-right text-xs font-semibold text-neutral-400">
                        {percent}%
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}