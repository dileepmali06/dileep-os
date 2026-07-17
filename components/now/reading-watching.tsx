import {
  BookOpen,
  PlayCircle,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ReadingWatchingProps {
  data: {
    reading?: string[];
    watching?: string[];
  };
}

export function ReadingWatching({
  data,
}: ReadingWatchingProps) {

  const hasReading =
    data.reading?.length;

  const hasWatching =
    data.watching?.length;

  if (
    !hasReading &&
    !hasWatching
  ) {
    return null;
  }

  return (
    <section className="section-padding bg-neutral-50">
      <Container>

        <SectionHeading
          eyebrow="Learning Resources"
          title="Reading & Watching"
          description="Books, videos and resources currently shaping my thinking."
          align="center"
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* Reading */}
          {hasReading && (
            <div className="rounded-[28px] border-[4px] border-black bg-white p-8 shadow-[10px_10px_0px_#000]">

              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-[3px] border-black bg-[var(--yellow)]">
                  <BookOpen size={30} />
                </div>

                <div>
                  <h3 className="font-heading text-3xl font-black">
                    Reading
                  </h3>

                  <p className="text-neutral-500">
                    Books and articles
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {data.reading?.map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-xl border-[3px] border-black bg-neutral-50 p-4"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>

            </div>
          )}

          {/* Watching */}
          {hasWatching && (
            <div className="rounded-[28px] border-[4px] border-black bg-white p-8 shadow-[10px_10px_0px_#000]">

              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-[3px] border-black bg-[var(--blue)]">
                  <PlayCircle size={30} />
                </div>

                <div>
                  <h3 className="font-heading text-3xl font-black">
                    Watching
                  </h3>

                  <p className="text-neutral-500">
                    Videos and courses
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {data.watching?.map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-xl border-[3px] border-black bg-neutral-50 p-4"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>

            </div>
          )}

        </div>

      </Container>
    </section>
  );
}