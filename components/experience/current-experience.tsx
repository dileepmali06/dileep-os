"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Radio, MapPin, ArrowUpRight, IdCard } from "lucide-react";

import { Container } from "../ui/container";
import type { SanityImageSource } from "@sanity/image-url";
import { urlFor } from "@/sanity/lib/image";
import { getEmploymentMeta, getWorkModeMeta, formatMonthYear } from "./experience-meta";

type CurrentExperienceProps = {
  experience: {
    _id: string;
    company: string;
    slug: string;
    position: string;
    employmentType?: string;
    workMode?: string;
    companyIndustry?: string;
    location?: string;
    companyWebsite?: string;
    startDate?: string;
    technologies?: string[];
    companyLogo?: SanityImageSource | null;
  } | null;
};

export default function CurrentExperience({ experience }: CurrentExperienceProps) {
  if (!experience) return null;

  const meta = getEmploymentMeta(experience.employmentType);
  const workMode = getWorkModeMeta(experience.workMode);
  const Icon = meta.icon;

  const logoUrl = experience.companyLogo
    ? urlFor(experience.companyLogo).width(160).height(160).fit("max").url()
    : null;

  return (
    <section id="current" className="pb-20">
      <Container>
        <div className="mb-6 flex items-center gap-2.5">
          <Radio size={15} className="animate-pulse text-[var(--green)]" />
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
            Currently stationed
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20, rotate: -1 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-md"
        >
          {/* lanyard */}
          <div className="mx-auto h-8 w-3 rounded-t-full border-[2px] border-b-0 border-black bg-neutral-300" />
          <div className="mx-auto h-3 w-1.5 bg-black" />

          <Link
            href={`/experience/${experience.slug}`}
            className="group relative block overflow-hidden rounded-2xl border-[3px] border-black bg-white shadow-[8px_10px_0px_#000] transition-shadow hover:shadow-[11px_13px_0px_#000]"
          >
            {/* badge header */}
            <div className="flex items-center justify-between border-b-[3px] border-black bg-[var(--green)] px-5 py-2.5">
              <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest">
                <IdCard size={13} />
                Active
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Since {formatMonthYear(experience.startDate)}
              </span>
            </div>

            <div className="flex flex-col items-center p-7 text-center">
              <div className="relative h-20 w-20 overflow-hidden rounded-2xl border-[3px] border-black bg-white shadow-[3px_3px_0px_#000]">
                {logoUrl ? (
                  <Image
                    src={logoUrl}
                    alt={experience.company}
                    fill
                    sizes="80px"
                    className="object-contain p-2"
                  />
                ) : (
                  <div
                    className="flex h-full w-full items-center justify-center rounded-lg font-heading text-2xl font-black"
                    style={{ background: meta.color }}
                  >
                    {experience.company?.[0]?.toUpperCase() ?? "?"}
                  </div>
                )}
              </div>

              <h3 className="mt-4 font-heading text-2xl font-black leading-tight">
                {experience.position}
              </h3>
              <p className="mt-1 text-base font-semibold text-neutral-500">{experience.company}</p>

              <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-neutral-500">
                <span className="flex items-center gap-1.5">
                  <Icon size={12} />
                  {meta.label}
                </span>
                {workMode && (
                  <span className="flex items-center gap-1.5">
                    <workMode.icon size={12} />
                    {workMode.label}
                  </span>
                )}
                {experience.location && (
                  <span className="flex items-center gap-1.5">
                    <MapPin size={12} />
                    {experience.location}
                  </span>
                )}
              </div>

              {experience.technologies && experience.technologies.length > 0 && (
                <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                  {experience.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-black/15 bg-neutral-50 px-2 py-0.5 text-[11px] font-medium text-neutral-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-neutral-500 transition-colors group-hover:text-black">
                View details
                <ArrowUpRight
                  size={13}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </div>

            {/* barcode footer — consistent with hero badge */}
            <div className="flex items-center gap-[2px] border-t-[3px] border-black bg-neutral-50 px-6 py-3">
              {Array.from({ length: 32 }).map((_, i) => (
                <span
                  key={i}
                  className="bg-black"
                  style={{
                    width: i % 3 === 0 ? "2.5px" : "1px",
                    height: i % 5 === 0 ? "16px" : "10px",
                  }}
                />
              ))}
            </div>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}