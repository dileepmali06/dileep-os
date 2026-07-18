"use client";

import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface LifeUpdateProps {
  data: {
    lifeUpdate?: string;
  };
}

export function LifeUpdate({ data }: LifeUpdateProps) {
  if (!data.lifeUpdate) {
    return null;
  }

  return (
    <section className="section-padding bg-neutral-50">
      <Container>
        <SectionHeading
          eyebrow="Life Update"
          title="What's Going On Behind The Scenes"
          description="A small snapshot of life outside commits, pull requests and deployments."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20, rotate: -1 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-[20px] border-[4px] border-black bg-[#fdf8ec] shadow-[10px_10px_0px_#000]"
        >
          <div className="grid sm:grid-cols-[1fr_140px]">
            {/* message side */}
            <div className="p-8 sm:p-10">
              <p className="font-heading text-xl italic leading-relaxed text-neutral-800 sm:text-2xl">
                &ldquo;{data.lifeUpdate}&rdquo;
              </p>
              <p className="mt-6 font-mono text-xs text-neutral-400">
                — from my desk, right now
              </p>
            </div>

            {/* stamp side */}
            <div className="flex flex-row items-center justify-center gap-4 border-t-[3px] border-dashed border-black/25 p-6 sm:flex-col sm:justify-start sm:border-l-[3px] sm:border-t-0 sm:pt-10">
              <div className="flex h-16 w-14 shrink-0 rotate-3 items-center justify-center rounded-sm border-[3px] border-black bg-[var(--yellow)] shadow-[3px_3px_0px_#000]">
                <Sparkles size={22} />
              </div>

              {/* decorative address lines */}
              <div className="hidden w-full space-y-2 sm:block">
                <div className="h-1.5 w-3/4 rounded-full bg-black/10" />
                <div className="h-1.5 w-full rounded-full bg-black/10" />
                <div className="h-1.5 w-1/2 rounded-full bg-black/10" />
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}