"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { ProjectCard } from "./project-card";
import { ProjectSearch } from "./project-search";
import { ProjectFilters } from "./project-filters";
import { ProjectSort } from "./project-sort";
import { ProjectPagination } from "./project-pagination";

interface Project {
  _id: string;
  title: string;
  shortDescription: string;
  year: string | number;
  status: string;
  slug: { current: string };
  coverImage?: {
    _type: string;
    asset?: { _ref: string; _type: string };
    alt?: string;
  };
  featured?: boolean;
  techStack?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectsGridProps {
  project: Project[];
}

const PROJECTS_PER_PAGE = 6;

export function ProjectsGrid({ project }: ProjectsGridProps) {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleFilterChange = (value: string) => {
    setActiveFilter(value);
    setCurrentPage(1);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  // tech list with counts, sorted by popularity — powers the sidebar
  const technologies = useMemo(() => {
    const counts: Record<string, number> = {};
    project.forEach((item) => {
      (item.techStack || []).forEach((tech) => {
        counts[tech] = (counts[tech] || 0) + 1;
      });
    });

    const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);

    return [
      { tech: "All", count: project.length },
      ...entries.map(([tech, count]) => ({ tech, count })),
    ];
  }, [project]);

  const filteredProjects = useMemo(() => {
    const query = search.toLowerCase();

    const filtered = project.filter((item) => {
      const titleMatch = item.title?.toLowerCase().includes(query);
      const descriptionMatch = item.shortDescription
        ?.toLowerCase()
        .includes(query);
      const techSearchMatch = item.techStack?.some((tech) =>
        tech.toLowerCase().includes(query)
      );

      const filterMatch =
        activeFilter === "All" ? true : item.techStack?.includes(activeFilter);

      return (titleMatch || descriptionMatch || techSearchMatch) && filterMatch;
    });

    switch (sortBy) {
      case "oldest":
        return [...filtered].sort((a, b) => Number(a.year) - Number(b.year));
      case "featured":
        return [...filtered].sort(
          (a, b) => Number(b.featured) - Number(a.featured)
        );
      case "completed":
        return filtered.filter((item) => item.status === "completed");
      case "in-progress":
        return filtered.filter((item) => item.status === "in-progress");
      case "newest":
      default:
        return [...filtered].sort((a, b) => Number(b.year) - Number(a.year));
    }
  }, [project, search, activeFilter, sortBy]);

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  const activeFilterCount = activeFilter !== "All" ? 1 : 0;

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Things I've Built"
          description="A collection of products, experiments and ideas I've worked on throughout my journey."
          align="center"
        />

        {/* mobile: toggle filters panel */}
        <div className="mt-10 flex justify-center lg:hidden">
          <button
            onClick={() => setMobileFiltersOpen((v) => !v)}
            className="flex items-center gap-2 rounded-full border-[3px] border-black bg-white px-5 py-2.5 font-semibold shadow-[4px_4px_0px_#000]"
          >
            {mobileFiltersOpen ? <X size={16} /> : <SlidersHorizontal size={16} />}
            Search &amp; Filters
            {activeFilterCount > 0 && (
              <span className="rounded-full bg-black px-2 py-0.5 text-xs text-white">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>

        <div className="mt-10 grid gap-10 lg:mt-16 lg:grid-cols-[280px_1fr]">
          {/* ---------- sidebar (desktop) / drawer (mobile) ---------- */}
          <aside
            className={`${
              mobileFiltersOpen ? "block" : "hidden"
            } lg:sticky lg:top-24 lg:block lg:h-fit`}
          >
            <div className="space-y-8 rounded-[24px] border-[3px] border-black bg-white p-6 shadow-[8px_8px_0px_#000]">
              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-widest text-neutral-400">
                  Search
                </p>
                <ProjectSearch value={search} onChange={handleSearchChange} />
              </div>

              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-widest text-neutral-400">
                  Sort by
                </p>
                <ProjectSort value={sortBy} onChange={handleSortChange} />
              </div>

              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-widest text-neutral-400">
                  Filter by tech
                </p>
                <ProjectFilters
                  technologies={technologies}
                  activeFilter={activeFilter}
                  onChange={handleFilterChange}
                />
              </div>
            </div>
          </aside>

          {/* ---------- results ---------- */}
          <div>
            <p className="mb-6 font-mono text-sm text-neutral-500">
              {filteredProjects.length}{" "}
              {filteredProjects.length === 1 ? "project" : "projects"} found
            </p>

            {filteredProjects.length === 0 && (
              <div className="rounded-2xl border-[3px] border-dashed border-black/30 p-16 text-center">
                <h3 className="font-heading text-3xl font-black">
                  No Projects Found
                </h3>
                <p className="mt-3 text-neutral-500">
                  Try searching with another keyword or filter.
                </p>
              </div>
            )}

            {filteredProjects.length > 0 && (
              <>
                <div className="space-y-5">
                  {paginatedProjects.map((item, index) => (
                    <motion.div
                      key={item._id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: index * 0.06 }}
                    >
                      <ProjectCard project={item} />
                    </motion.div>
                  ))}
                </div>

                <ProjectPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}