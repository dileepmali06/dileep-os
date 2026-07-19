"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpDown, Check, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface AchievementSortProps {
  value: string;
  onChange: (value: string) => void;
}

const sortOptions = [
  { label: "Newest First", value: "newest" },
  { label: "Oldest First", value: "oldest" },
  { label: "Featured First", value: "featured" },
  { label: "Highest Metric", value: "metric" },
  { label: "Title A-Z", value: "title" },
];

export function AchievementSort({ value, onChange }: AchievementSortProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const active = sortOptions.find((o) => o.value === value) ?? sortOptions[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative shrink-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex h-12 items-center gap-2 rounded-xl border-[2px] border-black bg-white px-4 text-sm font-semibold transition-all hover:shadow-[3px_3px_0px_#000]"
      >
        <ArrowUpDown size={15} />
        {active.label}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={15} />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 z-20 mt-2 w-52 overflow-hidden rounded-xl border-[2px] border-black bg-white p-1.5 shadow-[5px_5px_0px_#000]"
          >
            {sortOptions.map((option) => {
              const isActive = option.value === value;
              return (
                <button
                  key={option.value}
                  onClick={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-semibold transition-colors ${
                    isActive ? "bg-black text-white" : "text-neutral-600 hover:bg-neutral-100"
                  }`}
                >
                  {option.label}
                  {isActive && <Check size={14} />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}