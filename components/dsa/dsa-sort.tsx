"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpDown, Check, ChevronDown } from "lucide-react";

type DSASortProps = {
  value: string;
  onChange: (value: string) => void;
};

const sortOptions = [
  { value: "latest", label: "Latest" },
  { value: "oldest", label: "Oldest" },
  { value: "easy", label: "Easy → Hard" },
  { value: "hard", label: "Hard → Easy" },
];

export default function DSASort({ value, onChange }: DSASortProps) {
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

  const selected = sortOptions.find((o) => o.value === value) ?? sortOptions[0];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex h-12 items-center gap-2 rounded-2xl border-[2px] border-black bg-white px-4 text-sm font-bold transition-shadow hover:shadow-[3px_3px_0px_#000]"
      >
        <ArrowUpDown size={15} />
        {selected.label}
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-[calc(100%+8px)] z-20 w-44 overflow-hidden rounded-2xl border-[2px] border-black bg-white shadow-[5px_5px_0px_#000]">
          {sortOptions.map((option) => {
            const isActive = option.value === value;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm font-semibold transition-colors ${
                  isActive ? "bg-neutral-100" : "hover:bg-neutral-50"
                }`}
              >
                {option.label}
                {isActive && <Check size={14} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}