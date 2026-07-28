import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Project, STATUS_META, TYPE_META, colorForIndex } from "../project-meta";

interface ProjectDetailHeroProps {
  project: Project;
}

export function ProjectDetailHero({ project }: ProjectDetailHeroProps) {
  const status = project.status ? STATUS_META[project.status] : null;
  const type = project.projectType ? TYPE_META[project.projectType] : null;

  const facts = [
    project.clientName && { label: "Client", value: project.clientName },
    project.role && { label: "Role", value: project.role },
    project.duration && { label: "Duration", value: project.duration },
    project.teamSize && { label: "Team", value: project.teamSize },
    project.year && { label: "Year", value: String(project.year) },
    project.category && { label: "Category", value: project.category },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <section className="mb-7 pb-0">
      <Container>
        <Link
          href="/projects"
          className="mb-6 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-black"
        >
          <ArrowLeft size={13} /> All projects
        </Link>

        <div className="relative flex flex-col overflow-visible rounded-2xl border-[3px] border-black bg-white shadow-[8px_8px_0px_#000] lg:flex-row">
          {/* main stub — title & description */}
          <div className="flex-1 px-6 py-10 sm:px-10 sm:py-14">
            <div className="mb-6 flex flex-wrap items-center gap-2">
              {type && (
                <span className="rounded-full border-[2px] border-black bg-white px-2.5 py-0.5 text-[10px] font-bold uppercase">
                  {type.label}
                </span>
              )}
              {status && (
                <span
                  className="rounded-full border-[2px] border-black px-2.5 py-0.5 text-[10px] font-bold"
                  style={{ background: status.color }}
                >
                  {status.label}
                </span>
              )}
              {project.featured && (
                <span
                  className="rounded-full border-[2px] border-black px-2.5 py-0.5 text-[10px] font-bold"
                  style={{ background: "var(--yellow)" }}
                >
                  ★ Featured
                </span>
              )}
            </div>

            <h1 className="font-heading text-4xl font-black leading-tight sm:text-5xl">
              {project.title}
            </h1>

            {project.shortDescription && (
              <p className="mt-4 max-w-xl text-lg text-neutral-600">
                {project.shortDescription}
              </p>
            )}

            {!!project.metrics?.length && (
              <div className="mt-10 flex flex-wrap gap-4">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border-[2px] border-black bg-white px-4 py-3 shadow-[3px_3px_0px_#000]"
                  >
                    <p className="font-heading text-xl font-black">{metric.value}</p>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-wide text-neutral-400">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* perforation divider */}
          <div className="relative hidden w-0 lg:block">
            <div className="absolute -left-[9px] -top-3 h-6 w-6 rounded-full border-[3px] border-black bg-[var(--page-bg,#faf7f2)]" />
            <div className="absolute -bottom-3 -left-[9px] h-6 w-6 rounded-full border-[3px] border-black bg-[var(--page-bg,#faf7f2)]" />
            <div className="h-full border-l-[2px] border-dashed border-black/25" />
          </div>
          <div className="relative lg:hidden">
            <div className="border-t-[2px] border-dashed border-black/25" />
          </div>

          {/* spec-rail stub */}
          <div className="flex w-full shrink-0 flex-col justify-center gap-5 px-6 py-8 sm:px-10 sm:py-10 lg:w-72">
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400">
              Fig. spec
            </p>
            {facts.map((fact, i) => (
              <div key={fact.label} className="flex items-start justify-between gap-3">
                <span className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                  <span
                    className="h-2 w-2 shrink-0 rounded-full border border-black"
                    style={{ background: colorForIndex(i) }}
                  />
                  {fact.label}
                </span>
                <span className="text-right font-heading text-sm font-bold sm:text-base">
                  {fact.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}