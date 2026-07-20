"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { NotebookPen, SearchX } from "lucide-react";

import { Container } from "../ui/container";
import LearningCard from "./learning-card";
import LearningSearch from "./learning-search";
import LearningFilters from "./learning-filters";

type LearningLog = {
  _id: string;
  title: string;
  slug: string;
  date: string;
  category: string;
  summary?: string;
  difficulty?: string;
  favorite?: boolean;
};

type LearningTimelineProps = {
  logs: LearningLog[];
};

function groupByMonth(logs: LearningLog[]) {
  const groups = new Map<string, LearningLog[]>();

  for (const log of logs) {
    const date = new Date(log.date);
    const key = date.toLocaleDateString("en-US", { month: "long", year: "numeric" });

    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(log);
  }

  return Array.from(groups.entries());
}

export default function LearningTimeline({ logs }: LearningTimelineProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeDifficulty, setActiveDifficulty] = useState("all");

  const filteredLogs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return (logs ?? [])
      .filter((log) => {
        const categoryMatch = activeCategory === "all" || log.category === activeCategory;
        const difficultyMatch =
          activeDifficulty === "all" || log.difficulty === activeDifficulty;

        if (!categoryMatch || !difficultyMatch) return false;
        if (!query) return true;

        return (
          log.title?.toLowerCase().includes(query) ||
          log.summary?.toLowerCase().includes(query) ||
          log.category?.toLowerCase().includes(query)
        );
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [logs, search, activeCategory, activeDifficulty]);

  const grouped = useMemo(() => groupByMonth(filteredLogs), [filteredLogs]);

  return (
    <section id="log" className="section-padding">
      <Container>
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border-[3px] border-black bg-[var(--blue)]">
            <NotebookPen size={18} />
          </div>
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
              The Log
            </p>
            <h2 className="text-3xl font-black sm:text-4xl">Every Entry</h2>
          </div>
        </div>

        {/* toolbar */}
        <div className="rounded-2xl border-[3px] border-black bg-white p-5 shadow-[7px_7px_0px_#000] sm:p-6">
          <LearningSearch value={search} onChange={setSearch} />
          <div className="mt-4">
            <LearningFilters
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              activeDifficulty={activeDifficulty}
              onDifficultyChange={setActiveDifficulty}
            />
          </div>
        </div>

        <p className="mt-5 text-sm text-neutral-500">
          Showing <span className="font-bold text-black">{filteredLogs.length}</span> of{" "}
          {logs?.length ?? 0} entries
        </p>

        {/* month-grouped ledger */}
        {grouped.length > 0 ? (
          <div className="mt-10 space-y-12">
            {grouped.map(([month, monthLogs], groupIndex) => (
              <motion.div
                key={month}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: groupIndex * 0.05 }}
              >
                {/* month header */}
                <div className="flex items-center gap-4">
                  <h3 className="font-heading text-xl font-black sm:text-2xl">{month}</h3>
                  <div className="h-[2px] flex-1 bg-black/10" />
                  <span className="rounded-full border-2 border-black bg-neutral-50 px-3 py-1 text-xs font-bold text-neutral-500">
                    {monthLogs.length} {monthLogs.length === 1 ? "entry" : "entries"}
                  </span>
                </div>

                {/* entries grid */}
                <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {monthLogs.map((log, index) => (
                    <motion.div
                      key={log._id}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.04 }}
                    >
                      <LearningCard log={log} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="mt-10 flex flex-col items-center rounded-[24px] border-[3px] border-dashed border-black/30 p-16 text-center">
            <SearchX size={40} className="text-neutral-300" />
            <h3 className="mt-5 text-2xl font-black">No matching entries</h3>
            <p className="mt-3 max-w-md text-neutral-500">
              Try a different search term, category or difficulty.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}