"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, FolderGit2, Star } from "lucide-react";
import { motion } from "framer-motion";
import type { Image as SanityImage } from "sanity";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";

interface Project {
  title: string;
  shortDescription: string;
  year: string | number;
  status: string;
  slug: { current: string };
  coverImage?: SanityImage;
  featured?: boolean;
  techStack?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

const statusStyles: Record<string, string> = {
  "in-progress": "bg-[var(--yellow)]",
  completed: "bg-[var(--green)]",
  live: "bg-[var(--green)]",
  archived: "bg-neutral-200",
};

export function ProjectCard({ project }: ProjectCardProps) {
  const imageUrl = project.coverImage
    ? urlFor(project.coverImage).width(300).height(300).fit("crop").url()
    : null;

  const visibleTags = project.techStack?.slice(0, 3) ?? [];
  const extraCount = (project.techStack?.length ?? 0) - visibleTags.length;

  return (
    <div className="flex flex-col gap-5 rounded-2xl border-[3px] border-black bg-white p-5 shadow-[6px_6px_0px_#000] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_#000] sm:flex-row sm:items-center sm:p-6">
      {/* app icon */}
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-[3px] border-black bg-neutral-100 sm:h-24 sm:w-24">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={project.title}
            fill
            sizes="96px"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Star size={26} className="text-neutral-300" />
          </div>
        )}
      </div>

      {/* content */}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-heading text-xl font-black sm:text-2xl">
            {project.title}
          </h3>
          {project.featured && (
            <span className="rounded-full border-[2px] border-black bg-[var(--pink)] px-2 py-0.5 text-[10px] font-bold uppercase">
              Featured
            </span>
          )}
          <span
            className={`rounded-full border-[2px] border-black px-2 py-0.5 text-[10px] font-bold uppercase ${
              statusStyles[project.status] ?? "bg-neutral-100"
            }`}
          >
            {project.status}
          </span>
          <span className="font-mono text-xs text-neutral-400">
            {project.year}
          </span>
        </div>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-600 sm:text-base">
          {project.shortDescription}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {visibleTags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* actions */}
      <div className="flex shrink-0 items-center gap-2 sm:flex-col sm:items-stretch">
        <Button size="sm">
          <Link
            href={`/projects/${project.slug.current}`}
            className="flex items-center justify-center gap-1.5"
          >
            View
            <ArrowUpRight size={15} />
          </Link>
        </Button>

        <div className="flex gap-2 md:mt-6">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-lg border-[2px] border-black transition-colors hover:bg-neutral-50"
            >
              <FolderGit2 size={15} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              className="flex h-9 w-9 items-center justify-center rounded-lg border-[2px] border-black transition-colors hover:bg-neutral-50"
            >
              <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}