"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

type Option = { value: string; label: string; color?: string };

type DSAFiltersProps = {
  difficulty: string;
  onDifficultyChange: (value: string) => void;
  platform: string;
  onPlatformChange: (value: string) => void;
  status: string;
  onStatusChange: (value: string) => void;
};

const difficultyOptions: Option[] = [
  { value: "all", label: "All difficulty" },
  { value: "easy", label: "Easy", color: "var(--green)" },
  { value: "medium", label: "Medium", color: "var(--yellow)" },
  { value: "hard", label: "Hard", color: "var(--pink)" },
];

const platformOptions: Option[] = [
  { value: "all", label: "All platforms" },
  { value: "leetcode", label: "LeetCode" },
  { value: "gfg", label: "GeeksForGeeks" },
  { value: "hackerrank", label: "HackerRank" },
  { value: "codeforces", label: "Codeforces" },
];

const statusOptions: Option[] = [
  { value: "all", label: "All status" },
  { value: "solved", label: "Solved", color: "var(--green)" },
  { value: "revising", label: "Revising", color: "var(--yellow)" },
  { value: "need-practice", label: "Need practice", color: "var(--pink)" },
];

function FilterDropdown({
  options,
  value,
  onChange,
}: {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selected = options.find((o) => o.value === value) ?? options[0];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex h-12 w-full items-center justify-between gap-2 rounded-2xl border-[2px] border-black bg-white px-4 text-sm font-bold transition-shadow hover:shadow-[3px_3px_0px_#000] sm:w-44"
      >
        <span className="flex items-center gap-2 truncate">
          {selected.color && (
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-full border-[1.5px] border-black"
              style={{ background: selected.color }}
            />
          )}
          {selected.label}
        </span>
        <ChevronDown
          size={16}
          className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-[calc(100%+8px)] z-20 w-full min-w-[180px] overflow-hidden rounded-2xl border-[2px] border-black bg-white shadow-[5px_5px_0px_#000]">
          {options.map((option) => {
            const isActive = option.value === value;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-2 px-4 py-2.5 text-left text-sm font-semibold transition-colors ${
                  isActive ? "bg-neutral-100" : "hover:bg-neutral-50"
                }`}
              >
                <span className="flex items-center gap-2">
                  {option.color && (
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-full border-[1.5px] border-black"
                      style={{ background: option.color }}
                    />
                  )}
                  {option.label}
                </span>
                {isActive && <Check size={14} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function DSAFilters({
  difficulty,
  onDifficultyChange,
  platform,
  onPlatformChange,
  status,
  onStatusChange,
}: DSAFiltersProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <FilterDropdown
        options={difficultyOptions}
        value={difficulty}
        onChange={onDifficultyChange}
      />
      <FilterDropdown options={platformOptions} value={platform} onChange={onPlatformChange} />
      <FilterDropdown options={statusOptions} value={status} onChange={onStatusChange} />
    </div>
  );
}