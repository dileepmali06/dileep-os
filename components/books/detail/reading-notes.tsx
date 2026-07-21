import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

import { Container } from "../../ui/container";

type ReadingNotesProps = {
  notes?: PortableTextBlock[];
};

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="leading-relaxed text-neutral-700">{children}</p>,
    h3: ({ children }) => <h4 className="mt-4 text-lg font-black first:mt-0">{children}</h4>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-2 list-disc space-y-1.5 pl-5 text-neutral-700">{children}</ul>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-neutral-900">{children}</strong>,
  },
};

export default function ReadingNotes({ notes }: ReadingNotesProps) {
  if (!notes?.length) return null;

  return (
    <section className="pb-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-center font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
            — torn from the notebook —
          </p>

          <div
            className="relative -rotate-1 border-x-[2px] border-b-[2px] border-black bg-white pb-9 pl-14 pr-7 pt-8 shadow-[7px_10px_0px_rgba(0,0,0,0.15)] sm:pr-10"
            style={{
              clipPath:
                "polygon(0% 4%, 3% 1%, 6% 3%, 9% 0%, 12% 3%, 15% 1%, 18% 4%, 21% 1%, 24% 3%, 27% 0%, 30% 3%, 33% 1%, 36% 4%, 39% 1%, 42% 3%, 45% 0%, 48% 3%, 51% 1%, 54% 4%, 57% 1%, 60% 3%, 63% 0%, 66% 3%, 69% 1%, 72% 4%, 75% 1%, 78% 3%, 81% 0%, 84% 3%, 87% 1%, 90% 4%, 93% 1%, 96% 3%, 100% 0%, 100% 100%, 0% 100%)",
              backgroundImage:
                "repeating-linear-gradient(to bottom, transparent, transparent 32px, rgba(0,0,0,0.06) 33px)",
            }}
          >
            {/* spiral binding holes */}
            <div className="absolute bottom-6 left-5 top-8 flex flex-col justify-between py-2">
              {Array.from({ length: 7 }).map((_, i) => (
                <span
                  key={i}
                  className="h-3 w-3 rounded-full border border-black/20 bg-neutral-100 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.15)]"
                />
              ))}
            </div>

            {/* red margin rule */}
            <div className="absolute bottom-0 left-9 top-4 w-[1.5px] bg-[var(--pink)]/50" />

            <div className="space-y-2 text-[16px] leading-[32px] sm:text-[17px] sm:leading-[34px]">
              <PortableText value={notes} components={components} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}