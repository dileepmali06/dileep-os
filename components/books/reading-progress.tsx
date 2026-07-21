"use client";

import { motion } from "framer-motion";

type ReadingProgressProps = {
  progress?: number;
  compact?: boolean;
};

export default function ReadingProgress({ progress, compact }: ReadingProgressProps) {
  const value = Math.min(Math.max(progress ?? 0, 0), 100);

  return (
    <div>
      {!compact && (
        <div className="mb-1.5 flex items-center justify-between text-xs font-semibold text-neutral-500">
          <span>Progress</span>
          <span className="font-black text-black">{value}%</span>
        </div>
      )}
      <div
        className={`w-full overflow-hidden rounded-full border-[2px] border-black bg-neutral-100 ${
          compact ? "h-2" : "h-3"
        }`}
      >
        <motion.div
          className="h-full rounded-full bg-[var(--pink)]"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}