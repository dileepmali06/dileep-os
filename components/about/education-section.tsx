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

        <div className="mx-auto mt-16 max-w-4xl space-y-10">
          {data.map((education, index) => (
            <motion.div
              key={education._id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="relative border-[3px] border-black bg-white shadow-[10px_10px_0px_#000]"
            >
              {/* seal stamp */}
              <div
                className={`absolute -right-2 -top-5 z-10 flex  h-20 w-20 rotate-12 flex-col items-center justify-center rounded-full border-[3px] border-dashed text-center ${
                  education.currentlyStudying
                    ? "border-black bg-[var(--yellow)]"
                    : "border-black bg-[var(--green)]"
                }`}
              >
                <span className="font-mono text-[9px] font-bold uppercase leading-tight">
                  {education.currentlyStudying ? "In\nProgress" : "Degree\nAwarded"}
                </span>
              </div>

              {/* double-border certificate frame */}
              <div className="m-2 border-2 border-black/15 p-6 sm:m-3 sm:p-10">
                {/* letterhead */}
                <div className="flex items-center justify-between border-b-2 border-black/10 pb-4">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-400">
                    <GraduationCap size={14} />
                    Academic Record
                  </div>
                </div>

                {/* degree title */}
                <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center">
                  {education.logo ? (
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border-[3px] border-black bg-white p-2">
                      <Image
                        src={urlFor(education.logo).width(200).fit("max").url()}
                        alt={education.institution}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                  ) : (
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border-[3px] border-black bg-neutral-50">
                      <GraduationCap size={26} />
                    </div>
                  )}

                  <div>
                    <h3 className="font-heading text-2xl font-black leading-tight sm:text-3xl">
                      {education.degree}
                    </h3>
                    {education.fieldOfStudy && (
                      <p className="mt-1 text-neutral-500">
                        {education.fieldOfStudy}
                      </p>
                    )}
                    <p className="mt-1 font-semibold text-neutral-700">
                      {education.institution}
                    </p>
                  </div>
                </div>

                {/* form-style stat lines */}
                <div className="mt-8 space-y-3 font-mono text-sm">
                  <div className="flex items-baseline gap-2">
                    <span className="shrink-0 text-neutral-400">Duration</span>
                    <span className="flex-1 translate-y-[-3px] border-b border-dotted border-black/25" />
                    <span className="shrink-0 font-semibold">
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
                      <span className="flex-1 translate-y-[-3px] border-b border-dotted border-black/25" />
                      <span className="shrink-0 font-semibold">
                        {education.grade}
                      </span>
                    </div>
                  )}

                  {education.featured && (
                    <div className="flex items-baseline gap-2">
                      <span className="shrink-0 text-neutral-400">Status</span>
                      <span className="flex-1 translate-y-[-3px] border-b border-dotted border-black/25" />
                      <span className="shrink-0 font-semibold">
                        Highlighted
                      </span>
                    </div>
                  )}
                </div>

                {/* description */}
                {education.description && education.description.length > 0 && (
                  <div className="mt-8 border-t-2 border-black/10 pt-6">
                    <PortableText
                      value={education.description}
                      components={portableTextComponents}
                    />
                  </div>
                )}

                {/* coursework / skills */}
                {education.skills && education.skills.length > 0 && (
                  <div className="mt-6">
                    <div className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-400">
                      <BookOpen size={13} />
                      Coursework &amp; Skills
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {education.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border-[2px] border-black/20 px-3 py-1 text-xs font-medium text-neutral-600"
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