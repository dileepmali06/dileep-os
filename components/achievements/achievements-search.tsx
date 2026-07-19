"use client";

import { Search } from "lucide-react";

interface AchievementSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function AchievementSearch({ value, onChange }: AchievementSearchProps) {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search achievements..."
        className="h-12 w-full rounded-xl border-[2px] border-black bg-white pl-11 pr-4 text-sm font-medium outline-none transition-shadow focus:shadow-[3px_3px_0px_#000]"
      />
    </div>
  );
}