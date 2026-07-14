"use client";

import { Search } from "lucide-react";

interface BlogSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function BlogSearch({ value, onChange }: BlogSearchProps) {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search articles..."
        className="h-14 w-full rounded-2xl border-[3px] border-black bg-white pl-12 pr-4 font-medium outline-none shadow-[5px_5px_0px_#000] transition-all focus:-translate-x-1 focus:-translate-y-1 focus:shadow-[8px_8px_0px_#000]"
      />
    </div>
  );
}