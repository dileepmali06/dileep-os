"use client";

import { Search, X } from "lucide-react";

type GuestbookSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function GuestbookSearch({ value, onChange }: GuestbookSearchProps) {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by name, profession, country..."
        className="h-12 w-full rounded-lg border-[2px] border-black bg-white pl-11 pr-11 text-sm font-medium outline-none transition-shadow focus:shadow-[3px_3px_0px_#000]"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute right-3.5 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border-[2px] border-black bg-neutral-100 hover:bg-neutral-200"
        >
          <X size={12} />
        </button>
      )}
    </div>
  );
}