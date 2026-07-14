"use client";

import { Search } from "lucide-react";

interface ProjectSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function ProjectSearch({ value, onChange }: ProjectSearchProps) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search projects..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border-[2px] border-black bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition-all duration-200 focus:shadow-[3px_3px_0px_#000]"
      />
    </div>
  );
}