import {
  Code2,
  Puzzle,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface EditorSectionProps {
  editor?: string;
  extensions?: string[];
}

export function EditorSection({
  editor,
  extensions,
}: EditorSectionProps) {
  if (!editor && !extensions?.length) {
    return null;
  }

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Editor"
          title="My Coding Environment"
          description="The editor and extensions that power my daily development workflow."
          align="center"
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[350px_1fr]">

          {/* Editor Card */}
          <div className="rounded-2xl border-[3px] border-black bg-white p-8 shadow-[8px_8px_0px_#000]">

            <div className="flex h-16 w-16 items-center justify-center rounded-xl border-[3px] border-black bg-[var(--blue)]">
              <Code2 size={28} />
            </div>

            <h3 className="mt-6 font-heading text-3xl font-black">
              {editor}
            </h3>

            <p className="mt-4 text-neutral-600 leading-relaxed">
              My primary code editor for building applications,
              debugging issues and shipping products.
            </p>
          </div>

          {/* Extensions */}
          <div className="rounded-2xl border-[3px] border-black bg-white p-8 shadow-[8px_8px_0px_#000]">

            <div className="flex items-center gap-3">
              <Puzzle size={24} />
              <h3 className="font-heading text-3xl font-black">
                Extensions
              </h3>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {extensions?.map(
                (extension) => (
                  <div
                    key={extension}
                    className="flex items-center gap-2 rounded-xl border-[3px] border-black bg-neutral-100 px-4 py-3"
                  >
                    <Sparkles size={16} />
                    <span className="font-medium">
                      {extension}
                    </span>
                  </div>
                )
              )}
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}