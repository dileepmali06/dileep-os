"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { Container } from "../ui/container";
import ResumeCard from "./resume-card";

type FeaturedResume = {
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

type FeaturedResumesProps = {
  resumes: FeaturedResume[];
};

export default function FeaturedResumes({ resumes }: FeaturedResumesProps) {
  if (!resumes?.length) return null;

  return (
    <section className="pb-20">
      <Container>
        <div className="mb-7">
          <p className="flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
            <Star size={12} />
            Pulled to the front
          </p>
          <h2 className="mt-1 text-2xl font-black sm:text-3xl">Featured Versions</h2>
        </div>

        <div className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
          {resumes.map((resume, index) => (
            <motion.div
              key={resume._id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="w-[220px] shrink-0 snap-start"
            >
              <ResumeCard resume={resume} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}