import { History } from "lucide-react";

import { Container } from "../../ui/container";

type ResumeChangelogProps = {
  changeLog?: string[];
  version?: string;
};

export default function ResumeChangelog({ changeLog, version }: ResumeChangelogProps) {
  if (!changeLog?.length) return null;

  return (
    <section className="pb-12">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-2.5">
            <History size={16} />
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500">
              Revision log
            </h2>
          </div>

          <h3 className="mt-1.5 font-heading text-2xl font-black">
            What&apos;s new{version ? ` in ${version}` : ""}
          </h3>

          <div className="mt-5 overflow-hidden rounded-lg border-[2px] border-black bg-[#fbf8f0] shadow-[6px_6px_0px_#000]">
            {changeLog.map((item, index) => (
              <div
                key={item}
                className={`flex items-start gap-3.5 px-5 py-3.5 sm:px-7 ${
                  index !== 0 ? "border-t-[1.5px] border-dashed border-black/15" : ""
                }`}
              >
                <span className="mt-0.5 shrink-0 font-mono text-xs font-black text-black/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}