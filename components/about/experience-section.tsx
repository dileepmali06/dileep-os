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

        <div className="mx-auto mt-16 max-w-4xl space-y-12">
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
                <div className="relative overflow-hidden rounded-[20px] border-[3px] border-black bg-white shadow-[10px_10px_0px_#000]">
                  {/* hole punch */}
                  <div className="absolute left-1/2 top-0 z-10 h-4 w-16 -translate-x-1/2 rounded-b-full border-b-[3px] border-l-[3px] border-r-[3px] border-black bg-[#f5f1e8]" />

                  {/* color strip */}
                  <div
                    className="h-3 border-b-[3px] border-black"
                    style={{ background: color }}
                  />

                  <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        {experience.companyLogo ? (
                          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border-[3px] border-black bg-white p-1.5">
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
                            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border-[3px] border-black font-heading text-xl font-black"
                            style={{ background: color }}
                          >
                            {experience.company?.[0]?.toUpperCase() ?? "?"}
                          </div>
                        )}

                        <div>
                          <h3 className="font-heading text-2xl font-black leading-tight sm:text-3xl">
                            {experience.position}
                          </h3>
                          <p className="mt-1 text-lg text-neutral-600">
                            {experience.company}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`shrink-0 rounded-full border-[2px] border-black px-3 py-1 text-xs font-bold uppercase ${
                          experience.currentlyWorking
                            ? "bg-[var(--green)]"
                            : "bg-neutral-100"
                        }`}
                      >
                        {experience.currentlyWorking ? "Active" : "Past"}
                      </span>
                    </div>

                    {/* field grid — like an ID card's printed data fields */}
                    <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 border-y-2 border-dashed border-black/15 py-5 font-mono text-xs sm:grid-cols-4">
                      <div>
                        <p className="text-neutral-400">Badge No.</p>
                        <p className="mt-1 font-semibold text-black">
                          EXP-{String(index + 1).padStart(2, "0")}
                        </p>
                      </div>
                      <div>
                        <p className="text-neutral-400">Type</p>
                        <p className="mt-1 font-semibold text-black">
                          {experience.employmentType || "—"}
                        </p>
                      </div>
                      <div>
                        <p className="text-neutral-400">Duration</p>
                        <p className="mt-1 font-semibold text-black">
                          {experience.startDate}
                          {" – "}
                          {experience.currentlyWorking
                            ? "Present"
                            : experience.endDate}
                        </p>
                      </div>
                      <div>
                        <p className="flex items-center gap-1 text-neutral-400">
                          <MapPin size={11} />
                          Location
                        </p>
                        <p className="mt-1 font-semibold text-black">
                          {experience.location || "Remote"}
                        </p>
                      </div>
                    </div>

                    {/* barcode */}
                    <div
                      className="mt-5 h-6 w-full rounded-sm"
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
                            className="rounded-full border-[2px] border-black/20 px-3 py-1 text-xs font-medium text-neutral-600"
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