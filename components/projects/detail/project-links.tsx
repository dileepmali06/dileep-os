import { ExternalLink } from "lucide-react";
import { FiGithub as Github } from "react-icons/fi";
import { SiFigma as Figma } from "react-icons/si";
import { ComponentType } from "react";

import { Container } from "@/components/ui/container";

interface ProjectLinksProps {
    githubUrl?: string;
    liveUrl?: string;
    figmaUrl?: string;
}

export function ProjectLinks({ githubUrl, liveUrl, figmaUrl }: ProjectLinksProps) {
    if (!githubUrl && !liveUrl && !figmaUrl) return null;

    const links = [
        liveUrl && { href: liveUrl, label: "Live site", sub: "View it running", icon: ExternalLink, color: "var(--green)" },
        githubUrl && { href: githubUrl, label: "Source code", sub: "Read the repo", icon: Github, color: "var(--blue)" },
        figmaUrl && { href: figmaUrl, label: "Design file", sub: "See the mockups", icon: Figma, color: "var(--pink)" },
    ].filter(Boolean) as { href: string; label: string; sub: string; icon: ComponentType<{ size: number }>; color: string }[];

    return (
        <section className="section-padding py-8">
            <Container>
                <div className="relative overflow-hidden rounded-2xl border-[3px] border-black bg-white shadow-[6px_6px_0px_#000]">
                    <div className="flex flex-col sm:flex-row">
                        {links.map((link, i) => {
                            const Icon = link.icon;
                            const isLast = i === links.length - 1;

                            return (

                                <a key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group relative flex flex-1 items-center gap-4 px-6 py-5 transition-colors hover:bg-neutral-50 sm:px-8 ${!isLast ? "border-b-[2px] border-dashed border-black/15 sm:border-b-0" : ""
                                        }`}
                                >
                                    <span
                                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[2px] border-black transition-transform group-hover:scale-105"
                                        style={{ background: link.color }}
                                    >
                                        <Icon size={17} />
                                    </span>

                                    <div className="min-w-0 flex-1">
                                        <p className="font-heading text-base font-black leading-tight">
                                            {link.label}
                                        </p>
                                        <p className="font-mono text-[10px] uppercase tracking-wide text-neutral-400">
                                            {link.sub}
                                        </p>
                                    </div>

                                    <ExternalLink
                                        size={14}
                                        className="shrink-0 text-neutral-300 transition-colors group-hover:text-black"
                                    />

                                    {/* perforation punch-hole between stubs (desktop only) */}
                                    {!isLast && (
                                        <span className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 rounded-full border-[3px] border-black bg-[var(--page-bg,#faf7f2)] sm:block" />
                                    )}
                                </a>
                            );
                        })}
                    </div>

                    {/* vertical perforation lines (desktop only) */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-full sm:block">
                        {links.slice(0, -1).map((_, i) => (
                            <div
                                key={i}
                                className="absolute inset-y-0 border-l-[2px] border-dashed border-black/15"
                                style={{ left: `${((i + 1) / links.length) * 100}%` }}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}