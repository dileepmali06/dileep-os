"use client";

import {
  Laptop,
  Code2,
  FileCode,
  Workflow,
  Bot,
  ListChecks,
} from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";

const quickJumps = [
  { label: "Hardware", href: "#hardware", icon: Laptop },
  { label: "Software", href: "#software", icon: Code2 },
  { label: "Editor", href: "#editor", icon: FileCode },
  { label: "Workflow", href: "#workflow", icon: Workflow },
  { label: "AI Tools", href: "#ai-tools", icon: Bot },
  { label: "Productivity", href: "#productivity", icon: ListChecks },
];

export function UsesHero() {
  return (
    <section className="section-padding border-b-[4px] border-black">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-neutral-500">
            Uses
          </p>

          <h1 className="mt-6 font-heading text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
            My Developer
            <br />
            Workspace
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600 sm:text-xl">
            The hardware, software and tools that power my daily workflow.
            Everything from code editors and terminals to browsers, AI tools
            and productivity apps.
          </p>

          {/* quick jump index */}
          <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-2.5">
            {quickJumps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.15 + index * 0.05 }}
                  className="flex items-center gap-2 rounded-full border-[2px] border-black bg-white px-4 py-2 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--yellow)] hover:shadow-[3px_3px_0px_#000]"
                >
                  <Icon size={15} />
                  {item.label}
                </motion.a>
              );
            })}
          </div>

          <p className="mt-6 font-mono text-xs text-neutral-400">
            updated regularly as my setup evolves
          </p>
        </motion.div>
      </Container>
    </section>
  );
} 