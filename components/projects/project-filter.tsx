"use client";

import { colorForIndex } from "./project-meta";

interface ProjectFilterProps {
  label: string;
  options: string[];
  active: string;
  onChange: (value: string) => void;
}

export function ProjectFilter({ label, options, active, onChange }: ProjectFilterProps) {
  return (
    <div>
      <p className="mb-2.5 font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400">
        {label}
      </p>
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => onChange("all")}
          className={`rounded-full border-[2px] border-black px-4 py-2 text-sm font-bold transition-all ${
            active === "all"
              ? "bg-black text-white"
              : "bg-white text-black hover:shadow-[3px_3px_0px_#000]"
          }`}
        >
          All
        </button>
        {options.map((option, i) => {
          const color = colorForIndex(i);
          const isActive = active === option;
          return (
            <button
              key={option}
              onClick={() => onChange(option)}
              className={`flex items-center gap-2 rounded-full border-[2px] px-4 py-2 text-sm font-bold capitalize transition-all ${
                isActive
                  ? "border-black shadow-[3px_3px_0px_#000]"
                  : "border-black/15 bg-white hover:border-black hover:shadow-[3px_3px_0px_#000]"
              }`}
              style={isActive ? { background: `color-mix(in srgb, ${color} 22%, white)` } : undefined}
            >
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-full border-[1.5px] border-black"
                style={{ background: color }}
              />
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}