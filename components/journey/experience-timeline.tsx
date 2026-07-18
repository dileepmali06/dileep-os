"use client";

import { MapPin, CalendarDays, Sparkles, Backpack } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Experience {
  _id: string;
  company: string;
  position: string;
  employmentType?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  currentlyWorking?: boolean;
  achievements?: string[];
  technologies?: string[];
}

interface ExperienceTimelineProps {
  experience: Experience[];
}

export function ExperienceTimeline({ experience }: ExperienceTimelineProps) {
  if (!experience?.length) {
    return null;
  }

  return (
    <section className="section-padding bg-neutral-50">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Professional Experience"
          description="Companies, products and teams that shaped my engineering journey."
          align="center"
        />

        <div className="mx-auto mt-16 max-w-4xl space-y-8">
          {experience.map((item, index) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-[28px] border-[4px] border-black bg-white shadow-[10px_10px_0px_#000]"
            >
              <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-[var(--blue)] opacity-20" />

              {/* stop header */}
              <div className="relative flex items-center justify-between gap-4 border-b-[3px] border-black bg-neutral-50 px-7 py-3">
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-neutral-400">
                  Stop {String(index + 1).padStart(2, "0")}
                </span>
                {item.currentlyWorking && (
                  <span className="rounded-full border-[2px] border-black bg-[var(--green)] px-3 py-0.5 text-xs font-bold">
                    Currently Here
                  </span>
                )}
              </div>

              <div className="relative z-10 p-7 sm:p-8">
                <div className="flex items-start gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-[3px] border-black bg-[var(--blue)]">
                    <MapPin size={26} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                      Destination
                    </p>
                    <h3 className="font-heading text-2xl font-black leading-tight sm:text-3xl">
                      {item.company}
                    </h3>
                    <p className="mt-1.5 text-lg font-semibold text-neutral-700">
                      {item.position}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-4 text-sm text-neutral-500">
                      {item.location && (
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} />
                          {item.location}
                        </span>
                      )}
                      <span className="flex items-center gap-1.5">
                        <CalendarDays size={14} />
                        Stayed {item.startDate?.slice(0, 7)}
                        {" – "}
                        {item.currentlyWorking ? "Present" : item.endDate?.slice(0, 7)}
                      </span>
                    </div>
                  </div>

                  {item.employmentType && (
                    <span className="hidden shrink-0 rounded-full border-[3px] border-black bg-neutral-100 px-4 py-2 text-sm font-bold sm:inline-block">
                      {item.employmentType}
                    </span>
                  )}
                </div>

                {item.achievements && item.achievements.length > 0 && (
                  <div className="mt-7 border-t-2 border-dashed border-black/10 pt-6">
                    <h4 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
                      <Sparkles size={13} />
                      Trip Highlights
                    </h4>
                    <div className="mt-3 space-y-2.5">
                      {item.achievements.map((achievement) => (
                        <div
                          key={achievement}
                          className="rounded-xl border-[2px] border-black/15 bg-neutral-50 px-4 py-3 text-sm leading-relaxed"
                        >
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {item.technologies && item.technologies.length > 0 && (
                  <div className="mt-6">
                    <h4 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
                      <Backpack size={13} />
                      Packed For This Trip
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border-[2px] border-black bg-[var(--yellow)] px-3.5 py-1.5 text-sm font-semibold"
                        >
                          {tech}
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