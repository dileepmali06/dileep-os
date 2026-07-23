"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

import { Container } from "../ui/container";
import ResumeCard from "./resume-card";
import { getTypeMeta } from "./resume-meta";

type Resume = {
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

type ResumeListProps = {
  resumes: Resume[];
};

export default function ResumeList({ resumes }: ResumeListProps) {
  if (!resumes?.length) {
    return (
      <section id="all-resumes" className="pb-24">
        <Container>
          <div className="mx-auto max-w-md rounded-lg border-[2px] border-dashed border-black/40 bg-[#fbf8f0] p-12 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border-[2px] border-black bg-white">
              <FileText size={26} />
            </div>
            <h2 className="mt-6 text-2xl font-black">No Resumes Yet</h2>
            <p className="mx-auto mt-3 max-w-md text-neutral-600">
              Add a resume version in Sanity Studio and it will show up here.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  const types = Array.from(new Set(resumes.map((r) => r.type).filter(Boolean))) as string[];

  const grouped = types
    .map((type) => ({
      type,
      meta: getTypeMeta(type),
      resumes: resumes.filter((r) => r.type === type),
    }))
    .filter((g) => g.resumes.length > 0);

  const untyped = resumes.filter((r) => !r.type);

  return (
    <section id="all-resumes" className="pb-24">
      <Container>
        <div className="mb-10">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
            The Archive
          </p>
          <h2 className="mt-1 text-3xl font-black sm:text-4xl">All Resumes</h2>
        </div>

        <div className="space-y-14">
          {grouped.map((group) => (
            <motion.div
              key={group.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              {/* folder tab divider */}
              <div className="flex items-center gap-0">
                <div
                  className="flex items-center gap-2 rounded-t-lg border-[2px] border-b-0 border-black px-4 py-2"
                  style={{ background: group.meta.color }}
                >
                  <group.meta.icon size={15} />
                  <span className="font-heading text-sm font-black">{group.meta.label}</span>
                  <span className="font-mono text-xs text-black/50">{group.resumes.length}</span>
                </div>
                <div className="h-[2px] flex-1 bg-black" />
              </div>

              <div className="grid grid-cols-2 gap-5 border-x-[2px] border-b-[2px] border-black bg-[#fbf8f0]/40 p-5 sm:grid-cols-3 lg:grid-cols-4">
                {group.resumes.map((resume) => (
                  <ResumeCard key={resume._id} resume={resume} />
                ))}
              </div>
            </motion.div>
          ))}

          {untyped.length > 0 && (
            <div>
              <div className="flex items-center gap-0">
                <div className="flex items-center gap-2 rounded-t-lg border-[2px] border-b-0 border-black bg-neutral-100 px-4 py-2">
                  <span className="font-heading text-sm font-black">Other</span>
                  <span className="font-mono text-xs text-black/50">{untyped.length}</span>
                </div>
                <div className="h-[2px] flex-1 bg-black" />
              </div>
              <div className="grid grid-cols-2 gap-5 border-x-[2px] border-b-[2px] border-black bg-[#fbf8f0]/40 p-5 sm:grid-cols-3 lg:grid-cols-4">
                {untyped.map((resume) => (
                  <ResumeCard key={resume._id} resume={resume} />
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}