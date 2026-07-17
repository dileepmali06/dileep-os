import {
  Target,
  CheckCircle2,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface CurrentGoalsProps {
  data: {
    currentGoals?: string[];
  };
}

export function CurrentGoals({
  data,
}: CurrentGoalsProps) {

  if (!data.currentGoals?.length) {
    return null;
  }

  return (
    <section className="section-padding bg-neutral-50">
      <Container>

        <SectionHeading
          eyebrow="Goals"
          title="Current Goals"
          description="The objectives currently guiding my decisions and daily work."
          align="center"
        />

        <div className="mx-auto mt-16 max-w-4xl rounded-[28px] border-[4px] border-black bg-white p-8 shadow-[10px_10px_0px_#000]">

          <div className="space-y-5">

            {data.currentGoals.map(
              (
                goal,
                index
              ) => (
                <div
                  key={goal}
                  className="flex items-start gap-4 rounded-2xl border-[3px] border-black bg-neutral-50 p-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-[3px] border-black bg-[var(--yellow)]">
                    {index + 1}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <Target
                        size={18}
                      />

                      <h3 className="font-heading text-xl font-black">
                        {goal}
                      </h3>
                    </div>

                    <div className="mt-3 flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-neutral-500">
                      <CheckCircle2
                        size={14}
                      />
                      Active Goal
                    </div>
                  </div>
                </div>
              )
            )}

          </div>

        </div>

      </Container>
    </section>
  );
}