"use client";

import { categoryMeta } from "./learning-meta";

const categories = [
  "all",
  "dsa",
  "java",
  "springboot",
  "system-design",
  "backend",
  "frontend",
  "devops",
  "database",
  "career",
];

const difficulties = [
  { value: "all", label: "All" },
  { value: "easy", label: "Easy", color: "#86efac" },
  { value: "medium", label: "Medium", color: "#fde68a" },
  { value: "hard", label: "Hard", color: "#fca5a5" },
];

type LearningFiltersProps = {
  activeCategory: string;
  onCategoryChange: (value: string) => void;
  activeDifficulty: string;
  onDifficultyChange: (value: string) => void;
};

export default function LearningFilters({
  activeCategory,
  onCategoryChange,
  activeDifficulty,
  onDifficultyChange,
}: LearningFiltersProps) {
  return (
    <div className="space-y-4">
      {/* category pills - wraps, no scroll */}
      <div>
        <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
          Category
        </p>
        <div className="flex flex-wrap gap-2">
          {categories.map((value) => {
            const isActive = activeCategory === value;
            const meta = value === "all" ? null : categoryMeta[value];

            return (
              <button
                key={value}
                onClick={() => onCategoryChange(value)}
                className={`flex items-center gap-1.5 rounded-xl border-[2px] border-black px-3 py-2 text-xs font-bold transition-all sm:text-sm ${
                  isActive
                    ? "bg-black text-white shadow-[3px_3px_0px_#000]"
                    : "bg-white hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#000]"
                }`}
              >
                {meta && (
                  <div
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-[1.5px] border-black"
                    style={{ background: isActive ? "white" : meta.color }}
                  >
                    <meta.icon size={10} className="text-black" />
                  </div>
                )}
                {value === "all" ? "All" : meta?.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* difficulty segmented control */}
      <div>
        <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
          Difficulty
        </p>
        <div className="inline-flex flex-wrap gap-1 rounded-xl border-[2px] border-black bg-neutral-50 p-1">
          {difficulties.map((d) => {
            const isActive = activeDifficulty === d.value;

            return (
              <button
                key={d.value}
                onClick={() => onDifficultyChange(d.value)}
                className={`flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-bold capitalize transition-all ${
                  isActive ? "border-[2px] border-black bg-white shadow-[2px_2px_0px_#000]" : "text-neutral-500 hover:text-black"
                }`}
              >
                {d.color && (
                  <span
                    className="h-2.5 w-2.5 rounded-full border border-black/40"
                    style={{ background: d.color }}
                  />
                )}
                {d.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}