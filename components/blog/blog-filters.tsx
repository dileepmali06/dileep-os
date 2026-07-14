"use client";

interface BlogFiltersProps {
  categories: string[];
  activeFilter: string;
  onChange: (category: string) => void;
}

export function BlogFilters({
  categories,
  activeFilter,
  onChange,
}: BlogFiltersProps) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-1">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`shrink-0 rounded-full border-[3px] px-5 py-2 font-semibold transition-all duration-200 ${
            activeFilter === category
              ? "border-black bg-black text-white shadow-[4px_4px_0px_#000]"
              : "border-black bg-white hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#000]"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}