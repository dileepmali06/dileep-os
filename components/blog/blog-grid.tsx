"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { BlogCard } from "./blog-card";
import { BlogSearch } from "./blog-search";
import { BlogFilters } from "./blog-filters";
import { BlogSort } from "./blog-sort";
import { BlogPagination } from "./blog-pagination";

interface Blog {
  _id: string;
  title: string;
  excerpt: string;
  slug: { current: string };
  coverImage?: any;
  category?: string;
  tags?: string[];
  publishedAt?: string;
  featured?: boolean;
  readingTime?: number;
}

interface BlogsGridProps {
  blogs: Blog[];
}

const BLOGS_PER_PAGE = 6;

export function BlogsGrid({ blogs }: BlogsGridProps) {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = useMemo(
    () => [
      "All",
      ...Array.from(
        new Set(blogs.map((blog) => blog.category).filter(Boolean))
      ),
    ],
    [blogs]
  ) as string[];

  const filteredBlogs = useMemo(() => {
    const query = search.toLowerCase();

    const filtered = blogs.filter((blog) => {
      const titleMatch = blog.title?.toLowerCase().includes(query);
      const excerptMatch = blog.excerpt?.toLowerCase().includes(query);
      const tagMatch = blog.tags?.some((tag) =>
        tag.toLowerCase().includes(query)
      );

      const categoryMatch =
        activeFilter === "All" ? true : blog.category === activeFilter;

      return (titleMatch || excerptMatch || tagMatch) && categoryMatch;
    });

    switch (sortBy) {
      case "oldest":
        return [...filtered].sort(
          (a, b) =>
            new Date(a.publishedAt || "").getTime() -
            new Date(b.publishedAt || "").getTime()
        );
      case "featured":
        return [...filtered].sort(
          (a, b) => Number(b.featured) - Number(a.featured)
        );
      case "reading-time":
        return [...filtered].sort(
          (a, b) => (a.readingTime || 0) - (b.readingTime || 0)
        );
      case "newest":
      default:
        return [...filtered].sort(
          (a, b) =>
            new Date(b.publishedAt || "").getTime() -
            new Date(a.publishedAt || "").getTime()
        );
    }
  }, [blogs, search, activeFilter, sortBy]);

  const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * BLOGS_PER_PAGE,
    currentPage * BLOGS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search, activeFilter, sortBy]);

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Writing"
          title="Articles & Notes"
          description="Thoughts, learnings and engineering notes from my journey."
          align="center"
        />

        {/* ---------- control bar ---------- */}
        <div className="mx-auto mt-14 max-w-2xl">
          <BlogSearch value={search} onChange={setSearch} />
        </div>

        <div className="mx-auto mt-6 flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1 overflow-x-auto">
            <BlogFilters
              categories={categories}
              activeFilter={activeFilter}
              onChange={setActiveFilter}
            />
          </div>

          <BlogSort value={sortBy} onChange={setSortBy} />
        </div>

        {/* ---------- empty state ---------- */}
        {filteredBlogs.length === 0 && (
          <div className="mt-20 rounded-2xl border-[3px] border-dashed border-black/30 p-16 text-center">
            <h3 className="font-heading text-3xl font-black">
              No Articles Found
            </h3>
            <p className="mt-3 text-neutral-500">
              Try changing the search or filters.
            </p>
          </div>
        )}

        {/* ---------- grid ---------- */}
        {filteredBlogs.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
            >
              {paginatedBlogs.map((blog, index) => (
                <motion.div
                  key={blog._id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                >
                  <BlogCard blog={blog} />
                </motion.div>
              ))}
            </motion.div>

            <BlogPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </Container>
    </section>
  );
}