import {
  GraduationCap,
  CalendarDays,
} from "lucide-react";

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

export function EducationTimeline({
  education,
}: Props) {
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

          {education.map(
            (item) => (
              <div
                key={item._id}
                className="rounded-[28px] border-[4px] border-black bg-white p-8 shadow-[10px_10px_0px_#000]"
              >
                <div className="flex items-start gap-5">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-[3px] border-black bg-[var(--yellow)]">
                    <GraduationCap size={28} />
                  </div>

                  <div className="flex-1">

                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-heading text-3xl font-black">
                        {item.degree}
                      </h3>

                      {item.currentlyStudying && (
                        <span className="rounded-full border-[2px] border-black bg-[var(--green)] px-3 py-1 text-xs font-bold">
                          Current
                        </span>
                      )}
                    </div>

                    <p className="mt-2 text-lg font-semibold">
                      {item.institution}
                    </p>

                    {item.fieldOfStudy && (
                      <p className="text-neutral-500">
                        {item.fieldOfStudy}
                      </p>
                    )}

                    <div className="mt-4 flex items-center gap-2 text-sm text-neutral-500">
                      <CalendarDays size={16} />
                      {item.startDate?.slice(0, 4)}
                      {" - "}
                      {item.currentlyStudying
                        ? "Present"
                        : item.endDate?.slice(0, 4)}
                    </div>

                    {item.grade && (
                      <div className="mt-4">
                        <span className="rounded-full border-[2px] border-black px-3 py-1 text-sm font-semibold">
                          {item.grade}
                        </span>
                      </div>
                    )}

                    {item.skills?.length ? (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.skills.map(
                          (skill) => (
                            <span
                              key={skill}
                              className="rounded-full bg-neutral-100 px-3 py-1 text-sm"
                            >
                              {skill}
                            </span>
                          )
                        )}
                      </div>
                    ) : null}

                  </div>

                </div>
              </div>
            )
          )}

        </div>

      </Container>
    </section>
  );
}