"use client";

import { Star, GitFork, ExternalLink, Code2, BookMarked } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "@/components/ui/button";

const repositories = [
  {
    name: "dilip-os",
    description:
      "My personal developer operating system built with Next.js and Sanity CMS.",
    tech: ["Next.js", "Sanity", "Tailwind"],
    stars: 0,
    forks: 0,
    github: "#",
    live: "#",
  },
  {
    name: "smile-care",
    description: "Modern dental clinic website with CMS driven architecture.",
    tech: ["Next.js", "Sanity", "SEO"],
    stars: 0,
    forks: 0,
    github: "#",
    live: "#",
  },
  {
    name: "explore-bharat",
    description: "Travel platform showcasing destinations across India.",
    tech: ["React", "Node.js", "MongoDB"],
    stars: 0,
    forks: 0,
    github: "#",
    live: "#",
  },
];

const languageColors: Record<string, string> = {
  "Next.js": "#000000",
  React: "#61dafb",
  "Node.js": "#3c873a",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  MongoDB: "#4db33d",
  Tailwind: "#38bdf8",
  Sanity: "#f03e2f",
  SEO: "#f5a623",
};

function primaryLanguage(tech: string[]) {
  return tech.find((t) => languageColors[t]) ?? tech[0];
}

export function FeaturedRepositories() {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Repositories"
          title="Featured Repositories"
          description="A few repositories that represent my learning journey and engineering work."
          align="center"
        />

        <div className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-2xl border-4 border-black shadow-[10px_10px_0px_#000]">
          {/* browser-style chrome */}
          <div className="flex items-center gap-3 border-b-[3px] border-black bg-neutral-100 px-5 py-3">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full border border-black/40 bg-red-500" />
              <span className="h-3 w-3 rounded-full border border-black/40 bg-yellow-400" />
              <span className="h-3 w-3 rounded-full border border-black/40 bg-green-500" />
            </div>
            <div className="flex flex-1 items-center gap-2 rounded-md border-2 border-black bg-white px-3 py-1 font-mono text-xs text-neutral-500">
              <BookMarked size={12} />
              github.com/dileepmali06
            </div>
          </div>

          <div className="divide-y-[3px] divide-black bg-white">
            {repositories.map((repo, index) => {
              const lang = primaryLanguage(repo.tech);
              const langColor = languageColors[lang] ?? "#999";

              return (
                <motion.div
                  key={repo.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="group p-6 transition-colors duration-200 hover:bg-neutral-50 sm:p-7"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Code2 size={18} className="text-neutral-400" />
                      <a
                        href={repo.github}
                        className="font-mono text-lg font-bold text-blue-700 hover:underline"
                      >
                        {repo.name}
                      </a>
                      <span className="rounded-full border border-black/20 px-2 py-0.5 font-mono text-[10px] text-neutral-500">
                        Public
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <a
                          href={repo.github}
                          className="flex items-center gap-1.5"
                        >
                          <Code2 size={14} />
                          Code
                        </a>
                      </Button>
                      <Button size="sm">
                        <a href={repo.live} className="flex items-center gap-1.5">
                          <ExternalLink size={14} />
                          Live
                        </a>
                      </Button>
                    </div>
                  </div>

                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">
                    {repo.description}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                    <div className="flex flex-wrap gap-1.5">
                      {repo.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-[11px] font-medium text-neutral-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="ml-auto flex items-center gap-4 font-mono text-xs text-neutral-500">
                      <span className="flex items-center gap-1.5">
                        <span
                          className="h-2.5 w-2.5 rounded-full border border-black/30"
                          style={{ background: langColor }}
                        />
                        {lang}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star size={14} />
                        {repo.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={14} />
                        {repo.forks}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Button variant="outline">
            <a
              href="https://github.com/dileepmali06"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <BookMarked size={16} />
              See all repositories on GitHub
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}