"use client";

import {
  Code2,
  FileText,
  Search,
  GitBranch,
  Puzzle,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface EditorSectionProps {
  editor?: string;
  extensions?: string[];
}

const activityIcons = [
  { icon: FileText, active: false },
  { icon: Search, active: false },
  { icon: GitBranch, active: false },
  { icon: Puzzle, active: true },
];

export function EditorSection({ editor, extensions }: EditorSectionProps) {
  if (!editor && !extensions?.length) {
    return null;
  }

  return (
    <section id="editor" className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Editor"
          title="My Coding Environment"
          description="The editor and extensions that power my daily development workflow."
          align="center"
        />

        <div className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-2xl border-[3px] border-black shadow-[10px_10px_0px_#000]">
          {/* window title bar */}
          <div className="flex items-center gap-2.5 border-b-[3px] border-black bg-neutral-100 px-5 py-3">
            <Code2 size={15} />
            <span className="font-mono text-xs font-semibold text-neutral-600">
              {editor || "Editor"} — dileep-portfolio
            </span>
          </div>

          <div className="flex">
            {/* activity bar */}
            <div className="flex w-14 shrink-0 flex-col items-center gap-1 border-r-[3px] border-black bg-neutral-900 py-4">
              {activityIcons.map(({ icon: Icon, active }, i) => (
                <div
                  key={i}
                  className={`relative flex h-11 w-11 items-center justify-center rounded-lg ${
                    active ? "bg-white/10" : ""
                  }`}
                >
                  {active && (
                    <span className="absolute left-0 h-6 w-[3px] rounded-r bg-[var(--yellow)]" />
                  )}
                  <Icon
                    size={19}
                    className={active ? "text-white" : "text-white/35"}
                  />
                </div>
              ))}
            </div>

            {/* extensions panel */}
            <div className="min-w-0 flex-1 bg-white p-5 sm:p-6">
              <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-neutral-400">
                Extensions: Installed
              </p>

              <div className="mt-4 space-y-2.5">
                {extensions?.map((extension, index) => (
                  <motion.div
                    key={extension}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.06 }}
                    className="flex items-center gap-3 rounded-lg border-[2px] border-black/10 px-3.5 py-2.5 transition-colors hover:border-black/30 hover:bg-neutral-50"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border-[2px] border-black bg-[var(--blue)]">
                      <Puzzle size={14} />
                    </div>
                    <span className="min-w-0 flex-1 truncate text-sm font-semibold">
                      {extension}
                    </span>
                    <span className="flex shrink-0 items-center gap-1 rounded-full border border-green-600/30 bg-green-50 px-2 py-0.5 text-[10px] font-semibold text-green-700">
                      <Check size={10} />
                      Installed
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}