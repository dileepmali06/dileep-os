"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";

import { urlFor } from "@/sanity/lib/image";
import { getEmploymentMeta, getWorkModeMeta, formatDateRange } from "./experience-meta";

type ExperienceCardProps = {
  experience: {
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
    companyLogo?: Parameters<typeof urlFor>[0];
  };
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const meta = getEmploymentMeta(experience.employmentType);
  const workMode = getWorkModeMeta(experience.workMode);
  const Icon = meta.icon;

  const logoUrl = experience.companyLogo
    ? urlFor(experience.companyLogo).width(112).height(112).fit("max").url()
    : null;

  return (
    <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.15 }}>
      <Link
        href={`/experience/${experience.slug}`}
        className="group flex flex-col gap-4 rounded-lg border-[2px] border-black bg-white p-4 shadow-[4px_4px_0px_#000] transition-shadow hover:shadow-[6px_6px_0px_#000] sm:flex-row sm:items-center sm:p-5"
      >
        {/* file-tab colored edge */}
        <div
          className="absolute -left-[2px] top-1/2 hidden h-8 w-1 -translate-y-1/2 rounded-r sm:hidden"
          aria-hidden
        />

        <div
          className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border-[2px] border-black bg-white"
          style={{ boxShadow: `-4px 0 0 -2px ${meta.color}` }}
        >
          {logoUrl ? (
            <Image src={logoUrl} alt={experience.company} fill sizes="56px" className="object-contain p-1.5" />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center font-heading text-lg font-black"
              style={{ background: meta.color }}
            >
              {experience.company?.[0]?.toUpperCase() ?? "?"}
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-heading text-base font-black leading-tight">{experience.position}</h3>
            {experience.currentlyWorking && (
              <span className="rounded-full border-[1.5px] border-black bg-[var(--green)] px-2 py-0.5 text-[9px] font-bold uppercase">
                Current
              </span>
            )}
          </div>
          <p className="truncate text-sm font-semibold text-neutral-600">{experience.company}</p>

          <div className="mt-1.5 flex flex-wrap items-center gap-x-3.5 gap-y-1 text-[11px] text-neutral-500">
            <span className="flex items-center gap-1.5">
              <Icon size={11} />
              {meta.label}
            </span>
            {workMode && (
              <span className="flex items-center gap-1.5">
                <workMode.icon size={11} />
                {workMode.label}
              </span>
            )}
            {experience.location && (
              <span className="flex items-center gap-1.5">
                <MapPin size={11} />
                {experience.location}
              </span>
            )}
          </div>

          {experience.technologies && experience.technologies.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {experience.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-black/15 bg-neutral-50 px-1.5 py-0.5 font-mono text-[10px] font-medium text-neutral-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex shrink-0 items-center justify-between gap-3 border-t-[1.5px] border-dashed border-black/10 pt-3 sm:flex-col sm:items-end sm:justify-center sm:border-t-0 sm:border-l-[1.5px] sm:pl-4 sm:pt-0">
          <span className="font-mono text-[11px] text-neutral-400">
            {formatDateRange(experience.startDate, experience.endDate, experience.currentlyWorking)}
          </span>
          <ArrowUpRight
            size={14}
            className="text-neutral-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black"
          />
        </div>
      </Link>
    </motion.div>
  );
}