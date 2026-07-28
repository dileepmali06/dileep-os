"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FiGithub as Github } from "react-icons/fi";
import { urlFor } from "../../sanity/lib/image";

import {
    ProjectListItem,
    STATUS_META,
    colorForIndex,
} from "./project-meta";
import Image from "next/image";

interface ProjectCardProps {
    project: ProjectListItem;
    index?: number;
    compact?: boolean;
}

export function ProjectCard({ project, index = 0, compact = false }: ProjectCardProps) {
    const status = project.status ? STATUS_META[project.status] : null;
    const color = colorForIndex(index);

    return (
        <motion.div
            initial={{ opacity: 0, y: 16, rotate: index % 2 === 0 ? -1 : 1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -5 }}
            className="group relative h-full"
        >
            {/* folded corner tab — fig number */}
            <div
                className="absolute -top-3 left-5 z-10 flex h-7 w-11 items-center justify-center rounded-t-md border-[2px] border-b-0 border-black font-mono text-[10px] font-bold shadow-[2px_-2px_0px_#000]"
                style={{ background: color }}
            >
                {String(index + 1).padStart(2, "0")}
            </div>

            <Link
                href={`/projects/${project.slug}`}
                className="relative flex h-full flex-col overflow-hidden rounded-2xl border-[3px] border-black bg-white shadow-[6px_6px_0px_#000] transition-shadow duration-200 group-hover:shadow-[9px_9px_0px_#000]"
            >
                {/* image panel — letterboxed, never cropped */}
                <div
                    className="relative flex aspect-[16/11] w-full shrink-0 items-center justify-center overflow-hidden border-b-[3px] border-black p-4"
                    style={{ background: `color-mix(in srgb, ${color} 18%, white)` }}
                >
                    {project.coverImage ? (
                        <Image
                            src={urlFor(project.coverImage).width(800).fit("max").url()}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 800px"
                            className="object-contain p-3 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.15)] transition-transform duration-300 group-hover:scale-[1.04]"
                        />
                    ) : (
                        <span className="font-heading text-4xl font-black text-black/10">
                            {project.title.slice(0, 2).toUpperCase()}
                        </span>
                    )}

                    <div className="absolute right-3 top-3 flex flex-col items-end gap-1.5">
                        {project.featured && (
                            <span className="rounded-full border-[2px] border-black bg-white px-2.5 py-0.5 text-[10px] font-bold uppercase shadow-[2px_2px_0px_#000]">
                                ★ Featured
                            </span>
                        )}
                        {status && (
                            <span
                                className="rounded-full border-[2px] border-black px-2.5 py-0.5 text-[10px] font-bold shadow-[2px_2px_0px_#000]"
                                style={{ background: status.color }}
                            >
                                {status.label}
                            </span>
                        )}
                    </div>
                </div>

                {/* perforated divider, rolodex-card feel */}
                <div className="flex justify-center gap-1.5 border-b-[2px] border-dashed border-black/15 bg-white py-1.5">
                    {Array.from({ length: 14 }).map((_, i) => (
                        <span key={i} className="h-1 w-1 rounded-full bg-black/10" />
                    ))}
                </div>

                <div className={`flex flex-1 flex-col gap-3 px-5 py-5 ${compact ? "" : "sm:px-6"}`}>
                    <div className="flex items-start justify-between gap-3">
                        <h3 className="font-heading text-lg font-black leading-tight sm:text-xl">
                            {project.title}
                        </h3>
                        {project.year && (
                            <span className="shrink-0 rounded-full border-[2px] border-black bg-white px-2 py-0.5 font-mono text-[10px] font-bold text-neutral-500">
                                {project.year}
                            </span>
                        )}
                    </div>

                    {project.shortDescription && (
                        <p className="line-clamp-2 text-sm text-neutral-600">
                            {project.shortDescription}
                        </p>
                    )}

                    {(project.role || project.duration || project.teamSize) && (
                        <div className="flex flex-wrap gap-x-4 gap-y-1 border-t-[2px] border-dashed border-black/10 pt-2.5 font-mono text-[11px] uppercase tracking-wide text-neutral-400">
                            {project.role && <span>{project.role}</span>}
                            {project.duration && <span>{project.duration}</span>}
                            {project.teamSize && <span>{project.teamSize}</span>}
                        </div>
                    )}

                    {!!project.techStack?.length && (
                        <div className="mt-1 flex flex-wrap gap-2">
                            {project.techStack.slice(0, 4).map((tech, i) => (
                                <span
                                    key={tech}
                                    className="flex items-center gap-1.5 rounded-full border-[2px] border-black bg-white px-2.5 py-1 text-[11px] font-bold"
                                >
                                    <span
                                        className="h-1.5 w-1.5 rounded-full border border-black"
                                        style={{ background: colorForIndex(i) }}
                                    />
                                    {tech}
                                </span>
                            ))}
                            {project.techStack.length > 4 && (
                                <span className="rounded-full border-[2px] border-dashed border-black/30 px-2.5 py-1 text-[11px] font-bold text-neutral-400">
                                    +{project.techStack.length - 4}
                                </span>
                            )}
                        </div>
                    )}

                    <div className="mt-auto flex items-center gap-3 border-t-[2px] border-dashed border-black/10 pt-3">
                        {project.githubUrl && (
                            <span className="flex items-center gap-1 text-xs font-bold text-neutral-500">
                                <Github size={13} /> Code
                            </span>
                        )}
                        {project.liveUrl && (
                            <span className="flex items-center gap-1 text-xs font-bold text-neutral-500">
                                <ExternalLink size={13} /> Live
                            </span>
                        )}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}