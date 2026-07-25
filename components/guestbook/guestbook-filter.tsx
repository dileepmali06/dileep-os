"use client";

import { Globe2, Briefcase } from "lucide-react";

type GuestbookFilterProps = {
  countries: string[];
  activeCountry: string;
  onCountryChange: (value: string) => void;
  professions: string[];
  activeProfession: string;
  onProfessionChange: (value: string) => void;
};

export default function GuestbookFilter({
  countries,
  activeCountry,
  onCountryChange,
  professions,
  activeProfession,
  onProfessionChange,
}: GuestbookFilterProps) {
  return (
    <div className="space-y-4">
      {countries.length > 0 && (
        <div>
          <p className="mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
            <Globe2 size={11} />
            Country
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onCountryChange("all")}
              className={`rounded-full border-[2px] border-black px-3 py-1.5 text-xs font-bold transition-all ${
                activeCountry === "all" ? "bg-black text-white" : "bg-white hover:bg-neutral-50"
              }`}
            >
              All
            </button>
            {countries.map((country) => (
              <button
                key={country}
                onClick={() => onCountryChange(country)}
                className={`rounded-full border-[2px] border-black px-3 py-1.5 text-xs font-bold transition-all ${
                  activeCountry === country ? "bg-[var(--blue)]" : "bg-white hover:bg-neutral-50"
                }`}
              >
                {country}
              </button>
            ))}
          </div>
        </div>
      )}

      {professions.length > 0 && (
        <div>
          <p className="mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
            <Briefcase size={11} />
            Profession
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onProfessionChange("all")}
              className={`rounded-full border-[2px] border-black px-3 py-1.5 text-xs font-bold transition-all ${
                activeProfession === "all" ? "bg-black text-white" : "bg-white hover:bg-neutral-50"
              }`}
            >
              All
            </button>
            {professions.map((profession) => (
              <button
                key={profession}
                onClick={() => onProfessionChange(profession)}
                className={`rounded-full border-[2px] border-black px-3 py-1.5 text-xs font-bold transition-all ${
                  activeProfession === profession ? "bg-[var(--pink)]" : "bg-white hover:bg-neutral-50"
                }`}
              >
                {profession}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}