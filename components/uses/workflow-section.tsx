import {
  Globe,
  Terminal,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface WorkflowSectionProps {
  browser?: string;
  terminal?: string;
}

export function WorkflowSection({
  browser,
  terminal,
}: WorkflowSectionProps) {

  if (!browser && !terminal) {
    return null;
  }

  return (
    <section className="section-padding bg-neutral-50">
      <Container>

        <SectionHeading
          eyebrow="Workflow"
          title="Browser & Terminal"
          description="The tools I use every day for testing, debugging and interacting with systems."
          align="center"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {/* Browser */}
          <div className="rounded-2xl border-[3px] border-black bg-white p-8 shadow-[8px_8px_0px_#000]">

            <div className="flex h-16 w-16 items-center justify-center rounded-xl border-[3px] border-black bg-[var(--green)]">
              <Globe size={28} />
            </div>

            <h3 className="mt-6 font-heading text-3xl font-black">
              {browser}
            </h3>

            <p className="mt-4 leading-relaxed text-neutral-600">
              My primary browser for development, testing and debugging web applications.
            </p>

          </div>

          {/* Terminal */}
          <div className="rounded-2xl border-[3px] border-black bg-white p-8 shadow-[8px_8px_0px_#000]">

            <div className="flex h-16 w-16 items-center justify-center rounded-xl border-[3px] border-black bg-[var(--pink)]">
              <Terminal size={28} />
            </div>

            <h3 className="mt-6 font-heading text-3xl font-black">
              {terminal}
            </h3>

            <p className="mt-4 leading-relaxed text-neutral-600">
              Where most commands run, builds happen and deployments begin.
            </p>

          </div>

        </div>

      </Container>
    </section>
  );
}