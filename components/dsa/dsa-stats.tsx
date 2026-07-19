"use client";

import { motion } from "framer-motion";
import { Trophy, CircleDashed, CircleAlert, Flame } from "lucide-react";

type DSAStatsProps = {
  stats: {
    totalProblems: number;
    easy: number;
    medium: number;
    hard: number;
    featured: number;
    solved: number;
    revising: number;
    needPractice: number;
  };
};

const difficultyConfig = [
  { title: "Easy", key: "easy", color: "#86efac" },
  { title: "Medium", key: "medium", color: "#fdba74" },
  { title: "Hard", key: "hard", color: "#fca5a5" },
] as const;

const statusConfig = [
  { title: "Solved", key: "solved", icon: Trophy, color: "var(--blue)" },
  { title: "Revising", key: "revising", icon: CircleDashed, color: "var(--yellow)" },
  { title: "Need Practice", key: "needPractice", icon: CircleAlert, color: "var(--pink)" },
] as const;

export default function DSAStats({ stats }: DSAStatsProps) {
  const easy = stats.easy ?? 0;
  const medium = stats.medium ?? 0;
  const hard = stats.hard ?? 0;
  const total = Math.max(easy + medium + hard, 1);

  const easyPct = (easy / total) * 100;
  const mediumPct = (medium / total) * 100;

  const gradient =
    easy + medium + hard > 0
      ? `conic-gradient(#86efac 0% ${easyPct}%, #fdba74 ${easyPct}% ${
          easyPct + mediumPct
        }%, #fca5a5 ${easyPct + mediumPct}% 100%)`
      : "conic-gradient(#e5e5e5 0% 100%)";

  return (
    <section className="py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-[32px] border-4 border-black bg-white p-8 shadow-[10px_10px_0px_#000] sm:p-10"
        >
          {stats.featured > 0 && (
            <span className="absolute -right-3 -top-3 flex items-center gap-1.5 rounded-full border-[3px] border-black bg-[var(--yellow)] px-3.5 py-1.5 text-xs font-bold shadow-[3px_3px_0px_#000]">
              <Flame size={13} />
              {stats.featured} Featured
            </span>
          )}

          <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-center sm:justify-center">
            {/* donut ring */}
            <div
              className="relative flex h-52 w-52 shrink-0 items-center justify-center rounded-full border-[4px] border-black shadow-[6px_6px_0px_#000]"
              style={{ background: gradient }}
            >
              <div className="absolute inset-5 flex flex-col items-center justify-center rounded-full border-[3px] border-black bg-white">
                <p className="font-heading text-4xl font-black">
                  {stats.totalProblems ?? 0}
                </p>
                <p className="text-xs font-semibold text-neutral-500">
                  Total Solved
                </p>
              </div>
            </div>

            {/* legend + status */}
            <div className="w-full max-w-xs">
              <p className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
                Difficulty
              </p>
              <div className="space-y-2">
                {difficultyConfig.map((d) => (
                  <div
                    key={d.key}
                    className="flex items-center gap-3 rounded-xl border-[2px] border-black px-4 py-2.5"
                  >
                    <span
                      className="h-3.5 w-3.5 shrink-0 rounded-full border-[2px] border-black"
                      style={{ background: d.color }}
                    />
                    <span className="flex-1 font-semibold">{d.title}</span>
                    <span className="font-heading font-black">
                      {stats[d.key] ?? 0}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mb-3 mt-6 font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
                Status
              </p>
              <div className="space-y-2">
                {statusConfig.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.key}
                      className="flex items-center gap-3 rounded-xl border-[2px] border-black px-4 py-2.5"
                    >
                      <div
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border-[2px] border-black"
                        style={{ background: s.color }}
                      >
                        <Icon size={13} />
                      </div>
                      <span className="flex-1 font-semibold">{s.title}</span>
                      <span className="font-heading font-black">
                        {stats[s.key] ?? 0}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}