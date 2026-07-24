import { Highlighter } from "lucide-react";

import { Container } from "../../ui/container";

type ResumeHighlightsProps = {
  highlights?: string[];
};

const markerColors = ["var(--yellow)", "var(--green)", "var(--pink)", "var(--blue)"];

export default function ResumeHighlights({ highlights }: ResumeHighlightsProps) {
  if (!highlights?.length) return null;

  return (
    <section className="pb-12">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-2.5">
            <Highlighter size={16} />
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500">
              Marked important
            </h2>
          </div>

          <h3 className="mt-1.5 font-heading text-2xl font-black">Highlights</h3>

          <div className="mt-6 flex flex-wrap gap-x-1.5 gap-y-4">
            {highlights.map((item, index) => {
              const marker = markerColors[index % markerColors.length];
              return (
                <span
                  key={item}
                  className="relative text-base font-semibold text-neutral-800"
                  style={{
                    backgroundImage: `linear-gradient(${marker}, ${marker})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 42%",
                    backgroundPosition: "0 85%",
                    padding: "0 4px",
                  }}
                >
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}