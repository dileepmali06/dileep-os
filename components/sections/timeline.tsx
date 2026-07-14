"use client";

import { useState } from "react";
import { ChevronDown, GitBranchPlus, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "../ui/SectionHeading";

type TimelineItem = {
  _id: string;
  title: string;
  description: PortableTextBlock[];
  date: string;
  highlight?: boolean;
  type?: string;
};

const colors = ["var(--yellow)", "var(--blue)", "var(--green)", "var(--pink)"];

const future = {
  title: "Software Engineer",
  description:
    "Building expertise in distributed systems, architecture and backend engineering.",
};

export function Timeline({ data }: { data: TimelineItem[] }) {
  const defaultOpen = data?.find((d) => d.highlight)?._id ?? data?.[0]?._id;
  const [openIds, setOpenIds] = useState<Set<string>>(
    new Set(defaultOpen ? [defaultOpen] : [])
  );

  if (!data?.length) return null;

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Journey"
          title="Timeline"
          description="The journey from curiosity to engineering."
          align="center"
        />

        <div className="relative mx-auto mt-16 max-w-2xl">
          {/* spine */}
          <div className="absolute left-[19px] top-2 bottom-2 w-[3px] bg-black/10" />
          <motion.div
            className="absolute left-[19px] top-2 w-[3px] origin-top bg-black"
            initial={{ height: 0 }}
            whileInView={{ height: "calc(100% - 1rem)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />

          <div className="space-y-3">
            {data.map((item, index) => {
              const color = colors[index % colors.length];
              const isOpen = openIds.has(item._id);
              const year = new Date(item.date).getFullYear();
              const month = new Date(item.date).toLocaleDateString("en-US", {
                month: "short",
              });

              return (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="relative pl-12"
                >
                  {/* node */}
                  <span
                    className="absolute left-0 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-black text-[10px] font-bold"
                    style={{ background: color }}
                  >
                    {String(year).slice(2)}
                  </span>

                  <div className="overflow-hidden rounded-2xl border-[3px] border-black bg-white shadow-[5px_5px_0px_#000]">
                    <button
                      onClick={() => toggle(item._id)}
                      className="flex w-full items-center gap-3 px-5 py-4 text-left transition-colors hover:bg-neutral-50"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-xs text-neutral-400">
                            {month} {year}
                          </span>
                          {item.highlight && (
                            <span className="flex items-center gap-1 rounded-full border-[2px] border-black bg-[var(--yellow)] px-2 py-0.5 text-[10px] font-semibold">
                              <Sparkles size={10} />
                              Highlight
                            </span>
                          )}
                          {item.type && (
                            <span className="rounded-full border-[2px] border-black/20 px-2 py-0.5 text-[10px] font-semibold uppercase text-neutral-400">
                              {item.type}
                            </span>
                          )}
                        </div>
                        <h3 className="mt-1 truncate font-heading text-lg font-black sm:text-xl">
                          {item.title}
                        </h3>
                      </div>

                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="shrink-0 rounded-full border-[2px] border-black p-1"
                      >
                        <ChevronDown size={16} />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden border-t-[3px] border-black bg-neutral-50"
                        >
                          <div className="px-5 py-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
                            <PortableText value={item.description} />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}

            {/* future entry */}
            <div className="relative pl-12">
              <span className="absolute left-0 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-dashed border-black/40 bg-white">
                <GitBranchPlus size={16} className="text-black/40" />
              </span>

              <div className="rounded-2xl border-[3px] border-dashed border-black/30 px-5 py-4">
                <span className="font-mono text-xs text-neutral-300">next</span>
                <h3 className="mt-1 font-heading text-lg font-black text-black/40 sm:text-xl">
                  {future.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-400">
                  {future.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}