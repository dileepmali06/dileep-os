import {
  CheckSquare,
  Calendar,
  StickyNote,
  Clock,
  Workflow,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [
  CheckSquare,
  Calendar,
  StickyNote,
  Clock,
  Workflow,
];

interface ProductivityToolsSectionProps {
  data: string[];
}

export function ProductivityToolsSection({
  data,
}: ProductivityToolsSectionProps) {

  if (!data?.length) {
    return null;
  }

  return (
    <section className="section-padding bg-neutral-50">
      <Container>

        <SectionHeading
          eyebrow="Productivity"
          title="Tools That Keep Me Organized"
          description="The apps and systems I use to manage work, ideas and learning."
          align="center"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map(
            (
              tool,
              index
            ) => {

              const Icon =
                icons[
                  index %
                  icons.length
                ];

              return (
                <div
                  key={tool}
                  className="rounded-2xl border-[3px] border-black bg-white p-6 shadow-[8px_8px_0px_#000]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border-[3px] border-black bg-[var(--pink)]">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 font-heading text-2xl font-black">
                    {tool}
                  </h3>

                  <p className="mt-4 leading-relaxed text-neutral-600">
                    Helps me stay productive, organized and focused during development and learning.
                  </p>
                </div>
              );
            }
          )}
        </div>

      </Container>
    </section>
  );
}