"use client";

import Link from "next/link";
import Image from "next/image";
import type { Image as SanityImage } from "sanity";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";

export type Project = {
  _id: string;
  title: string;
  shortDescription: string;
  techStack: string[];
  coverImage?: SanityImage;
  githubUrl?: string;
  liveUrl?: string;
  slug?: { current: string };
  status?: string;
  year?: number;
  featured?: boolean;
};

const accentPalette = ["var(--blue)", "var(--pink)", "var(--green)", "var(--yellow)"];

const badgeVariants = ["default", "secondary", "success", "danger"] as const;

const statusStyles: Record<string, string> = {
  "in-progress": "bg-[var(--yellow)]",
  completed: "bg-[var(--green)]",
  live: "bg-[var(--green)]",
  archived: "bg-neutral-200",
};

function statusLabel(status?: string) {
  if (!status) return null;
  return status
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

function hostname(url?: string) {
  if (!url) return "your-project.app";
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return url;
  }
}

export function FeaturedProjects({ data }: { data: Project[] }) {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Things I've Built"
          description="A collection of products, experiments and ideas I've worked on."
          align="center"
        />

        <div className="mt-20 space-y-24">
          {data.map((project, index) => {
            const accent = accentPalette[index % accentPalette.length];
            const label = statusLabel(project.status);
            const isReversed = index % 2 === 1;
            const imageUrl = project.coverImage
              ? urlFor(project.coverImage).width(1200).fit("max").url()
              : null;

            return (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55 }}
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  isReversed ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* ---------- browser window preview ---------- */}
                <div className="lg:[direction:ltr]">
                  <div className="overflow-hidden rounded-2xl border-[3px] border-black shadow-[10px_10px_0px_#000]">
                    <div className="flex items-center gap-3 border-b-[3px] border-black bg-neutral-100 px-4 py-3">
                      <div className="flex gap-1.5">
                        <span className="h-3 w-3 rounded-full border border-black/40 bg-red-500" />
                        <span className="h-3 w-3 rounded-full border border-black/40 bg-yellow-400" />
                        <span className="h-3 w-3 rounded-full border border-black/40 bg-green-500" />
                      </div>
                      <div className="flex-1 rounded-md border-[2px] border-black bg-white px-3 py-1 text-center font-mono text-xs text-neutral-500">
                        {hostname(project.liveUrl)}
                      </div>
                    </div>

                    <div className="relative flex aspect-[4/3] w-full items-center justify-center bg-neutral-50 sm:aspect-video">
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={project.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-contain p-3"
                        />
                      ) : (
                        <div
                          className="absolute inset-0 h-full w-full opacity-90"
                          style={{ background: accent }}
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* ---------- content ---------- */}
                <div className="lg:[direction:ltr]">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-neutral-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="h-[2px] w-8 bg-black/20" />
                    {project.year && (
                      <span className="font-mono text-sm text-neutral-400">
                        {project.year}
                      </span>
                    )}
                    {label && (
                      <span
                        className={`rounded-full border-[2px] border-black px-3 py-0.5 text-xs font-semibold ${
                          statusStyles[project.status ?? ""] ?? "bg-neutral-100"
                        }`}
                      >
                        {label}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 font-heading text-3xl font-black leading-tight sm:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-base leading-relaxed text-neutral-600 sm:text-lg">
                    {project.shortDescription}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.techStack.map((tag, tagIndex) => (
                      <Badge
                        key={tag}
                        variant={badgeVariants[tagIndex % badgeVariants.length]}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.liveUrl && (
                      <Button>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          View Project
                          <ArrowUpRight size={16} className="ml-1.5" />
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button variant="outline">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <FolderGit2 size={16} className="mr-1.5" />
                          Source Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 flex justify-center">
          <Button size="lg" variant="outline">
            <Link href="/projects" className="flex items-center">
              View All Projects
              <ArrowUpRight size={18} className="ml-2" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}