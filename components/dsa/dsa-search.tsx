"use client";

import { Search, X } from "lucide-react";

type DSASearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function DSASearch({ value, onChange }: DSASearchProps) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search problems, topics or platforms..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 w-full rounded-2xl border-[2px] border-black pl-11 pr-10 text-sm outline-none transition-shadow focus:shadow-[3px_3px_0px_#000]"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border-[1.5px] border-black bg-neutral-100 hover:bg-neutral-200"
        >
          <X size={12} />
        </button>
      )}
    </div>
  );
}