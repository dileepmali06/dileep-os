"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { History } from "lucide-react";

import { Container } from "../ui/container";
import { getTypeMeta, formatDateTime } from "./resume-meta";

type TimelineResume = {
  _id: string;
  title: string;
  slug: string;
  type?: string;
  version?: string;
  lastUpdated?: string;
};

type ResumeTimelineProps = {
  resumes: TimelineResume[];
};

export default function ResumeTimeline({ resumes }: ResumeTimelineProps) {
  if (!resumes?.length) return null;

  const sorted = [...resumes].sort(
    (a, b) => new Date(b.lastUpdated ?? "").getTime() - new Date(a.lastUpdated ?? "").getTime()
  );

  return (
    <section className="pb-20">
      <Container>
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 flex items-center gap-2.5">
            <History size={17} />
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500">
              Revision log
            </h2>
          </div>

          {/* ledger */}
          <div className="overflow-hidden rounded-lg border-[2px] border-black bg-[#fbf8f0] shadow-[6px_6px_0px_#000]">
            {/* ledger header row */}
            <div className="hidden grid-cols-[70px_1fr_100px] gap-3 border-b-[2px] border-dashed border-black/25 px-5 py-2.5 font-mono text-[10px] font-bold uppercase tracking-wide text-neutral-400 sm:grid">
              <span>Rev.</span>
              <span>Title</span>
              <span className="text-right">Date</span>
            </div>

            <div>
              {sorted.map((resume, index) => {
                const meta = getTypeMeta(resume.type);

                return (
                  <motion.div
                    key={resume._id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={`/resume/${resume.slug}`}
                      className={`grid grid-cols-[70px_1fr] items-center gap-3 px-5 py-3 transition-colors hover:bg-black/[0.03] sm:grid-cols-[70px_1fr_100px] ${
                        index !== 0 ? "border-t-[1.5px] border-dashed border-black/15" : ""
                      }`}
                    >
                      <span
                        className="w-fit rounded border-[1.5px] border-black px-2 py-0.5 font-mono text-[10px] font-black"
                        style={{ background: meta.color }}
                      >
                        {resume.version ?? "—"}
                      </span>
                      <span className="truncate font-heading text-sm font-black">{resume.title}</span>
                      <span className="hidden text-right font-mono text-xs text-neutral-400 sm:block">
                        {formatDateTime(resume.lastUpdated)}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}