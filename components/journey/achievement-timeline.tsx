"use client";

import {
  Trophy,
  CalendarDays,
  Star,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";

interface Achievement {
  _id: string;
  title: string;
  slug?: {
    current: string;
  };
  category?: string;
  description?: string;
  achievementDate?: string;
  metric?: string;
  skills?: string[];
  proofUrl?: string;
  featured?: boolean;
}

interface AchievementTimelineProps {
  achievements: Achievement[];
}

const dotColors = ["var(--yellow)", "var(--green)", "var(--pink)"];

export function AchievementTimeline({ achievements }: AchievementTimelineProps) {
  if (!achievements.length) {
    return null;
  }

  return (
    <section className="section-padding bg-neutral-50">
      <Container>
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones & Achievements"
          description="Important moments that marked progress in my learning and engineering journey."
          align="center"
        />

        <div className="relative mx-auto mt-20 max-w-4xl">
          {/* spine */}
          <div className="absolute left-5 top-0 h-full w-[3px] bg-black/15 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-14">
            {achievements.map((achievement, index) => {
              const isRight = index % 2 === 1;
              const dotColor = dotColors[index % dotColors.length];

              return (
                <div
                  key={achievement._id}
                  className="relative pl-14 md:grid md:grid-cols-2 md:gap-x-10 md:pl-0"
                >
                  {/* connector dot */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.4 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.35, type: "spring", bounce: 0.5 }}
                    className="absolute left-5 top-2 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-[3px] border-black shadow-[3px_3px_0px_#000] md:left-1/2"
                    style={{ background: dotColor }}
                  >
                    <Trophy size={15} />
                  </motion.div>

                  {/* spacer for the opposite column on desktop */}
                  <div className={isRight ? "md:order-1" : "md:order-2"} />

                  <motion.div
                    initial={{ opacity: 0, y: 40, x: isRight ? 20 : -20 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className={`rounded-3xl border-[3px] border-black bg-white p-6 shadow-[7px_7px_0px_#000] sm:p-7 ${isRight ? "md:order-2" : "md:order-1 md:text-right"
                      }`}
                  >
                    <div
                      className={`flex flex-wrap items-center gap-2.5 ${!isRight ? "md:justify-end" : ""
                        }`}
                    >
                      <h3 className="font-heading text-2xl font-black">
                        {achievement.title}
                      </h3>

                      {achievement.featured && (
                        <span className="flex items-center gap-1 rounded-full border-[2px] border-black bg-[var(--green)] px-2.5 py-1 text-[10px] font-bold">
                          <Star size={11} />
                          Featured
                        </span>
                      )}
                    </div>

                    <div
                      className={`mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-500 ${!isRight ? "md:justify-end" : ""
                        }`}
                    >
                      {achievement.category && (
                        <span className="font-semibold uppercase tracking-wide">
                          {achievement.category}
                        </span>
                      )}

                      {achievement.achievementDate && (
                        <span className="flex items-center gap-1.5">
                          <CalendarDays size={13} />
                          {new Date(achievement.achievementDate).toLocaleDateString("en-US", {
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                      )}
                    </div>

                    {achievement.metric && (
                      <div
                        className={`mt-4 inline-block rounded-xl border-[2px] border-black bg-[var(--pink)] px-4 py-2 shadow-[3px_3px_0px_#000]`}
                      >
                        <p className="font-heading text-xl font-black leading-none">
                          {achievement.metric}
                        </p>
                      </div>
                    )}

                    {achievement.description && (
                      <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                        {achievement.description}
                      </p>
                    )}

                    {achievement.skills?.length ? (
                      <div
                        className={`mt-4 flex flex-wrap gap-2 ${!isRight ? "md:justify-end" : ""
                          }`}
                      >
                        {achievement.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border-[2px] border-black bg-neutral-100 px-3 py-1 text-xs font-semibold"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    {achievement.proofUrl && (
                      <div className="mt-5">
                        <Button variant="outline">

                          <a href={achievement.proofUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Proof
                            <ExternalLink size={16} className="ml-2" />
                          </a>
                        </Button>
                      </div>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}