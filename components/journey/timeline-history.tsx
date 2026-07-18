"use client";

import { Plane, Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface TimelineItem {
  _id: string;
  title: string;
  date: string;
  type: string;
  highlight?: boolean;
}

interface TimelineHistoryProps {
  timeline: TimelineItem[];
}

const typeColors: Record<string, string> = {
  learning: "var(--yellow)",
  project: "var(--blue)",
  achievement: "var(--green)",
  career: "var(--pink)",
  education: "var(--cream)",
  certification: "var(--yellow)",
};

export function TimelineHistory({ timeline }: TimelineHistoryProps) {
  if (!timeline?.length) {
    return null;
  }

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Travel Log"
          title="Boarding Passes Of My Journey"
          description="Every milestone is a stop along the way — some short layovers, some major destinations."
          align="center"
        />

        <div className="mx-auto mt-16 max-w-3xl space-y-5">
          {timeline.map((item, index) => {
            const color = typeColors[item.type] || "var(--blue)";

            return (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="flex overflow-hidden rounded-2xl border-[3px] border-black bg-white shadow-[7px_7px_0px_#000]"
              >
                {/* main info */}
                <div className="min-w-0 flex-1 p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="rounded-full border-[2px] border-black px-3 py-0.5 text-[10px] font-bold uppercase"
                      style={{ background: color }}
                    >
                      {item.type}
                    </span>
                    <span className="font-mono text-xs text-neutral-400">
                      {new Date(item.date).getFullYear()}
                    </span>
                    {item.highlight && (
                      <span className="flex items-center gap-1 rounded-full border-[2px] border-black bg-black px-2.5 py-0.5 text-[10px] font-bold text-white">
                        <Star size={9} className="fill-white" />
                        Priority
                      </span>
                    )}
                  </div>

                  <h3 className="mt-2.5 font-heading text-xl font-black leading-tight sm:text-2xl">
                    {item.title}
                  </h3>
                </div>

                {/* perforated divider */}
                <div className="relative flex w-0 shrink-0">
                  <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-neutral-50" />
                  <div className="h-full border-l-[3px] border-dashed border-black/25" />
                  <span className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-neutral-50" />
                </div>

                {/* stub */}
                <div className="flex w-16 shrink-0 flex-col items-center justify-center gap-1.5 bg-neutral-50 py-4 sm:w-20">
                  <Plane size={16} className="text-neutral-400" />
                  <span className="font-mono text-[10px] font-bold text-neutral-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>
            );
          })}

          {/* future — boarding not yet issued */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: timeline.length * 0.06 }}
            className="flex overflow-hidden rounded-2xl border-[3px] border-dashed border-black/30"
          >
            <div className="min-w-0 flex-1 p-5 sm:p-6">
              <span className="flex w-fit items-center gap-1.5 rounded-full border-[2px] border-black/20 px-3 py-0.5 text-[10px] font-bold uppercase text-neutral-400">
                <Sparkles size={10} />
                Upcoming
              </span>
              <h3 className="mt-2.5 font-heading text-xl font-black leading-tight text-black/40 sm:text-2xl">
                Future Milestones Boarding...
              </h3>
              <p className="mt-1.5 text-sm text-neutral-400">
                Backend engineering, distributed systems, open source and
                products yet to be built.
              </p>
            </div>

            <div className="flex w-16 shrink-0 flex-col items-center justify-center gap-1.5 border-l-[3px] border-dashed border-black/20 py-4 sm:w-20">
              <Plane size={16} className="text-black/20" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}