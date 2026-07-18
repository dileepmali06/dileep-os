"use client";

import { Search } from "lucide-react";

interface AchievementSearchProps {
  value: string;
  onChange: (
    value: string
  ) => void;
}

export function AchievementSearch({
  value,
  onChange,
}: AchievementSearchProps) {
  return (
    <div className="mx-auto mt-12 max-w-2xl">
      <div className="relative">

        <Search
          size={20}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-500"
        />

        <input
          type="text"
          value={value}
          onChange={(e) =>
            onChange(
              e.target.value
            )
          }
          placeholder="Search achievements, skills or categories..."
          className="
            h-16
            w-full
            rounded-2xl
            border-[4px]
            border-black
            bg-white
            pl-14
            pr-5
            text-lg
            font-medium
            outline-none
            shadow-[8px_8px_0px_#000]
            transition-all
            focus:-translate-y-1
            focus:shadow-[12px_12px_0px_#000]
          "
        />

      </div>
    </div>
  );
}