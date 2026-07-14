"use client";

import { Check } from "lucide-react";

interface ProjectSortProps {
  value: string;
  onChange: (value: string) => void;
}

const sortOptions = [
  { label: "Newest First", value: "newest" },
  { label: "Oldest First", value: "oldest" },
  { label: "Featured First", value: "featured" },
  { label: "Completed", value: "completed" },
  { label: "In Progress", value: "in-progress" },
];

export function ProjectSort({ value, onChange }: ProjectSortProps) {
  return (
    <div className="space-y-1">
      {sortOptions.map((option) => {
        const isActive = value === option.value;

        return (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
              isActive
                ? "bg-black text-white"
                : "text-neutral-600 hover:bg-neutral-100"
            }`}
          >
            {option.label}
            {isActive && <Check size={14} />}
          </button>
        );
      })}
    </div>
  );
}