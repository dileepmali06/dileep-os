"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FileText, ShieldCheck, Download, ArrowUpRight } from "lucide-react";

import { getTypeMeta } from "./resume-meta";

type ResumeCardProps = {
  resume: {
    _id: string;
    title: string;
    slug: string;
    type?: string;
    version?: string;
    targetRole?: string;
    pageCount?: number;
    fileSize?: string;
    isATSFriendly?: boolean;
    thumbnail?: string;
    resumeFile?: string;
  };
};

export default function ResumeCard({ resume }: ResumeCardProps) {
  const meta = getTypeMeta(resume.type);
  const Icon = meta.icon;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="h-full w-full"
    >
      <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-lg border-[2px] border-black bg-[#fbf8f0] p-3 sm:p-3.5 shadow-[4px_4px_0px_0px_#000] sm:shadow-[5px_5px_0px_0px_#000] transition-shadow duration-200 hover:shadow-[7px_7px_0px_0px_#000]">
        
        <div className="absolute left-2.5 top-2.5 z-20 h-1.5 w-3.5 -rotate-45 rounded-full bg-black/40" />

        <div className="relative aspect-[3/4] w-full overflow-hidden rounded border-[2px] border-black bg-white">
          <Link href={`/resume/${resume.slug}`} className="block h-full w-full">
            {resume.thumbnail ? (
              <Image
                src={resume.thumbnail}
                alt={resume.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-neutral-50 text-neutral-300">
                <FileText className="h-10 w-10 sm:h-12 sm:w-12" strokeWidth={1.5} />
              </div>
            )}
          </Link>

          {/* Floating Badges Over Image Header */}
          <div className="absolute inset-x-2 top-2 flex items-center justify-between gap-1.5 z-10 pointer-events-none">
            {/* Version Badge */}
            {resume.version ? (
              <span className="rounded border-[1.5px] border-black bg-white/95 px-2 py-0.5 font-mono text-[9px] font-black shadow-[1.5px_1.5px_0px_0px_#000]">
                {resume.version}
              </span>
            ) : (
              <span />
            )}

            {/* Quick View Arrow Link */}
            <Link
              href={`/resume/${resume.slug}`}
              className="pointer-events-auto flex h-6 w-6 items-center justify-center rounded border-[1.5px] border-black bg-white opacity-0 transition-opacity group-hover:opacity-100 shadow-[1.5px_1.5px_0px_0px_#000]"
              aria-label="View Resume"
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Content Section with Original Dashed Border */}
        <div className="mt-3 flex flex-1 flex-col border-t-[2px] border-dashed border-black/20 pt-3">
          
          {/* Category Tag */}
          <div className="flex items-center justify-between gap-2">
            <span
              className="inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-black px-2.5 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider"
              style={{ background: meta.color }}
            >
              <Icon className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
              {meta.label}
            </span>

            {/* ATS Badge */}
            {resume.isATSFriendly && (
              <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-extrabold text-green-700">
                <ShieldCheck className="h-3 w-3" />
                ATS
              </span>
            )}
          </div>

          {/* Title */}
          <Link href={`/resume/${resume.slug}`} className="mt-2 block">
            <h3 className="line-clamp-2 font-heading text-sm sm:text-base font-black leading-snug tracking-tight hover:underline">
              {resume.title}
            </h3>
          </Link>

          {/* Target Role */}
          {resume.targetRole && (
            <p className="mt-1 truncate text-[11px] sm:text-xs font-medium text-neutral-500">
              {resume.targetRole}
            </p>
          )}

          {/* Footer Bar */}
          <div className="mt-auto flex items-center justify-between pt-3">
            <span className="text-[10px] sm:text-[11px] font-semibold text-neutral-400">
              {resume.pageCount ? `${resume.pageCount} ${resume.pageCount === 1 ? 'Page' : 'Pages'}` : ''}
            </span>

            {/* Action Button */}
            {resume.resumeFile && (
              <a
                href={resume.resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                download
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 rounded-md border-[2px] border-black bg-white px-2.5 py-1 text-[11px] font-black text-black shadow-[2px_2px_0px_0px_#000] transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                aria-label="Download resume"
              >
                <Download className="h-3 w-3" />
                <span>PDF</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}