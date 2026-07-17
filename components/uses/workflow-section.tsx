"use client";

import {Lock } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaBrave } from "react-icons/fa6";

interface WorkflowSectionProps {
  browser?: string;
  terminal?: string;
}

export function WorkflowSection({ browser, terminal }: WorkflowSectionProps) {
  if (!browser && !terminal) {
    return null;
  }

  return (
    <section id="workflow" className="section-padding bg-neutral-50">
      <Container>
        <SectionHeading
          eyebrow="Workflow"
          title="Browser & Terminal"
          description="The tools I use every day for testing, debugging and interacting with systems."
          align="center"
        />

        <div className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-2xl border-[3px] border-black shadow-[10px_10px_0px_#000]">
          <div className="border-b-[3px] border-black bg-neutral-100 px-5 py-2.5 text-center font-mono text-xs font-semibold text-neutral-500">
            daily-workflow — split view
          </div>

          <div className="grid sm:grid-cols-2">
            {/* browser pane */}
            {browser && (
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="border-b-[3px] border-black bg-white sm:border-b-0 sm:border-r-[3px]"
              >
                <div className="flex items-center gap-2 border-b-[2px] border-black/10 px-4 py-2.5">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400" />
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  <div className="ml-2 flex flex-1 items-center gap-1.5 rounded-full border border-black/15 bg-neutral-50 px-3 py-1 font-mono text-[11px] text-neutral-500">
                    <Lock size={10} />
                    localhost:3000
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border-[3px] border-black bg-[var(--green)]">
                    <FaBrave size={20} />
                  </div>
                  <h3 className="mt-4 font-heading text-2xl font-black">
                    {browser}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    Primary browser for development, testing and debugging
                    web applications.
                  </p>

                  {/* decorative wireframe lines representing a page */}
                  <div className="mt-5 space-y-2 opacity-60">
                    <div className="h-2 w-3/4 rounded-full bg-neutral-200" />
                    <div className="h-2 w-1/2 rounded-full bg-neutral-200" />
                    <div className="h-2 w-2/3 rounded-full bg-neutral-200" />
                  </div>
                </div>
              </motion.div>
            )}

            {/* terminal pane */}
            {terminal && (
              <motion.div
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-neutral-900"
              >
                <div className="flex items-center gap-2 border-b-[2px] border-white/10 px-4 py-2.5">
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="font-mono text-[11px] text-white/40">
                    {terminal.toLowerCase().replace(/\s+/g, "-")}
                  </span>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border-[3px] border-black bg-[var(--pink)]">
                    <span className="font-mono text-lg font-black text-black">
                      &gt;_
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-2xl font-black text-white">
                    {terminal}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    Where most commands run, builds happen and deployments
                    begin.
                  </p>

                  <div className="mt-5 font-mono text-xs text-emerald-400">
                    <span className="text-white/30">$</span> npm run dev
                    <span className="ml-1 inline-block h-3.5 w-[6px] animate-pulse bg-emerald-400 align-middle" />
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}