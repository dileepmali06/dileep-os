"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FileText, ShieldCheck, Paperclip } from "lucide-react";

import { Container } from "../ui/container";
import { getTypeMeta } from "./resume-meta";
import DownloadCta from "./download-cta";

type PrimaryResumeProps = {
  resume: {
    title: string;
    slug: string;
    type?: string;
    version?: string;
    targetRole?: string;
    description?: string;
    isATSFriendly?: boolean;
    downloadLabel?: string;
    fileSize?: string;
    lastUpdated?: string;
    thumbnail?: string;
    resumeFile?: string;
  };
};

export default function PrimaryResume({ resume }: PrimaryResumeProps) {
  if (!resume) return null;

  const meta = getTypeMeta(resume.type);
  const Icon = meta.icon;

  return (
    <section className="pb-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="relative mx-auto max-w-4xl"
        >
          {/* paperclip */}
          <Paperclip
            size={38}
            className="absolute -left-3 -top-4 z-10 -rotate-12 text-black/70 sm:-left-5"
          />

          <div className="overflow-hidden rounded-lg border-[2px] border-black bg-[#fbf8f0] shadow-[8px_10px_0px_rgba(0,0,0,0.15)]">
            {/* letterhead */}
            <div className="flex items-center justify-between border-b-[2px] border-dashed border-black/25 px-6 py-4 sm:px-9">
              <div className="flex items-center gap-2">
                <ShieldCheck size={15} />
                <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">
                  Primary — on file
                </span>
              </div>
              {resume.isATSFriendly && (
                <span className="-rotate-6 rounded border-[2px] border-black/70 px-2.5 py-1 font-mono text-[9px] font-black uppercase tracking-wide text-black/70">
                  ATS approved
                </span>
              )}
            </div>

            <div className="grid gap-8 p-6 sm:grid-cols-[180px_1fr] sm:p-9">
              <div className="relative mx-auto aspect-[3/4] w-32 shrink-0 overflow-hidden rounded-md border-[2px] border-black shadow-[4px_4px_0px_#000] sm:mx-0 sm:w-full">
                {resume.thumbnail ? (
                  <Image
                    src={resume.thumbnail}
                    alt={resume.title}
                    fill
                    sizes="180px"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-white text-neutral-300">
                    <FileText size={40} />
                  </div>
                )}
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span
                    className="flex items-center gap-1.5 rounded-full border-[2px] border-black px-3 py-1 text-xs font-bold"
                    style={{ background: meta.color }}
                  >
                    <Icon size={12} />
                    {meta.label}
                  </span>
                  {resume.version && (
                    <span className="rounded-full border-[2px] border-black bg-white px-3 py-1 text-xs font-bold">
                      {resume.version}
                    </span>
                  )}
                </div>

                <h2 className="mt-3 font-heading text-2xl font-black leading-tight sm:text-3xl">
                  {resume.title}
                </h2>
                {resume.targetRole && <p className="mt-1 text-neutral-500">{resume.targetRole}</p>}

                {resume.description && (
                  <p className="mt-4 leading-relaxed text-neutral-600">{resume.description}</p>
                )}

                <div className="mt-6">
                  <DownloadCta
                    href={resume.resumeFile}
                    label={resume.downloadLabel}
                    fileSize={resume.fileSize}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}