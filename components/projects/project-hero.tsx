"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, Layers } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";

interface Props {
  project: any;
}

const statusStyles: Record<string, string> = {
  "in-progress": "bg-[var(--yellow)]",
  completed: "bg-[var(--green)]",
  live: "bg-[var(--green)]",
  archived: "bg-neutral-200",
};

function statusLabel(status?: string) {
  if (!status) return null;
  return status
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

export function ProjectHero({ project }: Props) {
  const label = statusLabel(project.status);

  return (
    <section className="relative overflow-hidden section-padding">
      {/* ambient accent */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--blue)]/20 blur-3xl" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 ">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-mono text-sm text-neutral-500 transition-colors hover:text-black"
            >
              <ArrowLeft size={15} />
              Back to projects
            </Link>

            {label && (
              <span
                className={` inline-block rounded-full border-[2px] border-black px-4 py-2 text-sm font-bold ${statusStyles[project.status ?? ""] ?? "bg-neutral-100"
                  }`}
              >
                {label}
              </span>
            )}

          </div>

          <h1 className="mt-6 font-heading text-4xl font-black leading-[1.05] sm:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-neutral-600 sm:text-xl">
            {project.shortDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {project.year && (
              <div className="flex items-center gap-2.5 rounded-xl border-[2px] border-black bg-white px-4 py-2.5 shadow-[3px_3px_0px_#000]">
                <div className="flex h-7 w-7 items-center justify-center rounded-md border-[2px] border-black bg-[var(--yellow)]">
                  <Calendar size={13} />
                </div>
                <span className="text-sm font-semibold">{project.year}</span>
              </div>
            )}

            <div className="flex items-center gap-2.5 rounded-xl border-[2px] border-black bg-white px-4 py-2.5 shadow-[3px_3px_0px_#000]">
              <div className="flex h-7 w-7 items-center justify-center rounded-md border-[2px] border-black bg-[var(--pink)]">
                <Layers size={13} />
              </div>
              <span className="text-sm font-semibold">
                {project.techStack?.length ?? 0} Technologies
              </span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}