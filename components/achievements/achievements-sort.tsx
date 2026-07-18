"use client";

import { ArrowUpDown } from "lucide-react";

interface AchievementSortProps {
  value: string;
  onChange: (
    value: string
  ) => void;
}

export function AchievementSort({
  value,
  onChange,
}: AchievementSortProps) {
  return (
    <div className="mt-8 flex justify-center">
      <div className="relative">

        <ArrowUpDown
          size={18}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500"
        />

        <select
          value={value}
          onChange={(e) =>
            onChange(
              e.target.value
            )
          }
          className="
            h-14
            min-w-[240px]
            appearance-none
            rounded-2xl
            border-[3px]
            border-black
            bg-white
            pl-12
            pr-10
            font-semibold
            outline-none
            shadow-[6px_6px_0px_#000]
          "
        >
          <option value="newest">
            Newest First
          </option>

          <option value="oldest">
            Oldest First
          </option>

          <option value="featured">
            Featured First
          </option>

          <option value="metric">
            Highest Metric
          </option>

          <option value="title">
            Title A-Z
          </option>
        </select>

      </div>
    </div>
  );
}