import { Clock3, CalendarDays } from "lucide-react";

import { Container } from "@/components/ui/container";

interface NowHeroProps {
  data: {
    sectionTitle?: string;
    sectionDescription?: string;
    heroDescription?: string;
    updatedAt?: string;
  };
}

export function NowHero({
  data,
}: NowHeroProps) {
  return (
    <section className="section-padding">
      <Container>
        <div className="mx-auto max-w-4xl text-center">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border-[3px] border-black bg-[var(--yellow)] px-5 py-2 font-mono text-sm font-bold shadow-[4px_4px_0px_#000]">
            <Clock3 size={16} />
            NOW
          </div>

          {/* Title */}
          <h1 className="mt-8 font-heading text-5xl font-black leading-tight md:text-7xl">
            {data.sectionTitle}
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600 md:text-xl">
            {data.sectionDescription}
          </p>

          {/* Long Description */}
          <div className="mx-auto mt-12 max-w-3xl rounded-[28px] border-[4px] border-black bg-white p-8 text-left shadow-[10px_10px_0px_#000]">
            <p className="text-lg leading-relaxed text-neutral-700">
              {data.heroDescription}
            </p>

            {data.updatedAt && (
              <div className="mt-8 flex items-center gap-2 border-t-[3px] border-dashed border-black/20 pt-6 font-mono text-sm text-neutral-500">
                <CalendarDays size={16} />
                Last updated on{" "}
                {new Date(
                  data.updatedAt
                ).toLocaleDateString(
                  "en-US",
                  {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }
                )}
              </div>
            )}
          </div>

        </div>
      </Container>
    </section>
  );
}