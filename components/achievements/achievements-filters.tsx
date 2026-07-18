"use client";

interface AchievementFiltersProps {
  categories: string[];
  activeFilter: string;
  onChange: (
    category: string
  ) => void;
}

export function AchievementFilters({
  categories,
  activeFilter,
  onChange,
}: AchievementFiltersProps) {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-3">
      {categories.map(
        (category) => (
          <button
            key={category}
            onClick={() =>
              onChange(
                category
              )
            }
            className={`
              rounded-full
              border-[3px]
              border-black
              px-5
              py-2
              font-semibold
              transition-all
              duration-200
              ${
                activeFilter ===
                category
                  ? "bg-[var(--yellow)] shadow-[4px_4px_0px_#000]"
                  : "bg-white hover:bg-neutral-100"
              }
            `}
          >
            {category}
          </button>
        )
      )}
    </div>
  );
}