"use client";

interface AchievementFiltersProps {
  categories: string[];
  activeFilter: string;
  onChange: (category: string) => void;
}

export function AchievementFilters({
  categories,
  activeFilter,
  onChange,
}: AchievementFiltersProps) {
  return (
    <div className="flex gap-2 overflow-x-auto">
      {categories.map((category) => {
        const isActive = activeFilter === category;
        return (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={`shrink-0 rounded-xl border-[2px] border-black px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
              isActive
                ? "bg-[var(--yellow)] shadow-[3px_3px_0px_#000]"
                : "bg-white hover:bg-neutral-100"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}