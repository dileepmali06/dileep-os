"use client";

import {
  Star,
  GitFork,
  ExternalLink,
  Code2,
  BookMarked,
} from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "@/components/ui/button";

export type Repository = {
  _id: string;
  name: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  repositoryType?: string;
};

const languageColors: Record<string, string> = {
  "Next.js": "#000000",
  React: "#61dafb",
  "Node.js": "#3c873a",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  MongoDB: "#4db33d",
  Tailwind: "#38bdf8",
  "Tailwind CSS": "#38bdf8",
  "Sanity CMS": "#f03e2f",
  Sanity: "#f03e2f",
  SEO: "#f5a623",
  Prisma: "#5a67d8",
  "Spring Boot": "#6db33f",
};

const badgeColors = [
  "bg-[var(--yellow)]",
  "bg-[var(--blue)] text-black",
  "bg-[var(--green)]",
  "bg-[var(--pink)]",
];

function primaryLanguage(tech: string[]) {
  return (
    tech.find((t) => languageColors[t]) ??
    tech[0] ??
    "Unknown"
  );
}

export function FeaturedRepositories({
  data,
}: {
  data: Repository[];
}) {
  if (!data || data.length === 0) {
    return null;
  }

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
          {/* Browser Header */}
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
            {data.map((repo, index) => {
              const lang = primaryLanguage(
                repo.techStack
              );

              const langColor =
                languageColors[lang] ??
                "#999";

              return (
                <motion.div
                  key={repo._id}
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.35,
                    delay:
                      index *
                      0.08,
                  }}
                  className="group p-6 transition-colors duration-200 hover:bg-neutral-50 sm:p-7"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Code2
                        size={18}
                        className="text-neutral-400"
                      />

                      <a
                        href={
                          repo.githubUrl
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-lg font-bold text-blue-700 hover:underline"
                      >
                        {repo.name}
                      </a>

                      <span className="rounded-full border border-black/20 px-2 py-0.5 font-mono text-[10px] text-neutral-500">
                        Public
                      </span>

                      {repo.repositoryType && (
                        <span className="rounded-full border border-black/20 bg-neutral-100 px-2 py-0.5 font-mono text-[10px] text-neutral-500">
                          {
                            repo.repositoryType
                          }
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2">
                      {repo.githubUrl && (
                        <Button
                          size="sm"
                          variant="outline"

                        >
                          <a
                            href={
                              repo.githubUrl
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5"
                          >
                            <Code2
                              size={
                                14
                              }
                            />
                            Code
                          </a>
                        </Button>
                      )}

                      {repo.liveUrl && (
                        <Button
                          size="sm"

                        >
                          <a
                            href={
                              repo.liveUrl
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5"
                          >
                            <ExternalLink
                              size={
                                14
                              }
                            />
                            Live
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">
                    {
                      repo.description
                    }
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                    <div className="flex flex-wrap gap-2">
                      {repo.techStack.map(
                        (
                          tech,
                          techIndex
                        ) => (
                          <span
                            key={
                              tech
                            }
                            className={`rounded-full border-[2px] border-black px-3 py-1 text-xs font-semibold ${badgeColors[
                              techIndex %
                              badgeColors.length
                              ]
                              }`}
                          >
                            {
                              tech
                            }
                          </span>
                        )
                      )}
                    </div>

                    <div className="ml-auto flex items-center gap-4 font-mono text-xs text-neutral-500">
                      <span className="flex items-center gap-1.5">
                        <span
                          className="h-2.5 w-2.5 rounded-full border border-black/30"
                          style={{
                            background:
                              langColor,
                          }}
                        />
                        {lang}
                      </span>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Button
            variant="outline"

          >
            <a
              href="https://github.com/dileepmali06"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <BookMarked
                size={16}
              />
              See all repositories on GitHub
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}