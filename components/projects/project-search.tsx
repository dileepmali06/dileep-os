"use client";

import { Search, X } from "lucide-react";

interface ProjectSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function ProjectSearch({ value, onChange }: ProjectSearchProps) {
  return (
    <div className="relative w-full">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search projects, categories..."
        className="w-full rounded-xl border-[2px] border-black bg-white py-3 pl-11 pr-10 text-sm font-medium outline-none transition-shadow focus:shadow-[3px_3px_0px_#000]"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}