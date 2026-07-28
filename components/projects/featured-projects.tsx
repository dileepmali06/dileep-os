"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FiGithub as Github } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { urlFor } from "@/sanity/lib/image";
import { ProjectListItem, colorForIndex } from "./project-meta";
import { ProjectCard } from "./project-card";

interface FeaturedProjectsProps {
  projects: ProjectListItem[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  if (!projects?.length) return null;

  const [spotlight, ...rest] = projects;
  const color = colorForIndex(0);

  return (
    <section className="relative overflow-hidden section-padding">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <Container className="relative">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-2 text-center font-mono text-xs font-bold uppercase tracking-[0.3em] text-neutral-400"
        >
          Fig. 03 — Featured builds
        </motion.p>

        <SectionHeading
          eyebrow="Highlights"
          title="Featured Projects"
          description="The ones I'm proudest of."
          align="center"
        />

        {/* spotlight — main featured project */}
        {spotlight && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mt-14"
          >
            <div className="flex flex-col overflow-hidden rounded-2xl border-[3px] border-black bg-white shadow-[9px_9px_0px_#000] lg:flex-row">
              <div
                className="relative flex w-full items-center justify-center overflow-hidden border-b-[3px] border-black p-6 lg:w-1/2 lg:border-b-0 lg:border-r-[3px]"
                style={{ background: `color-mix(in srgb, ${color} 18%, white)` }}
              >
                <span className="absolute left-4 top-4 rounded-full border-[2px] border-black bg-white px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase shadow-[2px_2px_0px_#000]">
                  ★ Spotlight
                </span>

                {spotlight.coverImage ? (
                  <div className="relative h-[220px] w-full sm:h-[300px]">
                    <Image
                      src={urlFor(spotlight.coverImage).width(1000).fit("max").url()}
                      alt={spotlight.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 600px"
                      className="object-contain p-2 drop-shadow-[6px_6px_0px_rgba(0,0,0,0.15)]"
                    />
                  </div>
                ) : (
                  <span className="font-heading text-6xl font-black text-black/10">
                    {spotlight.title.slice(0, 2).toUpperCase()}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col justify-center gap-5 px-6 py-8 sm:px-10 sm:py-10">
                <div className="flex flex-wrap items-center gap-2">
                  {spotlight.category && (
                    <span className="rounded-full border-[2px] border-black bg-white px-2.5 py-0.5 text-[10px] font-bold uppercase">
                      {spotlight.category}
                    </span>
                  )}
                  {spotlight.year && (
                    <span className="font-mono text-xs font-bold text-neutral-400">{spotlight.year}</span>
                  )}
                </div>

                <h3 className="font-heading text-2xl font-black leading-tight sm:text-3xl">
                  <Link href={`/projects/${spotlight.slug}`} className="hover:underline decoration-[3px]">
                    {spotlight.title}
                  </Link>
                </h3>

                {spotlight.shortDescription && (
                  <p className="max-w-md text-neutral-600">{spotlight.shortDescription}</p>
                )}

                {!!spotlight.techStack?.length && (
                  <div className="flex flex-wrap gap-2">
                    {spotlight.techStack.slice(0, 5).map((tech, ti) => (
                      <span
                        key={tech}
                        className="flex items-center gap-1.5 rounded-full border-[2px] border-black bg-white px-2.5 py-1 text-[11px] font-bold"
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full border border-black"
                          style={{ background: colorForIndex(ti) }}
                        />
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <Link
                    href={`/projects/${spotlight.slug}`}
                    className="flex items-center gap-1.5 rounded-full border-[2px] border-black px-4 py-2 text-sm font-bold shadow-[3px_3px_0px_#000] transition-shadow hover:shadow-[5px_5px_0px_#000]"
                    style={{ background: color }}
                  >
                    View project <ArrowRight size={14} />
                  </Link>
                  {spotlight.githubUrl && (

                    <a href={spotlight.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-full border-[2px] border-black bg-white px-3.5 py-2 text-xs font-bold shadow-[3px_3px_0px_#000] transition-shadow hover:shadow-[5px_5px_0px_#000]"
                    >
                      <Github size={13} /> Code
                    </a>
                  )}
                  {spotlight.liveUrl && (

                    < a href={spotlight.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-full border-[2px] border-black bg-white px-3.5 py-2 text-xs font-bold shadow-[3px_3px_0px_#000] transition-shadow hover:shadow-[5px_5px_0px_#000]"
                    >
                      <ExternalLink size={13} /> Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* filmstrip rail — remaining featured projects */}
        {!!rest.length && (
          <div className="mt-12">
            <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-widest text-neutral-400">
              More highlights →
            </p>
            <div className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0 [scrollbar-width:thin]">
              {rest.map((project, i) => (
                <div
                  key={project._id}
                  className="w-[260px] shrink-0 snap-start sm:w-[300px]"
                >
                  <ProjectCard project={project} index={i + 1} />
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}