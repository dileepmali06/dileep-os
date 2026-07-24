"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck, Star, Paperclip } from "lucide-react";

import { Container } from "../../ui/container";
import { getTypeMeta, experienceLabels, formatDateTime } from "../resume-meta";

type ResumeDetailHeroProps = {
  resume: {
    title: string;
    type?: string;
    version?: string;
    targetRole?: string;
    experienceLevel?: string;
    isATSFriendly?: boolean;
    featured?: boolean;
    lastUpdated?: string;
  };
};

export default function ResumeDetailHero({ resume }: ResumeDetailHeroProps) {
  const meta = getTypeMeta(resume.type);
  const Icon = meta.icon;

  return (
    <section className="pb-10 pt-28 sm:pt-32">
      <Container>
        <Link
          href="/resume"
          className="inline-flex items-center gap-2 rounded-xl border-[2px] border-black bg-white px-4 py-2 text-sm font-bold transition hover:-translate-x-0.5"
        >
          <ArrowLeft size={15} />
          Back to resumes
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="relative mt-7 max-w-3xl"
        >
          <Paperclip size={34} className="absolute -left-2 -top-5 -rotate-12 text-black/70 sm:-left-4" />

          <div className="rounded-lg border-[2px] border-black bg-[#fbf8f0] px-6 py-6 shadow-[8px_10px_0px_rgba(0,0,0,0.15)] sm:px-9 sm:py-8">
            <div className="flex items-center justify-between border-b-[2px] border-dashed border-black/25 pb-4">
              <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
                Document on file
              </span>
              {resume.featured && (
                <span className="-rotate-6 rounded border-[2px] border-black/70 px-2.5 py-1 font-mono text-[9px] font-black uppercase tracking-wide text-black/70">
                  Featured
                </span>
              )}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              <span
                className="flex items-center gap-1.5 rounded-full border-[2px] border-black px-3.5 py-1.5 text-xs font-bold"
                style={{ background: meta.color }}
              >
                <Icon size={13} />
                {meta.label}
              </span>

              {resume.version && (
                <span className="rounded-full border-[2px] border-black bg-white px-3.5 py-1.5 text-xs font-bold">
                  {resume.version}
                </span>
              )}

              {resume.experienceLevel && (
                <span className="rounded-full border-[2px] border-black/20 bg-white px-3.5 py-1.5 text-xs font-medium text-neutral-600">
                  {experienceLabels[resume.experienceLevel] ?? resume.experienceLevel}
                </span>
              )}

              {resume.isATSFriendly && (
                <span className="flex items-center gap-1.5 text-xs font-semibold text-green-700">
                  <ShieldCheck size={13} />
                  ATS Friendly
                </span>
              )}
            </div>

            <h1 className="mt-4 font-heading text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              {resume.title}
            </h1>

            {resume.targetRole && <p className="mt-2 text-lg text-neutral-600">{resume.targetRole}</p>}

            {resume.lastUpdated && (
              <p className="mt-3 font-mono text-xs text-neutral-400">
                Last updated {formatDateTime(resume.lastUpdated)}
              </p>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}