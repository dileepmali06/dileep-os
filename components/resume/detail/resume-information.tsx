import { FileText } from "lucide-react";

import { Container } from "../../ui/container";

type ResumeInformationProps = {
  description?: string;
  pageCount?: number;
  fileSize?: string;
};

export default function ResumeInformation({ description, pageCount, fileSize }: ResumeInformationProps) {
  const rows = [
    { label: "Pages", value: pageCount ? `${pageCount}` : null },
    { label: "File Size", value: fileSize },
  ].filter((r) => r.value);

  if (!description && rows.length === 0) return null;

  return (
    <section className="pb-12">
      <Container>
        <div className="relative mx-auto max-w-3xl rounded-lg border-[2px] border-black bg-[#fbf8f0] p-6 shadow-[6px_6px_0px_#000] sm:p-8">
          <div className="absolute left-6 top-6 h-3 w-3 rounded-full border border-black/30 bg-white shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2)]" />

          <div className="pl-8">
            {description && <p className="text-lg leading-relaxed text-neutral-700">{description}</p>}

            {rows.length > 0 && (
              <div
                className={`space-y-2.5 font-mono text-sm ${
                  description ? "mt-6 border-t-2 border-dashed border-black/15 pt-5" : ""
                }`}
              >
                {rows.map((row) => (
                  <div key={row.label} className="flex items-baseline gap-2">
                    <span className="flex shrink-0 items-center gap-1.5 uppercase text-neutral-400">
                      <FileText size={12} />
                      {row.label}
                    </span>
                    <span className="flex-1 translate-y-[-3px] border-b border-dotted border-black/25" />
                    <span className="shrink-0 font-semibold">{row.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}