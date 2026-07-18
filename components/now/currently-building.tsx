"use client";

import { Hammer, Rocket, FolderGit2, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons: LucideIcon[] = [Hammer, Rocket, FolderGit2];

interface CurrentlyBuildingProps {
  data: {
    currentlyBuilding?: string[];
  };
}

export function CurrentlyBuilding({ data }: CurrentlyBuildingProps) {
  if (!data.currentlyBuilding?.length) {
    return null;
  }

  return (
    <section className="section-padding bg-neutral-50">
      <Container>
        <SectionHeading
          eyebrow="Building"
          title="Currently Building"
          description="Projects and systems that are actively under construction."
          align="center"
        />

        <div className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-2xl border-[4px] border-black shadow-[10px_10px_0px_#000]">
          {/* breaking news banner */}
          <div className="flex items-center gap-3 border-b-[3px] border-black bg-black px-6 py-3">
            <span className="flex items-center gap-1.5 rounded-sm bg-red-600 px-2.5 py-1 text-xs font-black uppercase text-white">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              Breaking
            </span>
            <span className="font-mono text-xs font-semibold text-white/70">
              {data.currentlyBuilding.length} stories developing right now
            </span>
          </div>

          {/* bulletin feed */}
          <div className="divide-y-[3px] divide-black bg-white">
            {data.currentlyBuilding.map((item, index) => {
              const Icon = icons[index % icons.length];

              return (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="flex items-start gap-4 border-l-[6px] border-red-500 px-6 py-6 sm:px-8"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-[3px] border-black bg-[var(--blue)]">
                    <Icon size={19} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-red-600">
                      Developing Story
                    </span>
                    <h3 className="mt-1 font-heading text-xl font-black leading-tight sm:text-2xl">
                      {item}
                    </h3>
                    <p className="mt-1.5 text-sm text-neutral-500">
                      Actively being designed, developed and shipped.
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}