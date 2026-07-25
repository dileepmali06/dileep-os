"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, SearchX } from "lucide-react";

import { Container } from "../ui/container";
import ExperienceSearch from "./experience-search";
import ExperienceFilter from "./experience-filter";
import ExperienceTimeline from "./experience-timeline";

type Experience = {
  _id: string;
  company: string;
  slug: string;
  position: string;
  employmentType?: string;
  workMode?: string;
  companyIndustry?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  currentlyWorking?: boolean;
  technologies?: string[];
  companyLogo?: string;
};

type ExperienceListProps = {
  experiences: Experience[];
};

export default function ExperienceList({ experiences }: ExperienceListProps) {
  const [search, setSearch] = useState("");
  const [activeType, setActiveType] = useState("all");
  const [activeWorkMode, setActiveWorkMode] = useState("all");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();

    return (experiences ?? []).filter((exp) => {
      const typeMatch = activeType === "all" || exp.employmentType === activeType;
      const modeMatch = activeWorkMode === "all" || exp.workMode === activeWorkMode;

      if (!typeMatch || !modeMatch) return false;
      if (!query) return true;

      return (
        exp.company?.toLowerCase().includes(query) ||
        exp.position?.toLowerCase().includes(query) ||
        exp.companyIndustry?.toLowerCase().includes(query)
      );
    });
  }, [experiences, search, activeType, activeWorkMode]);

  if (!experiences?.length) {
    return (
      <section id="timeline" className="pb-24">
        <Container>
          <div className="mx-auto max-w-md rounded-lg border-[2px] border-dashed border-black/40 bg-[#fbf8f0] p-12 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border-[2px] border-black bg-white">
              <Briefcase size={26} />
            </div>
            <h2 className="mt-6 text-2xl font-black">No Experience Logged Yet</h2>
            <p className="mx-auto mt-3 max-w-md text-neutral-600">
              Once entries are added in Sanity Studio, they&apos;ll appear here.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="timeline" className="section-padding">
      <Container>
        <div className="mb-8">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
            Career Record
          </p>
          <h2 className="mt-1 text-3xl font-black sm:text-4xl">Full Timeline</h2>
        </div>

        <div className="rounded-lg border-[2px] border-black bg-[#fbf8f0] p-5 shadow-[6px_6px_0px_#000] sm:p-6">
          <ExperienceSearch value={search} onChange={setSearch} />
          <div className="mt-4">
            <ExperienceFilter
              activeType={activeType}
              onTypeChange={setActiveType}
              activeWorkMode={activeWorkMode}
              onWorkModeChange={setActiveWorkMode}
            />
          </div>
        </div>

        <p className="mt-5 text-sm text-neutral-500">
          Showing <span className="font-bold text-black">{filtered.length}</span> of{" "}
          {experiences.length} roles
        </p>

        {filtered.length > 0 ? (
          <div className="mt-8">
            <ExperienceTimeline experiences={filtered} />
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-10 flex flex-col items-center rounded-[24px] border-[3px] border-dashed border-black/30 p-16 text-center"
          >
            <SearchX size={40} className="text-neutral-300" />
            <h3 className="mt-5 text-2xl font-black">No matching roles</h3>
            <p className="mt-3 max-w-md text-neutral-500">
              Try a different search term or filter.
            </p>
          </motion.div>
        )}
      </Container>
    </section>
  );
}