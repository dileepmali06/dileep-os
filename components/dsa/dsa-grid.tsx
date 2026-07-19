"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search as SearchIcon, SlidersHorizontal, ChevronLeft, ChevronRight } from "lucide-react";

import DSASort from "./dsa-sort";
import DSASearch from "./dsa-search";
import DSAFilters from "./dsa-filters";
import DSAProblemCard from "./dsa-card";

type DSAProblem = {
  _id: string;
  title: string;
  slug: { current: string };
  platform: string;
  problemUrl: string;
  difficulty: string;
  topics: string[];
  timeComplexity: string;
  spaceComplexity: string;
  keyLearning: string;
  solvedAt: string;
  featured: boolean;
  status: string;
  attempts: number;
};

type DSAGridProps = {
  problems: DSAProblem[];
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } },
};

const difficultyOrder: Record<string, number> = { easy: 1, medium: 2, hard: 3 };
const PAGE_SIZE = 20;

export default function DSAGrid({ problems }: DSAGridProps) {
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("all");
  const [platform, setPlatform] = useState("all");
  const [status, setStatus] = useState("all");
  const [sortBy, setSortBy] = useState("latest");
  const [page, setPage] = useState(1);

  const filteredProblems = useMemo(() => {
    let data = [...problems];

    if (search.trim()) {
      const query = search.toLowerCase();
      data = data.filter(
        (problem) =>
          problem.title.toLowerCase().includes(query) ||
          problem.platform.toLowerCase().includes(query) ||
          problem.topics?.some((topic) => topic.toLowerCase().includes(query))
      );
    }

    if (difficulty !== "all") {
      data = data.filter((problem) => problem.difficulty === difficulty);
    }

    if (platform !== "all") {
      data = data.filter((problem) => problem.platform === platform);
    }

    if (status !== "all") {
      data = data.filter((problem) => problem.status === status);
    }

    switch (sortBy) {
      case "oldest":
        data.sort((a, b) => new Date(a.solvedAt).getTime() - new Date(b.solvedAt).getTime());
        break;
      case "easy":
        data.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
        break;
      case "hard":
        data.sort((a, b) => difficultyOrder[b.difficulty] - difficultyOrder[a.difficulty]);
        break;
      default:
        data.sort((a, b) => new Date(b.solvedAt).getTime() - new Date(a.solvedAt).getTime());
    }

    return data;
  }, [problems, search, difficulty, platform, status, sortBy]);

  useEffect(() => {

    let t: number | undefined;
    if (page !== 1) {
      t = window.setTimeout(() => setPage(1), 0);
    }
    return () => {
      if (t) clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, difficulty, platform, status, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredProblems.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageProblems = filteredProblems.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const pageNumbers = useMemo(() => {
    const pages: (number | "gap")[] = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "gap") {
        pages.push("gap");
      }
    }
    return pages;
  }, [totalPages, currentPage]);

  return (
    <section id="problems" className="py-20">
      <div className="container mx-auto max-w-6xl px-4">
        {/* controls */}
        <div className="mb-8 rounded-3xl border-[3px] border-black bg-white p-5 shadow-[7px_7px_0px_#000] sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="lg:w-72">
              <DSASearch value={search} onChange={setSearch} />
            </div>

            <div className="flex-1">
              <DSAFilters
                difficulty={difficulty}
                onDifficultyChange={setDifficulty}
                platform={platform}
                onPlatformChange={setPlatform}
                status={status}
                onStatusChange={setStatus}
              />
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t-[2px] border-dashed border-black/10 pt-5">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <SlidersHorizontal className="h-4 w-4" />
              {filteredProblems.length} problem
              {filteredProblems.length === 1 ? "" : "s"} found
            </div>

            <DSASort value={sortBy} onChange={setSortBy} />
          </div>
        </div>

        {/* list */}
        {pageProblems.length > 0 ? (
          <>
            <div className="overflow-hidden rounded-3xl border-[3px] border-black bg-white shadow-[8px_8px_0px_#000]">
              {/* header row - desktop only */}
              <div className="hidden grid-cols-[44px_1fr_110px_140px_90px_70px] items-center gap-4 border-b-[3px] border-black bg-neutral-50 px-5 py-3 text-[11px] font-bold uppercase tracking-wide text-neutral-500 sm:grid">
                <span />
                <span>Title</span>
                <span>Difficulty</span>
                <span>Topics</span>
                <span>Platform</span>
                <span className="text-right">Tries</span>
              </div>

              <motion.div
                key={currentPage}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {pageProblems.map((problem) => (
                  <DSAProblemCard key={problem._id} problem={problem} />
                ))}
              </motion.div>
            </div>

            {/* pagination */}
            {totalPages > 1 && (
              <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  aria-label="Previous page"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border-[2px] border-black bg-white disabled:opacity-30"
                >
                  <ChevronLeft size={16} />
                </button>

                {pageNumbers.map((p, index) =>
                  p === "gap" ? (
                    <span key={`gap-${index}`} className="px-1 text-sm text-neutral-400">
                      ...
                    </span>
                  ) : (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPage(p)}
                      className={`flex h-9 w-9 items-center justify-center rounded-xl border-[2px] border-black text-sm font-bold ${p === currentPage ? "bg-[var(--yellow)]" : "bg-white hover:bg-neutral-50"
                        }`}
                    >
                      {p}
                    </button>
                  )
                )}

                <button
                  type="button"
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  aria-label="Next page"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border-[2px] border-black bg-white disabled:opacity-30"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-3xl border-[3px] border-black bg-white px-6 py-24 text-center shadow-[8px_8px_0px_#000]">
            <SearchIcon className="mb-6 h-16 w-16 text-neutral-300" />
            <h3 className="text-3xl font-black">No problems found</h3>
            <p className="mt-4 max-w-md text-neutral-600">
              Try changing your search keyword or filters to find the problems
              you&apos;re looking for.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}