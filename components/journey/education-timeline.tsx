"use client";

import { GraduationCap, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Education {
  _id: string;
  institution: string;
  degree: string;
  fieldOfStudy?: string;
  startDate?: string;
  endDate?: string;
  currentlyStudying?: boolean;
  grade?: string;
  skills?: string[];
}

interface Props {
  education: Education[];
}

export function EducationTimeline({ education }: Props) {
  if (!education?.length) {
    return null;
  }

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Education"
          title="Academic Journey"
          description="The institutions and programs that shaped my foundation."
          align="center"
        />

        <div className="mx-auto mt-16 max-w-4xl space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-[24px] border-[4px] border-black bg-white shadow-[10px_10px_0px_#000]"
            >
              {/* diagonal ink-stamp overlay */}
              <span
                className={`pointer-events-none absolute right-6 top-8 z-10 -rotate-12 select-none rounded-md border-4 px-3 py-1 font-heading text-lg font-black tracking-widest opacity-80 ${
                  item.currentlyStudying
                    ? "border-amber-500 text-amber-500"
                    : "border-green-600 text-green-600"
                }`}
              >
                {item.currentlyStudying ? "IN PROGRESS" : "GRANTED"}
              </span>

              <div className="border-b-[3px] border-black bg-neutral-50 px-7 py-3">
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-neutral-400">
                  Academic Visa · Entry {item.currentlyStudying ? "Pending" : "Granted"}
                </span>
              </div>

              <div className="p-7 sm:p-8">
                <div className="flex items-start gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-[3px] border-black bg-[var(--yellow)]">
                    <GraduationCap size={26} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading text-2xl font-black leading-tight sm:text-3xl">
                      {item.institution}
                    </h3>
                    <p className="mt-1.5 text-lg font-semibold text-neutral-700">
                      {item.degree}
                    </p>
                    {item.fieldOfStudy && (
                      <p className="text-neutral-500">{item.fieldOfStudy}</p>
                    )}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4 border-t-2 border-dashed border-black/10 pt-5">
                  <span className="flex items-center gap-2 font-mono text-sm text-neutral-500">
                    <CalendarDays size={15} />
                    Valid: {item.startDate?.slice(0, 4)}
                    {" – "}
                    {item.currentlyStudying ? "Present" : item.endDate?.slice(0, 4)}
                  </span>

                  {item.grade && (
                    <span className="rounded-full border-[2px] border-black px-3 py-1 text-sm font-semibold">
                      Class: {item.grade}
                    </span>
                  )}
                </div>

                {item.skills && item.skills.length > 0 && (
                  <div className="mt-5">
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                      Endorsements
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-neutral-100 px-3 py-1 text-sm"
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