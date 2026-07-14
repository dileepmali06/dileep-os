"use client";

import { useState } from "react";
import {
  Laptop,
  Code2,
  Terminal,
  Globe,
  Database,
  Monitor,
  FileCode,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "../ui/SectionHeading";

const workspace = [
  {
    id: "development",
    file: "development.ts",
    title: "Development",
    description:
      "Where the actual building happens — editor, AI pair programmer and API testing, all in one loop.",
    icon: Code2,
    color: "var(--blue)",
    tools: ["VS Code", "Cursor AI", "GitHub", "Postman", "Thunder Client"],
  },
  {
    id: "database",
    file: "database.ts",
    title: "Database",
    description:
      "Structured and unstructured data, modeled and queried without the guesswork.",
    icon: Database,
    color: "var(--pink)",
    tools: ["MongoDB", "PostgreSQL", "Prisma", "Sanity CMS"],
  },
  {
    id: "hardware",
    file: "hardware.ts",
    title: "Hardware",
    description: "The physical setup that keeps long coding sessions comfortable.",
    icon: Laptop,
    color: "var(--yellow)",
    tools: ["Windows Laptop", "1080P Monitor", "Mech Keyboard", "Wireless Mouse"],
  },
  {
    id: "deployment",
    file: "deployment.ts",
    title: "Deployment",
    description: "Ship it, host it, watch it work — from commit to production.",
    icon: Monitor,
    color: "var(--green)",
    tools: ["Vercel", "Render", "Cloudinary", "GitHub Actions"],
  },
  {
    id: "terminal",
    file: "terminal.ts",
    title: "Terminal",
    description: "Where commands actually run — fast, no distractions.",
    icon: Terminal,
    color: "var(--green)",
    tools: ["PowerShell", "Git Bash", "Windows Terminal"],
  },
  {
    id: "design",
    file: "design.ts",
    title: "Browser & Design",
    description:
      "Testing in the browser and sketching ideas before they become code.",
    icon: Globe,
    color: "var(--cream)",
    tools: ["Chrome", "Figma", "Excalidraw"],
  },
];

export function UsesSection() {
  const [activeId, setActiveId] = useState(workspace[0].id);
  const active = workspace.find((w) => w.id === activeId)!;
  const ActiveIcon = active.icon;

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Workspace"
          title="My Developer Workspace"
          description="The tools, hardware and environment powering my daily workflow."
          align="center"
        />

        <div className="mt-16 overflow-hidden rounded-[28px] border-[4px] border-black shadow-[10px_10px_0px_#000]">
          <div className="flex flex-col lg:flex-row">
            {/* ---------- Sidebar: file tree ---------- */}
            <div className="grid grid-cols-2 gap-2 border-b-[4px] border-black bg-neutral-50 p-3 sm:grid-cols-3 lg:flex lg:w-72 lg:shrink-0 lg:flex-col lg:gap-1 lg:border-b-0 lg:border-r-[4px] lg:p-4">
              <p className="col-span-full hidden px-2 pb-2 font-mono text-[11px] uppercase tracking-wider text-neutral-400 lg:block">
                workspace/
              </p>

              {workspace.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    className={`group flex items-center gap-2 rounded-xl border-[2px] px-3 py-2.5 font-mono text-sm transition-all duration-200 lg:w-full ${
                      isActive
                        ? "border-black shadow-[3px_3px_0px_#000]"
                        : "border-transparent hover:border-black/30"
                    }`}
                    style={{ background: isActive ? item.color : "transparent" }}
                  >
                    <FileCode
                      size={15}
                      className={`shrink-0 ${isActive ? "opacity-100" : "opacity-40"}`}
                    />
                    <span
                      className={`truncate ${
                        isActive ? "font-semibold" : "text-neutral-500"
                      }`}
                    >
                      {item.file}
                    </span>
                    <span
                      className={`ml-auto hidden shrink-0 rounded-full border-[1.5px] border-black px-1.5 text-[10px] font-semibold lg:inline ${
                        isActive ? "bg-white" : "bg-neutral-100"
                      }`}
                    >
                      {item.tools.length}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* ---------- Window panel ---------- */}
            <div className="flex-1 bg-white">
              {/* title bar */}
              <div className="flex items-center gap-3 border-b-[3px] border-black bg-neutral-100 px-5 py-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full border border-black/40 bg-red-500" />
                  <span className="h-3 w-3 rounded-full border border-black/40 bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full border border-black/40 bg-green-500" />
                </div>
                <span className="rounded-md border-[2px] border-black bg-white px-3 py-1 font-mono text-xs font-semibold">
                  {active.file}
                </span>
                <span className="ml-auto hidden font-mono text-xs text-neutral-400 sm:block">
                  ~/workspace/{active.file}
                </span>
              </div>

              {/* content */}
              <div className="min-h-[420px] p-6 sm:p-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="flex h-16 w-16 items-center justify-center rounded-2xl border-[3px] border-black"
                        style={{ background: active.color }}
                      >
                        <ActiveIcon size={28} />
                      </div>
                      <div>
                        <h3 className="font-heading text-3xl font-black">
                          {active.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-5 max-w-xl leading-relaxed text-neutral-600">
                      {active.description}
                    </p>

                    {/* tools as an import statement */}
                    <div className="mt-8 rounded-xl border-[3px] border-black bg-neutral-900 p-5 font-mono text-sm leading-relaxed text-white/90 shadow-[5px_5px_0px_#000]">
                      <div>
                        <span className="text-purple-300">import</span>{" "}
                        <span className="text-yellow-300">{"{"}</span>
                      </div>
                      {active.tools.map((tool, i) => (
                        <div key={tool} className="pl-5 text-sky-300">
                          &quot;{tool}&quot;
                          {i < active.tools.length - 1 ? "," : ""}
                        </div>
                      ))}
                      <div>
                        <span className="text-yellow-300">{"}"}</span>{" "}
                        <span className="text-purple-300">from</span>{" "}
                        <span className="text-green-300">
                          &quot;./{active.id}&quot;
                        </span>
                        ;
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}