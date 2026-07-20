import { Lightbulb } from "lucide-react";

import { Container } from "../../ui/container";

type KeyTakeawaysProps = {
  keyTakeaways?: string[];
};

export default function KeyTakeaways({ keyTakeaways }: KeyTakeawaysProps) {
  if (!keyTakeaways?.length) return null;

  return (
    <section className="pb-4">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border-[3px] border-black bg-[var(--cream)] p-6 shadow-[7px_7px_0px_#000] sm:p-8">
            <div className="flex items-center gap-2.5">
              <Lightbulb size={17} />
              <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-600">
                Key takeaways
              </h2>
            </div>

            <div className="mt-5 space-y-0">
              {keyTakeaways.map((point, index) => (
                <div
                  key={point}
                  className={`flex items-start gap-3.5 py-3.5 ${
                    index !== 0 ? "border-t-[2px] border-dashed border-black/15" : ""
                  }`}
                >
                  <span className="mt-0.5 font-heading text-lg font-black text-black/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}