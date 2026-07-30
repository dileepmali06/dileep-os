"use client";

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "next-sanity";
import { GraduationCap, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { urlFor } from "@/sanity/lib/image";
import { portableTextComponents } from "./about-portable-text-components";

type SanityImageSource = Parameters<typeof urlFor>[0];

interface Education {
  _id: string;
  institution: string;
  degree: string;
  fieldOfStudy?: string;
  startDate?: string;
  endDate?: string;
  currentlyStudying?: boolean;
  grade?: string;
  description?: PortableTextBlock[];
  skills?: string[];
  featured?: boolean;
  logo?: SanityImageSource;
}

interface EducationSectionProps {
  data: Education[];
}

export function EducationSection({ data }: EducationSectionProps) {
  if (!data?.length) {
    return null;
  }

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Education"
          title="Academic Journey"
          description="The educational milestones shaping my engineering foundation."
          align="center"
        />

        {/* Outer Gap Spacing & Responsive Shadows */}
        <div className="mx-auto mt-10 sm:mt-14 lg:mt-16 max-w-4xl space-y-8 sm:space-y-12">
          {data.map((education, index) => (
            <motion.div
              key={education._id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="relative border-[3px] border-black bg-white shadow-[6px_6px_0px_#000] sm:shadow-[10px_10px_0px_#000]"
            >
              {/* Seal Stamp Badge (Responsive Position, Scale and Text alignment) */}
              <div
                className={`absolute -right-3 -top-5 z-10 flex h-16 w-16 sm:h-20 sm:w-20 rotate-12 flex-col items-center justify-center rounded-full border-[2.5px] sm:border-[3px] border-dashed text-center select-none ${
                  education.currentlyStudying
                    ? "border-black bg-(--yellow)"
                    : "border-black bg-(--green)"
                }`}
              >
                <span className="whitespace-pre-line font-mono text-[8px] sm:text-[9px] font-bold uppercase leading-tight text-black">
                  {education.currentlyStudying ? "In\nProgress" : "Degree\nAwarded"}
                </span>
              </div>

              <div className="m-1.5 border-[1.5px] sm:border-2 border-black/15 p-4 sm:m-3 sm:p-8 md:p-10">
                {/* Academic Record Header Line */}
                <div className="flex items-center justify-between border-b-2 border-black/10 pb-3 sm:pb-4">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-neutral-400">
                    <GraduationCap className="size-3.5 sm:size-4" />
                    Academic Record
                  </div>
                </div>

                {/* Institution & Degree Title block */}
                <div className="mt-5 sm:mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
                  {education.logo ? (
                    <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 overflow-hidden rounded-xl border-[2.5px] sm:border-[3px] border-black bg-white p-1.5">
                      <Image
                        src={urlFor(education.logo).width(200).fit("max").url()}
                        alt={education.institution}
                        fill
                        className="object-contain p-0.5"
                      />
                    </div>
                  ) : (
                    <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-xl border-[2.5px] sm:border-[3px] border-black bg-neutral-50 text-neutral-800">
                      <GraduationCap className="size-5 sm:size-6.5" />
                    </div>
                  )}

                  <div className="min-w-0">
                    <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-black leading-tight text-neutral-900 wrap-break-word">
                      {education.degree}
                    </h3>
                    {education.fieldOfStudy && (
                      <p className="mt-1 text-xs sm:text-sm md:text-base text-neutral-500 font-medium wrap-break-word">
                        {education.fieldOfStudy}
                      </p>
                    )}
                    <p className="mt-0.5 text-xs sm:text-sm md:text-base font-bold text-neutral-700 wrap-break-word">
                      {education.institution}
                    </p>
                  </div>
                </div>

                {/* Form-Style Stat Lines (Mobile optimized font scale) */}
                <div className="mt-6 sm:mt-8 space-y-2.5 sm:space-y-3 font-mono text-xs sm:text-sm">
                  <div className="flex items-baseline gap-2">
                    <span className="shrink-0 text-neutral-400">Duration</span>
                    <span className="flex-1 border-b border-dotted border-black/20" />
                    <span className="shrink-0 font-semibold text-neutral-900">
                      {education.startDate
                        ? new Date(education.startDate).getFullYear()
                        : "-"}
                      {" – "}
                      {education.currentlyStudying
                        ? "Present"
                        : education.endDate
                          ? new Date(education.endDate).getFullYear()
                          : "-"}
                    </span>
                  </div>

                  {education.grade && (
                    <div className="flex items-baseline gap-2">
                      <span className="shrink-0 text-neutral-400">Grade</span>
                      <span className="flex-1 border-b border-dotted border-black/20" />
                      <span className="shrink-0 font-semibold text-neutral-900">
                        {education.grade}
                      </span>
                    </div>
                  )}

                  {education.featured && (
                    <div className="flex items-baseline gap-2">
                      <span className="shrink-0 text-neutral-400">Status</span>
                      <span className="flex-1 border-b border-dotted border-black/20" />
                      <span className="shrink-0 font-semibold text-neutral-900">
                        Highlighted
                      </span>
                    </div>
                  )}
                </div>

                {/* PortableText Description */}
                {education.description && education.description.length > 0 && (
                  <div className="mt-6 sm:mt-8 border-t-2 border-black/10 pt-5 sm:pt-6 text-sm sm:text-base leading-relaxed text-neutral-600 wrap-break-word">
                    <PortableText
                      value={education.description}
                      components={portableTextComponents}
                    />
                  </div>
                )}

                {/* Coursework / Skills Badges */}
                {education.skills && education.skills.length > 0 && (
                  <div className="mt-6 sm:mt-8">
                    <div className="mb-3 flex items-center gap-1.5 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-neutral-400">
                      <BookOpen className="size-3.5" />
                      Coursework &amp; Skills
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {education.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border-2 border-black/15 bg-neutral-50 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-medium text-neutral-600 select-none wrap-break-word"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
