import {
  Code2,
  BookOpen,
  Rocket,
  Target,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap = {
  Code2,
  BookOpen,
  Rocket,
  Target,
};

interface Track {
  title: string;
  color: string;
  icon: keyof typeof iconMap;
  items: string[];
}

interface CurrentFocusProps {
  data: {
    tracks?: Track[];
  };
}

export function CurrentFocus({
  data,
}: CurrentFocusProps) {

  if (!data?.tracks?.length) {
    return null;
  }

  return (
    <section className="section-padding">
      <Container>

        <SectionHeading
          eyebrow="Current Focus"
          title="What Occupies My Attention"
          description="The major areas currently receiving most of my time and energy."
          align="center"
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {data.tracks.map(
            (track) => {

              const Icon =
                iconMap[
                  track.icon
                ] || Code2;

              return (
                <div
                  key={track.title}
                  className="rounded-[28px] border-[4px] border-black bg-white p-8 shadow-[10px_10px_0px_#000]"
                >

                  <div className="flex items-center gap-5">

                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-2xl border-[3px] border-black"
                      style={{
                        background:
                          track.color,
                      }}
                    >
                      <Icon
                        size={30}
                      />
                    </div>

                    <div>
                      <h3 className="font-heading text-3xl font-black">
                        {track.title}
                      </h3>

                      <p className="font-mono text-sm text-neutral-500">
                        {track.items.length} active items
                      </p>
                    </div>

                  </div>

                  <div className="mt-8 space-y-3">

                    {track.items.map(
                      (item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-xl border-[3px] border-black bg-neutral-50 px-5 py-4"
                        >
                          <div
                            className="h-3 w-3 rounded-full border border-black"
                            style={{
                              background:
                                track.color,
                            }}
                          />

                          <span className="font-medium">
                            {item}
                          </span>
                        </div>
                      )
                    )}

                  </div>

                </div>
              );
            }
          )}

        </div>

      </Container>
    </section>
  );
}