"use client";

import {
  Grid2X2,
  Boxes,
  FileText,
  Database,
  Trees,
  Share2,
  Brain,
  Package,
  Coffee,
  Workflow,
  Rocket,
} from "lucide-react";

// falls back to a warm orange if --orange isn't defined in your theme
const ORANGE = "var(--orange, #fb923c)";

const categories = [
  { label: "All", value: "all", icon: Grid2X2, color: ORANGE },
  { label: "Arrays", value: "arrays", icon: Boxes, color: "var(--yellow)" },
  { label: "Strings", value: "strings", icon: FileText, color: "var(--green)" },
  { label: "HashMap", value: "hashmap", icon: Database, color: "var(--blue)" },
  { label: "Trees", value: "trees", icon: Trees, color: "var(--cream)" },
  { label: "Graphs", value: "graphs", icon: Share2, color: "var(--yellow)" },
  { label: "DP", value: "dp", icon: Brain, color: "var(--green)" },
  { label: "Collections", value: "collections", icon: Package, color: ORANGE },
  { label: "OOP", value: "oop", icon: Coffee, color: "var(--blue)" },
  { label: "Streams", value: "streams", icon: Workflow, color: "var(--cream)" },
  { label: "Spring Boot", value: "springboot", icon: Rocket, color: "var(--green)" },
];

type JavaFiltersProps = {
  activeCategory: string;
  onChange: (value: string) => void;
};

export default function JavaFilters({ activeCategory, onChange }: JavaFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {categories.map((category) => {
        const isActive = activeCategory === category.value;
        const Icon = category.icon;

        return (
          <button
            key={category.value}
            onClick={() => onChange(category.value)}
            className={`group flex items-center gap-2 rounded-xl border-[2px] border-black px-3.5 py-2.5 text-sm font-bold transition-all ${
              isActive
                ? "bg-black text-white shadow-[3px_3px_0px_#000]"
                : "bg-white hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#000]"
            }`}
          >
            <div
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-[2px] border-black"
              style={{ background: isActive ? "white" : category.color }}
            >
              <Icon size={12} className="text-black" />
            </div>
            {category.label}
          </button>
        );
      })}
    </div>
  );
}