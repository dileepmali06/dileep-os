"use client";

import { contactTypeOptions } from "../contact-meta";

type ContactTypeSelectProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function ContactTypeSelect({ value, onChange }: ContactTypeSelectProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold">I&apos;m reaching out about</label>
      <div className="flex flex-wrap gap-2">
        {contactTypeOptions.map((option) => {
          const isActive = value === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={`flex items-center gap-1.5 rounded-xl border-[2px] border-black px-3.5 py-2 text-sm font-bold transition-all ${
                isActive
                  ? "bg-black text-white shadow-[3px_3px_0px_#000]"
                  : "bg-white hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#000]"
              }`}
            >
              <option.icon size={14} />
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}