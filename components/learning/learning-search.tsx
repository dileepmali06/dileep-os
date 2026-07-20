"use client";

import { Search, X } from "lucide-react";

type LearningSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function LearningSearch({
  value,
  onChange,
}: LearningSearchProps) {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search log entries, categories..."
        className="h-13 w-full rounded-2xl border-[3px] border-black bg-white px-5 pl-14 pr-12 text-sm font-semibold placeholder:font-medium placeholder:text-neutral-400 outline-none transition-all focus:shadow-[4px_4px_0px_#000]"
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute inset-y-0 right-4 flex items-center justify-center"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full border-[2px] border-black bg-neutral-100 transition-colors hover:bg-neutral-200">
            <X size={12} />
          </span>
        </button>
      )}
    </div>
  );
}