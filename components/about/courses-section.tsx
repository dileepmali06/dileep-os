"use client";

import { useState } from "react";
import {
  BookOpen,
  User,
  Calendar,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

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

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Courses"
          title="Learning Through Courses"
          description="Courses, tutorials and structured learning paths that helped shape my engineering journey."
          align="center"
        />

        {/* ---------- the shelf ---------- */}
        <div className="mt-16 py-10 overflow-x-auto pb-2">
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
                  className={`flex h-52 w-12 shrink-0 flex-col items-center justify-between rounded-t-md border-[3px] border-b-0 border-black py-4 sm:h-60 sm:w-14 ${
                    isActive ? "shadow-[4px_-4px_0px_#000]" : ""
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

        {/* ---------- detail panel ---------- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active._id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-2xl border-[3px] border-black shadow-[8px_8px_0px_#000]"
          >
            <div
              className="flex items-center justify-between border-b-[3px] border-black px-6 py-4"
              style={{ background: activeMeta.color }}
            >
              <span className="flex items-center gap-2 text-sm font-bold">
                <BookOpen size={15} />
                {activeMeta.label}
              </span>
              {active.progress !== undefined && (
                <span className="font-mono text-sm font-bold">
                  {active.progress}%
                </span>
              )}
            </div>

            <div className="bg-white p-6 sm:p-8">
              <h3 className="font-heading text-2xl font-black leading-tight sm:text-3xl">
                {active.title}
              </h3>

              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-neutral-500">
                <span className="flex items-center gap-1.5">
                  <BookOpen size={14} />
                  {active.platform}
                </span>
                {active.instructor && (
                  <span className="flex items-center gap-1.5">
                    <User size={14} />
                    {active.instructor}
                  </span>
                )}
                {active.startDate && (
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    Started {active.startDate}
                  </span>
                )}
                {active.completionDate && (
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} />
                    Completed {active.completionDate}
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

              {active.skills && active.skills.length > 0 && (
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

              {active.courseUrl && (
                <a
                  href={active.courseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 font-semibold hover:underline"
                >
                  View Course
                  <ExternalLink size={15} />
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}