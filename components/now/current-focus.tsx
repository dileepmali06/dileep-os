"use client";

import { Code2, BookOpen, Rocket, Target } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap = { Code2, BookOpen, Rocket, Target };

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

export function CurrentFocus({ data }: CurrentFocusProps) {
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
          {data.tracks.map((track, trackIndex) => {
            const Icon = iconMap[track.icon] || Code2;

            return (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: trackIndex * 0.1 }}
                className="overflow-hidden rounded-[24px] border-[4px] border-black bg-white shadow-[10px_10px_0px_#000]"
              >
                {/* channel branding strip */}
                <div
                  className="h-2.5 border-b-[3px] border-black"
                  style={{ background: track.color }}
                />

                {/* channel header */}
                <div className="flex items-center justify-between gap-4 border-b-[3px] border-black px-7 py-5">
                  <div className="flex items-center gap-4">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl border-[3px] border-black"
                      style={{ background: track.color }}
                    >
                      <Icon size={22} />
                    </div>
                    <div>
                      <span className="font-mono text-[11px] font-bold text-neutral-400">
                        CH-{String(trackIndex + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-heading text-2xl font-black leading-tight">
                        {track.title}
                      </h3>
                    </div>
                  </div>

                  <span className="flex shrink-0 items-center gap-1.5 rounded-full border-[2px] border-black bg-black px-2.5 py-1 text-[10px] font-bold text-white">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
                    </span>
                    ON AIR
                  </span>
                </div>

                {/* program schedule */}
                <div className="px-7 py-4">
                  <p className="py-2 font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                    Now Airing · {track.items.length} segments
                  </p>

                  <div className="divide-y-[2px] divide-black/10">
                    {track.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 py-3.5"
                      >
                        <span
                          className="h-2 w-2 shrink-0 rounded-full"
                          style={{ background: track.color }}
                        />
                        <span className="font-medium text-neutral-800">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}