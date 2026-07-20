"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FileCode2, SearchX } from "lucide-react";

import { Container } from "../ui/container";
import JavaCard from "./java-card";
import JavaSearch from "./java-search";
import JavaFilters from "./java-filters";

const ORANGE = "var(--orange, #fb923c)";

type JavaSnippet = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  complexity: string;
  tags?: string[];
  featured?: boolean;
};

type JavaGridProps = {
  snippets: JavaSnippet[];
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const rotations = ["-rotate-1", "rotate-1", "rotate-0", "rotate-1", "-rotate-1"];

export default function JavaGrid({ snippets }: JavaGridProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSnippets = useMemo(() => {
    const query = search.trim().toLowerCase();

    return (snippets ?? []).filter((snippet) => {
      const categoryMatch =
        activeCategory === "all" ? true : snippet.category === activeCategory;

      if (!categoryMatch) return false;
      if (!query) return true;

      return (
        snippet.title?.toLowerCase().includes(query) ||
        snippet.description?.toLowerCase().includes(query) ||
        snippet.category?.toLowerCase().includes(query) ||
        snippet.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    });
  }, [snippets, search, activeCategory]);

  if (!snippets?.length) {
    return (
      <section id="snippets" className="pb-20">
        <Container>
          <div className="rounded-[28px] border-[3px] border-black bg-white p-12 text-center shadow-[10px_10px_0px_#000]">
            <div
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border-[3px] border-black"
              style={{ background: ORANGE }}
            >
              <FileCode2 size={34} />
            </div>

            <h2 className="mt-8 text-3xl font-black">No Java Snippets Found</h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-neutral-600">
              There are no snippets available right now. Add some snippets in
              Sanity Studio and they will automatically appear here.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="snippets" className="pb-24">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {/* heading */}
          <motion.div variants={fadeUp} className="mb-10">
            <p className="text-sm font-black uppercase tracking-widest text-neutral-500">
              Java Library
            </p>
            <h2 className="mt-2 text-4xl font-black">All Java Snippets</h2>
            <p className="mt-4 max-w-2xl leading-7 text-neutral-600">
              Browse every Java snippet in one place. From arrays and strings
              to Streams API, Spring Boot and Collections, everything is
              organized for quick learning and faster development.
            </p>
          </motion.div>

          {/* toolbar */}
          <motion.div
            variants={fadeUp}
            className="rounded-[24px] border-[3px] border-black bg-white p-6 shadow-[8px_8px_0px_#000]"
          >
            <JavaSearch value={search} onChange={setSearch} />
            <div className="mt-5">
              <JavaFilters activeCategory={activeCategory} onChange={setActiveCategory} />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-6 text-sm text-neutral-500">
            Showing <span className="font-bold text-black">{filteredSnippets.length}</span>{" "}
            of {snippets.length} snippets
          </motion.div>

          {/* grid / empty state */}
          {filteredSnippets.length > 0 ? (
            <motion.div
              variants={fadeUp}
              className="mt-8 grid gap-8 sm:grid-cols-2 xl:grid-cols-3"
            >
              {filteredSnippets.map((snippet, index) => (
                <JavaCard
                  key={snippet._id}
                  snippet={snippet}
                  rotation={rotations[index % rotations.length]}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col items-center rounded-[24px] border-[3px] border-dashed border-black/30 p-16 text-center"
            >
              <SearchX size={40} className="text-neutral-300" />
              <h3 className="mt-5 text-2xl font-black">No matching snippets</h3>
              <p className="mt-3 max-w-md text-neutral-500">
                Try a different search term or pick another category.
              </p>
            </motion.div>
          )}

          {/* bottom note */}
          <motion.div
            variants={fadeUp}
            className="mt-16 rounded-[28px] border-[3px] border-black bg-[var(--cream)] p-8 text-center shadow-[8px_8px_0px_#000]"
          >
            <h3 className="text-3xl font-black">Keep Learning ☕</h3>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-neutral-700">
              Every snippet here represents practical Java knowledge collected
              from interview preparation, backend development, competitive
              programming, and real-world projects.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}