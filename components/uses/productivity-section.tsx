"use client";

import {
  Check,
  StickyNote,
  Calendar,
  Brain,
  Clock,
  MessageSquare,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiGooglekeep } from "react-icons/si";


interface ProductivityToolsSectionProps {
  data: string[];
}

const rules: [RegExp, LucideIcon | IconType][] = [
  [/notion|note/i, StickyNote],
  [/calendar|schedule/i, Calendar],
  [/obsidian|brain|second brain/i, Brain],
  [/pomodoro|focus|timer|clock/i, Clock],
  [/slack|discord|chat/i, MessageSquare],
  [/Google Keep|Evernote/i, SiGooglekeep],
];

function getIcon(label: string): LucideIcon | IconType {
  const match = rules.find(([pattern]) => pattern.test(label));
  return match ? match[1] : Workflow;
}

export function ProductivityToolsSection({
  data,
}: ProductivityToolsSectionProps) {
  if (!data?.length) {
    return null;
  }

  return (
    <section id="productivity" className="section-padding bg-neutral-50">
      <Container>
        <SectionHeading
          eyebrow="Productivity"
          title="Tools That Keep Me Organized"
          description="The apps and systems I use to manage work, ideas and learning."
          align="center"
        />

        <div
          className="relative mx-auto mt-16 max-w-2xl overflow-hidden rounded-2xl border-[3px] border-black bg-white shadow-[8px_8px_0px_#000]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent, transparent 47px, rgba(0,0,0,0.07) 47px, rgba(0,0,0,0.07) 49px)",
            backgroundPosition: "0 24px",
          }}
        >
          {/* margin line */}
          <div className="absolute bottom-0 left-14 top-0 w-[2px] bg-red-300/50 sm:left-16" />

          <div className="relative px-6 py-6 sm:px-8">
            <p className="mb-3 pl-8 font-mono text-xs font-bold uppercase tracking-widest text-neutral-400 sm:pl-10">
              Daily Toolkit
            </p>

            {data.map((tool, index) => {
              const Icon = getIcon(tool);

              return (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.07 }}
                  className="flex h-[49px] items-center gap-3 pl-8 sm:gap-4 sm:pl-10"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] border-[2px] border-black bg-[var(--green)]">
                    <Check size={12} strokeWidth={3} />
                  </span>

                  <span className="flex-1 truncate font-heading text-base font-bold sm:text-lg">
                    {tool}
                  </span>

                  <Icon size={16} className="shrink-0 text-neutral-400" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}