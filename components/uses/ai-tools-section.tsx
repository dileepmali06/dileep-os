import {
  Bot,
  Sparkles,
  Brain,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface AIToolsSectionProps {
  data: string[];
}

export function AIToolsSection({
  data,
}: AIToolsSectionProps) {
  if (!data?.length) {
    return null;
  }

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="AI Tools"
          title="My AI Co-Pilots"
          description="The AI tools that accelerate my learning, coding and problem solving."
          align="center"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map(
            (
              tool,
              index
            ) => (
              <div
                key={tool}
                className="rounded-2xl border-[3px] border-black bg-white p-6 shadow-[8px_8px_0px_#000]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border-[3px] border-black bg-[var(--green)]">
                  {index % 2 === 0 ? (
                    <Bot size={24} />
                  ) : (
                    <Brain size={24} />
                  )}
                </div>

                <h3 className="mt-5 font-heading text-2xl font-black">
                  {tool}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-sm text-neutral-500">
                  <Sparkles size={14} />
                  AI Assisted Workflow
                </div>

                <p className="mt-4 text-neutral-600 leading-relaxed">
                  Used regularly for development, research,
                  debugging and improving productivity.
                </p>
              </div>
            )
          )}
        </div>
      </Container>
    </section>
  );
}