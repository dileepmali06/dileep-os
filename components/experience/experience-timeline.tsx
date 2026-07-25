"use client";

import { motion } from "framer-motion";

import ExperienceCard from "./experience-card";

type Experience = {
  _id: string;
  company: string;
  slug: string;
  position: string;
  employmentType?: string;
  workMode?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  currentlyWorking?: boolean;
  technologies?: string[];
  companyLogo?: string;
};

type ExperienceTimelineProps = {
  experiences: Experience[];
};

function groupByYear(experiences: Experience[]) {
  const groups = new Map<string, Experience[]>();

  for (const exp of experiences) {
    const year = exp.startDate ? new Date(exp.startDate).getFullYear().toString() : "Undated";
    if (!groups.has(year)) groups.set(year, []);
    groups.get(year)!.push(exp);
  }

  return Array.from(groups.entries()).sort((a, b) => b[0].localeCompare(a[0]));
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  if (!experiences?.length) return null;

  const grouped = groupByYear(experiences);

  return (
    <div className="space-y-10">
      {grouped.map(([year, yearExperiences], groupIndex) => (
        <motion.div
          key={year}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: groupIndex * 0.06 }}
        >
          {/* folder tab */}
          <div className="flex items-center gap-0">
            <div className="flex items-center gap-2 rounded-t-lg border-[2px] border-b-0 border-black bg-[var(--yellow)] px-4 py-2">
              <span className="font-heading text-sm font-black">{year}</span>
              <span className="font-mono text-xs text-black/50">{yearExperiences.length}</span>
            </div>
            <div className="h-[2px] flex-1 bg-black" />
          </div>

          <div className="space-y-4 border-x-[2px] border-b-[2px] border-black bg-[#fbf8f0]/50 p-5">
            {yearExperiences.map((experience, index) => (
              <motion.div
                key={experience._id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ExperienceCard experience={experience} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}