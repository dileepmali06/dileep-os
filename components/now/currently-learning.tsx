import {
  Brain,
  BookOpen,
  GraduationCap,
  Cpu,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [
  Brain,
  BookOpen,
  GraduationCap,
  Cpu,
];

interface CurrentlyLearningProps {
  data: {
    currentlyLearning?: string[];
  };
}

export function CurrentlyLearning({
  data,
}: CurrentlyLearningProps) {

  if (!data.currentlyLearning?.length) {
    return null;
  }

  return (
    <section className="section-padding">
      <Container>

        <SectionHeading
          eyebrow="Learning"
          title="Currently Learning"
          description="Technologies, concepts and skills I'm actively investing time into right now."
          align="center"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {data.currentlyLearning.map(
            (
              item,
              index
            ) => {

              const Icon =
                icons[
                  index %
                  icons.length
                ];

              return (
                <div
                  key={item}
                  className="group rounded-[24px] border-[4px] border-black bg-white p-8 shadow-[8px_8px_0px_#000] transition-all duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_0px_#000]"
                >

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-[3px] border-black bg-[var(--green)]">
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-6 font-heading text-2xl font-black">
                    {item}
                  </h3>

                  <p className="mt-4 leading-relaxed text-neutral-600">
                    Currently studying and improving practical understanding through projects and experimentation.
                  </p>

                  <div className="mt-6 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-neutral-500">
                    <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[var(--green)]" />
                    In Progress
                  </div>

                </div>
              );
            }
          )}

        </div>

      </Container>
    </section>
  );
}