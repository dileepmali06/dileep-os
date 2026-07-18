"use client";

import { Route, Rocket } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";

const milestones = [
  { year: "2023", label: "Started Coding", color: "var(--blue)" },
  { year: "2024", label: "Frontend Development", color: "var(--pink)" },
  { year: "2025", label: "Full Stack Development", color: "var(--green)" },
];

const tilts = [-6, 4, -3, 6];

export function JourneyHero() {
  return (
    <section className="section-padding">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border-[3px] border-black bg-[var(--blue)] px-5 py-2 font-mono text-sm font-bold shadow-[4px_4px_0px_#000]">
            <Route size={16} />
            JOURNEY
          </div>

          <h1 className="mt-8 font-heading text-5xl font-black leading-tight md:text-7xl">
            From Curiosity
            <br />
            To Engineering
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-neutral-600 md:text-xl">
            Every developer has a timeline of experiments, failures, lessons
            and breakthroughs. This page documents mine — from writing the
            first lines of code to building software products and pursuing
            software engineering.
          </p>

          {/* passport stamps */}
          <div className="mx-auto mt-16 flex max-w-3xl flex-wrap items-center justify-center gap-6 sm:gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, scale: 0.6, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: tilts[index] }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.12 }}
                className="flex h-32 w-32 flex-col items-center justify-center gap-1 rounded-full border-[3px] border-black p-2 text-center sm:h-36 sm:w-36"
                style={{ background: milestone.color }}
              >
                <div className="flex h-full w-full flex-col items-center justify-center gap-1 rounded-full border-2 border-dashed border-black/40">
                  <span className="font-heading text-2xl font-black sm:text-3xl">
                    {milestone.year}
                  </span>
                  <span className="max-w-[90px] text-[10px] font-bold uppercase leading-tight tracking-wide">
                    {milestone.label}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* future — not stamped yet */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: 0 }}
              whileInView={{ opacity: 1, scale: 1, rotate: tilts[3] }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: milestones.length * 0.12 }}
              className="flex h-32 w-32 flex-col items-center justify-center gap-1 rounded-full border-[3px] border-dashed border-black/40 p-2 text-center sm:h-36 sm:w-36"
            >
              <Rocket size={20} className="text-black/40" />
              <span className="mt-1 font-heading text-lg font-black text-black/40">
                Future
              </span>
              <span className="max-w-[90px] text-[10px] font-bold uppercase leading-tight tracking-wide text-black/40">
                Software Engineer
              </span>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}