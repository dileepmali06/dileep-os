"use client";

import { employmentTypeConfig, workModeConfig } from "./experience-meta";

const employmentTypes = ["all", ...Object.keys(employmentTypeConfig)];
const workModes = ["all", ...Object.keys(workModeConfig)];

type ExperienceFilterProps = {
  activeType: string;
  onTypeChange: (value: string) => void;
  activeWorkMode: string;
  onWorkModeChange: (value: string) => void;
};

export default function ExperienceFilter({
  activeType,
  onTypeChange,
  activeWorkMode,
  onWorkModeChange,
}: ExperienceFilterProps) {
  return (
    <div className="space-y-3">
      <div>
        <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
          Type
        </p>
        <div className="flex flex-wrap gap-2">
          {employmentTypes.map((value) => {
            const isActive = activeType === value;
            const meta = value === "all" ? null : employmentTypeConfig[value];

            return (
              <button
                key={value}
                onClick={() => onTypeChange(value)}
                className={`flex items-center gap-1.5 rounded-lg border-[2px] border-black px-3 py-2 text-xs font-bold transition-all sm:text-sm ${
                  isActive
                    ? "bg-black text-white shadow-[3px_3px_0px_#000]"
                    : "bg-white hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#000]"
                }`}
              >
                {meta && <meta.icon size={13} />}
                {value === "all" ? "All Types" : meta?.label}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
          Work mode
        </p>
        <div className="flex flex-wrap gap-2">
          {workModes.map((value) => {
            const isActive = activeWorkMode === value;
            const meta = value === "all" ? null : workModeConfig[value];

            return (
              <button
                key={value}
                onClick={() => onWorkModeChange(value)}
                className={`flex items-center gap-1.5 rounded-full border-[2px] border-black px-3.5 py-1.5 text-xs font-bold transition-all ${
                  isActive ? "bg-[var(--blue)] shadow-[3px_3px_0px_#000]" : "bg-white hover:bg-neutral-50"
                }`}
              >
                {meta && <meta.icon size={12} />}
                {value === "all" ? "All Modes" : meta?.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}