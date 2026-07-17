import {
  Briefcase,
  MapPin,
  CalendarDays,
  Trophy,
} from "lucide-react";

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

export function ExperienceTimeline({
  experience,
}: ExperienceTimelineProps) {
  return (
    <section className="section-padding bg-neutral-50">
      <Container>

        <SectionHeading
          eyebrow="Experience"
          title="Professional Experience"
          description="Companies, products and teams that shaped my engineering journey."
          align="center"
        />

        <div className="mx-auto mt-16 max-w-5xl space-y-8">

          {experience.map(
            (
              item,
              index
            ) => (
              <div
                key={item._id}
                className="relative overflow-hidden rounded-[32px] border-[4px] border-black bg-white p-8 shadow-[10px_10px_0px_#000]"
              >
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-[var(--blue)] opacity-20" />

                <div className="relative z-10">

                  <div className="flex flex-wrap items-start justify-between gap-6">

                    <div className="flex gap-5">

                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-[3px] border-black bg-[var(--blue)]">
                        <Briefcase size={28} />
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-3">

                          <h3 className="font-heading text-3xl font-black">
                            {item.position}
                          </h3>

                          {item.currentlyWorking && (
                            <span className="rounded-full border-[2px] border-black bg-[var(--green)] px-3 py-1 text-xs font-bold">
                              Current
                            </span>
                          )}

                        </div>

                        <p className="mt-2 text-lg font-semibold">
                          {item.company}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-4 text-sm text-neutral-500">

                          {item.location && (
                            <div className="flex items-center gap-2">
                              <MapPin size={15} />
                              {item.location}
                            </div>
                          )}

                          <div className="flex items-center gap-2">
                            <CalendarDays size={15} />
                            {item.startDate?.slice(0, 7)}
                            {" - "}
                            {item.currentlyWorking
                              ? "Present"
                              : item.endDate?.slice(0, 7)}
                          </div>

                        </div>

                      </div>

                    </div>

                    {item.employmentType && (
                      <div className="rounded-full border-[3px] border-black bg-neutral-100 px-4 py-2 text-sm font-bold">
                        {item.employmentType}
                      </div>
                    )}

                  </div>

                  {/* Achievements */}
                  {item.achievements?.length ? (
                    <div className="mt-8">

                      <h4 className="flex items-center gap-2 font-bold">
                        <Trophy size={18} />
                        Key Achievements
                      </h4>

                      <div className="mt-4 space-y-3">
                        {item.achievements.map(
                          (
                            achievement
                          ) => (
                            <div
                              key={
                                achievement
                              }
                              className="rounded-xl border-[2px] border-black bg-neutral-50 px-4 py-3"
                            >
                              {achievement}
                            </div>
                          )
                        )}
                      </div>

                    </div>
                  ) : null}

                  {/* Technologies */}
                  {item.technologies?.length ? (
                    <div className="mt-8 flex flex-wrap gap-3">

                      {item.technologies.map(
                        (
                          tech
                        ) => (
                          <span
                            key={
                              tech
                            }
                            className="rounded-full border-[2px] border-black bg-[var(--yellow)] px-4 py-2 text-sm font-semibold"
                          >
                            {tech}
                          </span>
                        )
                      )}

                    </div>
                  ) : null}

                </div>
              </div>
            )
          )}

        </div>

      </Container>
    </section>
  );
}