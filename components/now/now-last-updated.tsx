import { Radio, CalendarDays } from "lucide-react";

import { Container } from "@/components/ui/container";

interface LastUpdatedProps {
  data: {
    updatedAt?: string;
  };
}

function relativeTime(dateString: string) {
  const diffMs = Date.now() - new Date(dateString).getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) return "today";
  if (diffDays === 1) return "yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} week${diffDays >= 14 ? "s" : ""} ago`;
  return `${Math.floor(diffDays / 30)} month${diffDays >= 60 ? "s" : ""} ago`;
}

export function LastUpdated({ data }: LastUpdatedProps) {
  if (!data.updatedAt) {
    return null;
  }

  const formattedDate = new Date(data.updatedAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="pb-24 pt-12">
      <Container>
        <div className="mx-auto max-w-3xl rounded-[24px] border-[4px] border-dashed border-black bg-neutral-50 p-8 text-center sm:p-10">
          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-[3px] border-black bg-white">
              <Radio size={28} />
            </div>
          </div>

          <h3 className="mt-6 font-heading text-3xl font-black">
            Stay Tuned — This Page Evolves With Me
          </h3>

          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-neutral-600">
            The priorities, goals and projects shown here change as my career
            and interests evolve. This broadcast is updated whenever
            something meaningful changes.
          </p>

          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border-[3px] border-black bg-white px-5 py-3 font-mono text-sm font-semibold shadow-[5px_5px_0px_#000]">
            <CalendarDays size={16} />
            Last broadcast: {formattedDate}
            <span className="text-neutral-300">·</span>
            <span className="text-neutral-400">{relativeTime(data.updatedAt)}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}