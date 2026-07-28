"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";

import { Container } from "@/components/ui/container";
import { ProjectListItem, colorForIndex } from "./project-meta";
import { ProjectCard } from "./project-card";
import { ProjectSearch } from "./project-search";
import { ProjectFilter } from "./project-filter";

interface ProjectListProps {
  projects: ProjectListItem[];
}

export function ProjectList({ projects }: ProjectListProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [type, setType] = useState("all");
  const [status, setStatus] = useState("all");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const categories = useMemo(
    () => Array.from(new Set(projects.map((p) => p.category).filter(Boolean))) as string[],
    [projects]
  );
  const types = useMemo(
    () => Array.from(new Set(projects.map((p) => p.projectType).filter(Boolean))) as string[],
    [projects]
  );
  const statuses = useMemo(
    () => Array.from(new Set(projects.map((p) => p.status).filter(Boolean))) as string[],
    [projects]
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return projects.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (type !== "all" && p.projectType !== type) return false;
      if (status !== "all" && p.status !== status) return false;
      if (q) {
        const haystack = `${p.title} ${p.shortDescription ?? ""} ${(p.techStack ?? []).join(" ")}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [projects, search, category, type, status]);

  const activeCount = [category, type, status].filter((v) => v !== "all").length;

  const resetAll = () => {
    setCategory("all");
    setType("all");
    setStatus("all");
    setSearch("");
  };

  const filterPanel = (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <p className="font-heading text-lg font-black">Filters</p>
        {activeCount > 0 && (
          <button
            onClick={resetAll}
            className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400 hover:text-black"
          >
            Reset
          </button>
        )}
      </div>

      <ProjectSearch value={search} onChange={setSearch} />

      {!!categories.length && (
        <ProjectFilter label="Category" options={categories} active={category} onChange={setCategory} />
      )}
      {!!types.length && (
        <ProjectFilter label="Type" options={types} active={type} onChange={setType} />
      )}
      {!!statuses.length && (
        <ProjectFilter label="Status" options={statuses} active={status} onChange={setStatus} />
      )}
    </div>
  );

  return (
    <section className="section-padding">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
          {/* desktop sidebar — sticky filter rail */}
          <aside className="hidden shrink-0 lg:sticky lg:top-24 lg:block lg:w-72">
            <div className="rounded-2xl border-[3px] border-black bg-white p-6 shadow-[6px_6px_0px_#000]">
              {filterPanel}
            </div>
          </aside>

          {/* main column */}
          <div className="min-w-0 flex-1">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                  The archive
                </p>
                <h2 className="font-heading text-2xl font-black sm:text-3xl">All Projects</h2>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden font-mono text-xs font-medium text-neutral-500 sm:inline">
                  <span className="font-bold text-black">{filtered.length}</span> of{" "}
                  <span className="font-bold text-black">{projects.length}</span>
                </span>

                {/* mobile filter trigger */}
                <button
                  onClick={() => setMobileFiltersOpen(true)}
                  className="flex items-center gap-2 rounded-full border-[2px] border-black bg-white px-4 py-2 text-sm font-bold shadow-[3px_3px_0px_#000] transition-shadow hover:shadow-[5px_5px_0px_#000] lg:hidden"
                >
                  <SlidersHorizontal size={14} />
                  Filters
                  {activeCount > 0 && (
                    <span
                      className="flex h-4 w-4 items-center justify-center rounded-full border border-black text-[9px] font-bold"
                      style={{ background: colorForIndex(0) }}
                    >
                      {activeCount}
                    </span>
                  )}
                </button>
              </div>
            </div>

            <p className="mb-6 font-mono text-xs font-medium text-neutral-500 sm:hidden">
              Showing <span className="font-bold text-black">{filtered.length}</span> of{" "}
              <span className="font-bold text-black">{projects.length}</span> projects
            </p>

            <AnimatePresence mode="wait">
              {filtered.length ? (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
                >
                  {filtered.map((project, i) => (
                    <ProjectCard key={project._id} project={project} index={i} />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="rounded-2xl border-[3px] border-dashed border-black/20 py-16 text-center"
                >
                  <p className="font-heading text-lg font-bold text-neutral-400">
                    No projects match those filters.
                  </p>
                  <button
                    onClick={resetAll}
                    className="mt-4 rounded-full border-[2px] border-black bg-white px-4 py-2 text-sm font-bold shadow-[3px_3px_0px_#000] transition-shadow hover:shadow-[5px_5px_0px_#000]"
                  >
                    Clear filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>

      {/* mobile filter drawer */}
      <AnimatePresence>
        {mobileFiltersOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileFiltersOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed inset-x-0 bottom-0 z-50 max-h-[80vh] overflow-y-auto rounded-t-3xl border-t-[3px] border-black bg-white p-6 shadow-[0_-8px_0px_#000] lg:hidden"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="mx-auto h-1.5 w-12 rounded-full bg-black/15" />
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="absolute right-6 flex h-8 w-8 items-center justify-center rounded-full border-[2px] border-black bg-white"
                >
                  <X size={14} />
                </button>
              </div>
              {filterPanel}
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="mt-6 w-full rounded-full border-[2px] border-black bg-black py-3 text-sm font-bold text-white shadow-[3px_3px_0px_#000]"
              >
                Show {filtered.length} results
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}