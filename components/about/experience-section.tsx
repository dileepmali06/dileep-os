"use client";

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { MapPin, Trophy, Wrench } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { urlFor } from "@/sanity/lib/image";
import { portableTextComponents } from "./about-portable-text-components";

interface Experience {
  _id: string;
  company: string;
  position: string;
  employmentType?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  currentlyWorking?: boolean;
  description?: PortableTextBlock[];
  achievements?: string[];
  technologies?: string[];
  companyLogo?: { asset?: { _ref?: string } } | null;
}

interface ExperienceSectionProps {
  data: Experience[];
}

const colors = ["var(--blue)", "var(--pink)", "var(--green)", "var(--yellow)"];

export function ExperienceSection({ data }: ExperienceSectionProps) {
  if (!data?.length) {
    return null;
  }

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Professional Journey"
          description="Projects, companies and experiences that shaped my engineering journey."
          align="center"
        />

        <div className="mx-auto mt-10 sm:mt-14 lg:mt-16 max-w-4xl space-y-12 md:space-y-16">
          {data.map((experience, index) => {
            const color = colors[index % colors.length];

            return (
              <motion.div
                key={experience._id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="relative"
              >
                {/* ---------- ID badge ---------- */}
                <div className="relative overflow-hidden rounded-[20px] border-[3px] border-black bg-white shadow-[6px_6px_0px_#000] sm:shadow-[10px_10px_0px_#000]">
                  {/* hole punch */}
                  <div className="absolute left-1/2 top-0 z-10 h-3.5 w-14 sm:h-4 sm:w-16 -translate-x-1/2 rounded-b-full border-b-[3px] border-l-[3px] border-r-[3px] border-black bg-[#f5f1e8]" />

                  {/* color strip */}
                  <div
                    className="h-3 border-b-[3px] border-black"
                    style={{ background: color }}
                  />

                  <div className="p-4 sm:p-6 md:p-8">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-center gap-3 sm:gap-4">
                        {experience.companyLogo ? (
                          <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 overflow-hidden rounded-xl border-[2.5px] sm:border-[3px] border-black bg-white p-1.5">
                            <Image
                              src={urlFor(experience.companyLogo)
                                .width(150)
                                .fit("max")
                                .url()}
                              alt={experience.company}
                              fill
                              className="object-contain"
                            />
                          </div>
                        ) : (
                          <div
                            className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-xl border-[2.5px] sm:border-[3px] border-black font-heading text-lg sm:text-xl font-black"
                            style={{ background: color }}
                          >
                            {experience.company?.[0]?.toUpperCase() ?? "?"}
                          </div>
                        )}

                        <div className="min-w-0">
                          <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-black leading-tight text-neutral-900 wrap-break-word">
                            {experience.position}
                          </h3>
                          <p className="mt-0.5 text-base sm:text-lg font-medium text-neutral-600 wrap-break-word">
                            {experience.company}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`self-start rounded-full border-2 border-black px-2.5 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider select-none ${experience.currentlyWorking
                            ? "bg-(--green) text-black"
                            : "bg-neutral-100 text-neutral-600"
                          }`}
                      >
                        {experience.currentlyWorking ? "Active" : "Past"}
                      </span>
                    </div>

                    {/* field grid — like an ID card's printed data fields */}
                    <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4 border-y-2 border-dashed border-black/15 py-4 font-mono text-[11px] sm:text-xs sm:grid-cols-4">
                      <div className="min-w-0">
                        <p className="text-neutral-400 uppercase tracking-wider text-[10px]">Badge No.</p>
                        <p className="mt-0.5 font-bold text-neutral-900 truncate">
                          EXP-{String(index + 1).padStart(2, "0")}
                        </p>
                      </div>
                      <div className="min-w-0">
                        <p className="text-neutral-400 uppercase tracking-wider text-[10px]">Type</p>
                        <p className="mt-0.5 font-bold text-neutral-900 truncate">
                          {experience.employmentType || "—"}
                        </p>
                      </div>
                      <div className="min-w-0">
                        <p className="text-neutral-400 uppercase tracking-wider text-[10px]">Duration</p>
                        <p className="mt-0.5 font-bold text-neutral-900 wrap-break-word">
                          {experience.startDate || "—"}
                          {" – "}
                          {experience.currentlyWorking
                            ? "Present"
                            : experience.endDate || "—"}
                        </p>
                      </div>
                      <div className="min-w-0">
                        <p className="flex items-center gap-1 text-neutral-400 uppercase tracking-wider text-[10px]">
                          <MapPin size={10} className="shrink-0" />
                          Location
                        </p>
                        <p className="mt-0.5 font-bold text-neutral-900 truncate">
                          {experience.location || "Remote"}
                        </p>
                      </div>
                    </div>

                    {/* barcode */}
                    <div
                      className="mt-5 h-5 sm:h-6 w-full rounded-sm opacity-80"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 5px, #000 5px, #000 6px, transparent 6px, transparent 10px)",
                      }}
                    />
                  </div>
                </div>

                {/* ---------- details below the badge ---------- */}
                <div className="mt-6 space-y-8 px-2 sm:px-4">
                  {experience.description && (
                    <PortableText
                      value={experience.description}
                      components={portableTextComponents}
                    />
                  )}

                  {experience.achievements && experience.achievements.length > 0 && (
                    <div>
                      <h4 className="mb-4 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
                        <Trophy size={14} />
                        Performance Highlights
                      </h4>
                      <ul className="space-y-3">
                        {experience.achievements.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 leading-relaxed text-neutral-700"
                          >
                            <span
                              className="mt-2 h-2 w-2 shrink-0 rounded-full"
                              style={{ background: color }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {experience.technologies && experience.technologies.length > 0 && (
                    <div>
                      <h4 className="mb-3 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
                        <Wrench size={14} />
                        Skills Cleared
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border-2 border-black/20 px-3 py-1 text-xs font-medium text-neutral-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
