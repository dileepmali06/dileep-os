"use client";

import { useEffect, useState } from "react";
import {
  BookOpen,
  Code2,
  Rocket,
  Target,
  Play,
  SkipBack,
  SkipForward,
} from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "../ui/SectionHeading";

const iconMap = {
  Code2,
  BookOpen,
  Rocket,
  Target,
};

interface Track {
  icon: string;
  title: string;
  color: string;
  items: string[];
}

interface NowSectionProps {
  data: {
    sectionTitle?: string;
    sectionDescription?: string;
    tracks?: Track[];
  };
}

function Equalizer({
  color,
}: {
  color: string;
}) {
  return (
    <div className="flex h-4 items-end gap-[3px]">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-full border border-black/20"
          style={{
            background: color,
          }}
          animate={{
            height: [
              "30%",
              "100%",
              "45%",
              "80%",
              "30%",
            ],
          }}
          transition={{
            duration: 1.1,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function SessionTimer() {
  const [seconds, setSeconds] =
    useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  const mm = String(
    Math.floor(seconds / 60)
  ).padStart(2, "0");

  const ss = String(
    seconds % 60
  ).padStart(2, "0");

  return (
    <span className="tabular-nums">
      {mm}:{ss}
    </span>
  );
}

export function NowSection({
  data,
}: NowSectionProps) {
  const tracks = data?.tracks || [];

  const nowPlaying = tracks[0];

  if (!nowPlaying) return null;

  const NowIcon =
    iconMap[
      nowPlaying.icon as keyof typeof iconMap
    ] || Code2;

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Now"
          title={
            data.sectionTitle ||
            "What I'm Focused On Right Now"
          }
          description={
            data.sectionDescription ||
            "A real-time snapshot of what I'm building, learning and exploring."
          }
          align="center"
        />

        <div className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-[28px] border-[4px] border-black bg-white shadow-[10px_10px_0px_#000]">
          {/* NOW PLAYING */}
          <div className="border-b-[4px] border-black bg-neutral-900 p-6 text-white sm:p-8">
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-white/50">
              <span className="flex items-center gap-2">
                <motion.span
                  className="h-2 w-2 rounded-full bg-green-400"
                  animate={{
                    opacity: [1, 0.2, 1],
                  }}
                  transition={{
                    duration: 1.3,
                    repeat: Infinity,
                  }}
                />

                Now Playing
              </span>

              <SessionTimer />
            </div>

            <div className="mt-5 flex items-center gap-5">
              <div
                className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border-[3px] border-black sm:h-24 sm:w-24"
                style={{
                  background:
                    nowPlaying.color,
                }}
              >
                <NowIcon
                  size={34}
                  className="text-black"
                />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="truncate font-heading text-3xl font-black sm:text-4xl">
                  {nowPlaying.title}
                </h3>

                <p className="mt-1 truncate text-sm text-white/60">
                  {nowPlaying.items.join(
                    " • "
                  )}
                </p>

                <div className="mt-4 flex items-center gap-5">
                  <SkipBack
                    size={18}
                    className="text-white/40"
                  />

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border-[2px] border-white/70 bg-white/10">
                    <Play
                      size={14}
                      className="ml-0.5 fill-white text-white"
                    />
                  </div>

                  <SkipForward
                    size={18}
                    className="text-white/40"
                  />

                  <div className="ml-auto hidden sm:block">
                    <Equalizer
                      color={
                        nowPlaying.color
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="relative mt-5 h-1.5 w-full overflow-hidden rounded-full bg-white/15">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{
                  background:
                    nowPlaying.color,
                }}
                animate={{
                  width: [
                    "0%",
                    "100%",
                  ],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </div>

          {/* QUEUE */}
          <div className="divide-y-[3px] divide-black">
            {tracks
              .slice(1)
              .map(
                (
                  track,
                  index
                ) => {
                  const Icon =
                    iconMap[
                      track.icon as keyof typeof iconMap
                    ] || Code2;

                  return (
                    <motion.div
                      key={
                        track.title
                      }
                      initial={{
                        opacity: 0,
                        x: -12,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.35,
                        delay:
                          index *
                          0.1,
                      }}
                      className="group flex items-center gap-4 p-5 transition-colors hover:bg-neutral-50 sm:p-6"
                    >
                      <span className="w-4 shrink-0 font-mono text-xs text-neutral-400">
                        {String(
                          index + 2
                        ).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-[3px] border-black"
                        style={{
                          background:
                            track.color,
                        }}
                      >
                        <Icon
                          size={
                            20
                          }
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h4 className="truncate font-heading text-lg font-bold sm:text-xl">
                          {
                            track.title
                          }
                        </h4>

                        <p className="truncate text-sm text-neutral-500">
                          {track.items.join(
                            " • "
                          )}
                        </p>
                      </div>

                      <span className="hidden shrink-0 rounded-full border-[2px] border-black px-2.5 py-1 font-mono text-[10px] font-bold text-neutral-500 sm:inline-block">
                        UP NEXT
                      </span>
                    </motion.div>
                  );
                }
              )}
          </div>
        </div>
      </Container>
    </section>
  );
}