import {
  Rocket,
  CalendarDays,
  Target,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Goal {
  _id: string;

  title: string;

  description?: string;

  category?: string;

  targetDate?: string;

  status?: string;

  priority?: number;
}

interface FutureRoadmapProps {
  goals: Goal[];
}

const statusColors = {
  planned: "var(--yellow)",
  progress: "var(--blue)",
  completed: "var(--green)",
};

export function FutureRoadmap({
  goals,
}: FutureRoadmapProps) {

  if (!goals.length) {
    return null;
  }

  return (
    <section className="section-padding bg-neutral-50">
      <Container>

        <SectionHeading
          eyebrow="Future"
          title="Where I'm Heading"
          description="The milestones and ambitions currently shaping my long-term direction."
          align="center"
        />

        <div className="mx-auto mt-16 max-w-5xl space-y-8">

          {goals.map(
            (goal, index) => (
              <div
                key={goal._id}
                className="relative rounded-[28px] border-[4px] border-black bg-white p-8 shadow-[10px_10px_0px_#000]"
              >

                <div className="flex items-start gap-5">

                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-[3px] border-black bg-[var(--yellow)]">
                    <Rocket size={28} />
                  </div>

                  <div className="flex-1">

                    <div className="flex flex-wrap items-center gap-3">

                      <span className="rounded-full border-[2px] border-black bg-black px-3 py-1 text-xs font-bold text-white">
                        Goal #{index + 1}
                      </span>

                      {goal.category && (
                        <span className="rounded-full border-[2px] border-black px-3 py-1 text-xs font-bold">
                          {goal.category}
                        </span>
                      )}

                    </div>

                    <h3 className="mt-4 font-heading text-3xl font-black">
                      {goal.title}
                    </h3>

                    {goal.description && (
                      <p className="mt-4 leading-relaxed text-neutral-600">
                        {goal.description}
                      </p>
                    )}

                    <div className="mt-6 flex flex-wrap gap-4">

                      {goal.targetDate && (
                        <div className="flex items-center gap-2 text-sm text-neutral-500">
                          <CalendarDays size={16} />
                          Target: {new Date(goal.targetDate).getFullYear()}
                        </div>
                      )}

                      {goal.status && (
                        <div className="flex items-center gap-2 text-sm text-neutral-500">
                          <Target size={16} />
                          {goal.status}
                        </div>
                      )}

                    </div>

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