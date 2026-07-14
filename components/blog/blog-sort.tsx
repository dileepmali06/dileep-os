"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpDown, Check, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface BlogSortProps {
  value: string;
  onChange: (value: string) => void;
}

const sortOptions = [
  { label: "Newest First", value: "newest" },
  { label: "Oldest First", value: "oldest" },
  { label: "Featured First", value: "featured" },
  { label: "Quick Reads", value: "reading-time" },
];

export function BlogSort({ value, onChange }: BlogSortProps) {
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
        className="flex items-center gap-2 rounded-2xl border-[3px] border-black bg-white px-5 py-3 font-semibold shadow-[4px_4px_0px_#000] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#000]"
      >
        <ArrowUpDown size={15} />
        {active.label}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
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
            className="absolute right-0 z-20 mt-2 w-56 overflow-hidden rounded-2xl border-[3px] border-black bg-white p-1.5 shadow-[6px_6px_0px_#000]"
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
                  className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-sm font-semibold transition-colors ${
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}