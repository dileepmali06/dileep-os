"use client";

interface TechCount {
  tech: string;
  count: number;
}

interface ProjectFiltersProps {
  technologies: TechCount[];
  activeFilter: string;
  onChange: (value: string) => void;
}

export function ProjectFilters({
  technologies,
  activeFilter,
  onChange,
}: ProjectFiltersProps) {
  return (
    <div className="max-h-64 space-y-1 overflow-y-auto pr-1">
      {technologies.map(({ tech, count }) => {
        const isActive = activeFilter === tech;

        return (
          <button
            key={tech}
            onClick={() => onChange(tech)}
            className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
              isActive
                ? "bg-black text-white"
                : "text-neutral-600 hover:bg-neutral-100"
            }`}
          >
            <span className="truncate">{tech}</span>
            <span
              className={`ml-2 shrink-0 rounded-full px-2 py-0.5 text-xs ${
                isActive
                  ? "bg-white/20 text-white"
                  : "bg-neutral-100 text-neutral-500"
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}