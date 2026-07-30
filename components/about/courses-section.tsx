"use client";

import { useState } from "react";
import {
  BookOpen,
  User,
  Calendar,
  CheckCircle2,
  ExternalLink,
  StickyNote,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { PortableText, PortableTextComponents } from "@portabletext/react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Course {
  _id: string;
  title: string;
  platform: string;
  instructor?: string;
  status: string;
  progress?: number;
  startDate?: string;
  completionDate?: string;
  courseUrl?: string;
  skills?: string[];
  notes?: unknown[];
  thumbnail?: { asset?: { _ref?: string } } | null;
}

interface CoursesSectionProps {
  data: Course[];
}

const statusMeta: Record<string, { label: string; color: string }> = {
  completed: { label: "Completed", color: "var(--green)" },
  "in-progress": { label: "In Progress", color: "var(--yellow)" },
};

const notesComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-3 text-sm leading-relaxed text-neutral-700 last:mb-0">{children}</p>
    ),
    h3: ({ children }) => (
      <h4 className="mb-2 mt-4 font-heading text-sm font-black first:mt-0">{children}</h4>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-3 list-disc space-y-1 pl-5 text-sm text-neutral-700 last:mb-0">
        {children}
      </ul>
    ),
  },
};

function formatDate(value?: string) {
  if (!value) return undefined;
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function CoursesSection({ data }: CoursesSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!data?.length) {
    return null;
  }

  const active = data[activeIndex];
  const activeMeta = statusMeta[active.status] ?? {
    label: "Planned",
    color: "var(--cream)",
  };

  const hasNotes = Array.isArray(active.notes) && active.notes.length > 0;

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Courses"
          title="Learning Through Courses"
          description="Courses, tutorials and structured learning paths that helped shape my engineering journey."
          align="center"
        />

        {/* ---------- the shelf — desktop/tablet: standing books ---------- */}
        <div className="mt-16 hidden overflow-x-auto py-10 pb-2 sm:block">
          <div className="mx-auto flex w-max items-end gap-2 border-b-[6px] border-black px-4">
            {data.map((course, index) => {
              const meta = statusMeta[course.status] ?? {
                label: "Planned",
                color: "var(--cream)",
              };
              const isActive = index === activeIndex;

              return (
                <motion.button
                  key={course._id}
                  onClick={() => setActiveIndex(index)}
                  animate={{ y: isActive ? -14 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className={`flex h-52 w-12 shrink-0 flex-col items-center justify-between rounded-t-md border-[3px] border-b-0 border-black py-4 sm:h-60 sm:w-14 ${isActive ? "shadow-[4px_-4px_0px_#000]" : ""
                    }`}
                  style={{ background: isActive ? meta.color : "white" }}
                >
                  <span className="h-2 w-2 rounded-full border border-black/30" />
                  <span
                    className="max-h-40 overflow-hidden font-heading text-xs font-bold leading-none sm:text-sm"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                  >
                    {course.title}
                  </span>
                  <span className="flex h-4 w-4 items-center justify-center rounded-full border border-black/30 text-[8px] font-bold">
                    {course.platform?.[0]?.toUpperCase() ?? "?"}
                  </span>
                </motion.button>
              );
            })}
          </div>
          <p className="mt-3 text-center font-mono text-xs text-neutral-400">
            tap a book on the shelf to open it
          </p>
        </div>

        {/* ---------- mobile: horizontal snap-scroll index cards ---------- */}
        <div className="mt-10 -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 sm:hidden [scrollbar-width:thin]">
          {data.map((course, index) => {
            const meta = statusMeta[course.status] ?? {
              label: "Planned",
              color: "var(--cream)",
            };
            const isActive = index === activeIndex;

            return (
              <button
                key={course._id}
                onClick={() => setActiveIndex(index)}
                className={`flex w-[168px] shrink-0 snap-start flex-col gap-2 rounded-xl border-[3px] border-black p-3.5 text-left transition-all ${isActive ? "shadow-[4px_4px_0px_#000]" : "shadow-[2px_2px_0px_#000]"
                  }`}
                style={{ background: isActive ? meta.color : "white" }}
              >
                <span className="flex items-center justify-between">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-black/30 text-[9px] font-bold">
                    {course.platform?.[0]?.toUpperCase() ?? "?"}
                  </span>
                  {isActive && <span className="h-2 w-2 rounded-full bg-black" />}
                </span>
                <span className="line-clamp-2 font-heading text-sm font-black leading-tight">
                  {course.title}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wide text-neutral-500">
                  {meta.label}
                </span>
              </button>
            );
          })}
        </div>
        <p className="mt-2 text-center font-mono text-[10px] text-neutral-400 sm:hidden">
          ← swipe to browse courses →
        </p>

        {/* ---------- detail panel ---------- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active._id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-2xl border-[3px] border-black shadow-[5px_5px_0px_#000] sm:shadow-[8px_8px_0px_#000]"
          >
            <div
              className="flex items-center justify-between border-b-[3px] border-black px-4 py-3.5 sm:px-6 sm:py-4"
              style={{ background: activeMeta.color }}
            >
              <span className="flex items-center gap-2 text-xs font-bold sm:text-sm">
                <BookOpen size={15} />
                {activeMeta.label}
              </span>
              {active.progress !== undefined && (
                <span className="font-mono text-xs font-bold sm:text-sm">
                  {active.progress}%
                </span>
              )}
            </div>

            <div className="bg-white p-5 sm:p-8">
              <h3 className="font-heading text-xl font-black leading-tight sm:text-3xl">
                {active.title}
              </h3>

              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-neutral-500 sm:gap-x-5 sm:text-sm">
                {active.platform && (
                  <span className="flex items-center gap-1.5">
                    <BookOpen size={13} />
                    {active.platform}
                  </span>
                )}
                {active.instructor && (
                  <span className="flex items-center gap-1.5">
                    <User size={13} />
                    {active.instructor}
                  </span>
                )}
                {active.startDate && (
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} />
                    Started {formatDate(active.startDate)}
                  </span>
                )}
                {active.completionDate && (
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} />
                    Completed {formatDate(active.completionDate)}
                  </span>
                )}
              </div>

              {active.progress !== undefined && (
                <div className="mt-5 h-3 overflow-hidden rounded-full border-[2px] border-black bg-neutral-100">
                  <motion.div
                    className="h-full bg-black"
                    initial={{ width: 0 }}
                    animate={{ width: `${active.progress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              )}

              {!!active.skills?.length && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {active.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border-[2px] border-black/20 px-3 py-1 text-xs font-medium text-neutral-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {hasNotes && (
                <div className="mt-6 rounded-xl border-[2px] border-black bg-[color-mix(in_srgb,var(--yellow)_10%,white)] p-4 sm:p-5">
                  <p className="mb-3 flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                    <StickyNote size={12} />
                    My notes
                  </p>
                  <PortableText value={active.notes as any[]} components={notesComponents} />
                </div>
              )}

              {active.courseUrl && (

                <a href={active.courseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold hover:underline"
                >
                  View Course
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}