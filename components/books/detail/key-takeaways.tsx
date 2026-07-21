import { Lightbulb } from "lucide-react";

import { Container } from "../../ui/container";

type KeyTakeawaysProps = {
  keyTakeaways?: string[];
};

export default function KeyTakeaways({ keyTakeaways }: KeyTakeawaysProps) {
  if (!keyTakeaways?.length) return null;

  return (
    <section className="pb-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-2.5">
            <Lightbulb size={17} />
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500">
              Dog-eared pages
            </h2>
          </div>

          <h3 className="mt-1.5 font-heading text-2xl font-black">Key Takeaways</h3>

          <div className="mt-6 space-y-4">
            {keyTakeaways.map((point, index) => (
              <div
                key={point}
                className="relative overflow-hidden rounded-lg border-[2px] border-black bg-[#fbf8f0] py-4 pl-6 pr-10 shadow-[4px_4px_0px_#000]"
              >
                {/* folded corner */}
                <div className="absolute right-0 top-0 h-0 w-0 border-b-[26px] border-l-[26px] border-b-transparent border-l-[var(--green)]" />
                <div className="absolute right-0 top-0 h-0 w-0 border-b-[26px] border-l-[26px] border-b-transparent border-l-black/15" />

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 font-heading text-base font-black text-black/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}