"use client";

import { BookOpen, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ReadingWatchingProps {
  data: {
    reading?: string[];
    watching?: string[];
  };
}

const readingTape = ["var(--yellow)", "var(--green)", "var(--pink)"];
const watchingTape = ["var(--blue)", "var(--pink)", "var(--yellow)"];
const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-3", "rotate-3"];

export function ReadingWatching({ data }: ReadingWatchingProps) {
  const hasReading = !!data.reading?.length;
  const hasWatching = !!data.watching?.length;

  if (!hasReading && !hasWatching) {
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

        <div className="mx-auto mt-16 grid max-w-5xl gap-10 md:grid-cols-2 md:gap-8">
          {/* reading pinboard */}
          {hasReading && (
            <div>
              <div className="mb-6 flex items-center gap-3.5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-[3px] border-black bg-[var(--yellow)] shadow-[4px_4px_0px_#000]">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-black">Reading List</h3>
                  <p className="font-mono text-xs text-neutral-400">
                    {data.reading?.length} book{data.reading!.length > 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              <div className="rounded-[24px] border-[2px] border-dashed border-black/20 p-5 sm:p-6">
                <div className="flex flex-col gap-4">
                  {data.reading?.map((item, index) => {
                    const tape = readingTape[index % readingTape.length];
                    const rotation = rotations[index % rotations.length];

                    return (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 14, scale: 0.92 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: index * 0.07, type: "spring", bounce: 0.35 }}
                        whileHover={{ rotate: 0, scale: 1.03 }}
                        className={`relative rounded-xl border-[3px] border-black bg-white px-5 py-4 shadow-[5px_5px_0px_#000] ${rotation}`}
                      >
                        <span
                          className="absolute -top-2.5 left-6 h-4 w-10 rotate-[-4deg] border-[2px] border-black/80"
                          style={{ background: tape }}
                        />
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs text-neutral-300">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="text-sm font-semibold sm:text-base">
                            {item}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* watching pinboard */}
          {hasWatching && (
            <div>
              <div className="mb-6 flex items-center gap-3.5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-[3px] border-black bg-[var(--blue)] shadow-[4px_4px_0px_#000]">
                  <PlayCircle size={20} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-black">Watch Queue</h3>
                  <p className="font-mono text-xs text-neutral-400">
                    {data.watching?.length} title{data.watching!.length > 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              <div className="rounded-[24px] border-[2px] border-dashed border-black/20 p-5 sm:p-6">
                <div className="flex flex-col gap-4">
                  {data.watching?.map((item, index) => {
                    const tape = watchingTape[index % watchingTape.length];
                    const rotation = rotations[(index + 2) % rotations.length];

                    return (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 14, scale: 0.92 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: index * 0.07, type: "spring", bounce: 0.35 }}
                        whileHover={{ rotate: 0, scale: 1.03 }}
                        className={`relative rounded-xl border-[3px] border-black bg-white px-5 py-4 shadow-[5px_5px_0px_#000] ${rotation}`}
                      >
                        <span
                          className="absolute -top-2.5 right-6 h-4 w-10 rotate-[4deg] border-[2px] border-black/80"
                          style={{ background: tape }}
                        />
                        <div className="flex items-center gap-3">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-[2px] border-black text-[9px] font-bold">
                            {index + 1}
                          </span>
                          <span className="text-sm font-semibold sm:text-base">
                            {item}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}