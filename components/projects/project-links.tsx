import {
  Rocket,
  FolderGit2,
  ArrowUpRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

interface Project {
  liveUrl?: string;
  githubUrl?: string;
}

interface Props {
  project: Project;
}

export function ProjectLinks({
  project,
}: Props) {

  if (
    !project.liveUrl &&
    !project.githubUrl
  ) {
    return null;
  }

  return (
    <section className="pb-24">
      <Container>

        <div className="relative overflow-hidden rounded-[32px] border-[4px] border-black bg-neutral-900 p-8 shadow-[12px_12px_0px_#000]">

          {/* background decoration */}
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5" />
          <div className="absolute -bottom-14 -left-14 h-52 w-52 rounded-full bg-white/5" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            {/* Left */}
            <div className="max-w-lg">

              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.25em] text-white/50">
                Explore Project
              </span>

              <h3 className="mt-4 font-heading text-3xl font-black text-white sm:text-4xl">
                See it in action
              </h3>

              <p className="mt-3 text-base leading-relaxed text-white/60">
                Explore the live product, check the source code,
                and see how the entire project was built.
              </p>

            </div>

            {/* Right */}
            <div className="flex flex-wrap gap-4">

              {project.liveUrl && (
                <Button
                  size="lg"
                  className="min-w-[170px]"
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Rocket size={18} />

                    Live Demo

                    <ArrowUpRight size={16} />
                  </a>
                </Button>
              )}

              {project.githubUrl && (
                <Button
                  size="lg"
                  variant="outline"
                  className="min-w-[170px] border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <FolderGit2 size={18} />

                    Source Code
                  </a>
                </Button>
              )}

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}