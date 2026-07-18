import { Radio, CalendarDays } from "lucide-react";

import { Container } from "@/components/ui/container";

interface NowHeroProps {
  data: {
    sectionTitle?: string;
    sectionDescription?: string;
    heroDescription?: string;
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

export function NowHero({ data }: NowHeroProps) {
  return (
    <section className="section-padding">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          {/* live badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border-[3px] border-black bg-black px-5 py-2 font-mono text-sm font-bold text-white shadow-[4px_4px_0px_#000]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            LIVE
          </div>

          <h1 className="mt-8 font-heading text-5xl font-black leading-tight md:text-7xl">
            {data.sectionTitle}
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600 md:text-xl">
            {data.sectionDescription}
          </p>

          {/* broadcast panel */}
          <div className="relative mx-auto mt-12 max-w-3xl rounded-[28px] border-[4px] border-black bg-white p-8 text-left shadow-[10px_10px_0px_#000] sm:p-10">
            <span className="absolute -right-3 -top-3 flex items-center gap-1.5 rounded-full border-[3px] border-black bg-[var(--yellow)] px-3.5 py-1.5 text-xs font-bold shadow-[3px_3px_0px_#000]">
              <Radio size={12} />
              ON AIR
            </span>

            <p className="text-lg leading-relaxed text-neutral-700">
              {data.heroDescription}
            </p>

            {data.updatedAt && (
              <div className="mt-8 flex flex-wrap items-center gap-2 border-t-[3px] border-dashed border-black/20 pt-6 font-mono text-sm text-neutral-500">
                <CalendarDays size={16} />
                Last broadcast on{" "}
                {new Date(data.updatedAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
                <span className="text-neutral-300">·</span>
                <span className="text-neutral-400">
                  {relativeTime(data.updatedAt)}
                </span>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}