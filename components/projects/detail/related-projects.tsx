"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { urlFor } from "@/sanity/lib/image";
import { ProjectListItem, colorForIndex } from "../project-meta";

interface RelatedProjectsProps {
  projects: ProjectListItem[];
}

export function RelatedProjects({ projects }: RelatedProjectsProps) {
  if (!projects?.length) return null;

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Keep exploring"
          title="Related Projects"
          align="center"
        />

        <div className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-2xl border-[3px] border-black bg-white shadow-[6px_6px_0px_#000]">
          {projects.map((project, i) => {
            const color = colorForIndex(i);

            return (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.07 }}
                className={i !== 0 ? "border-t-[2px] border-dashed border-black/15" : ""}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-neutral-50 sm:gap-5 sm:px-7 sm:py-5"
                >
                  <span className="hidden shrink-0 font-mono text-xs font-bold text-black/20 sm:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div
                    className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border-[2px] border-black sm:h-16 sm:w-24"
                    style={{ background: `color-mix(in srgb, ${color} 18%, white)` }}
                  >
                    {project.coverImage ? (
                      <Image
                        src={urlFor(project.coverImage).width(240).height(160).url()}
                        alt={project.title}
                        fill
                        sizes="100px"
                        className="object-contain p-1.5"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center font-heading text-lg font-black text-black/15">
                        {project.title.slice(0, 2).toUpperCase()}
                      </div>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-heading text-base font-black sm:text-lg">
                      {project.title}
                    </h3>
                    {project.shortDescription && (
                      <p className="mt-0.5 line-clamp-1 text-sm text-neutral-500">
                        {project.shortDescription}
                      </p>
                    )}
                    {!!project.techStack?.length && (
                      <p className="mt-1 hidden font-mono text-[10px] uppercase tracking-wide text-neutral-400 sm:block">
                        {project.techStack.slice(0, 3).join(" · ")}
                      </p>
                    )}
                  </div>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-[2px] border-black bg-white transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight size={15} />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}