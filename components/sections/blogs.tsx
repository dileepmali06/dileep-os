"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, ArrowRight as ArrowRightIcon, Calendar, Clock3 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "@/components/ui/button";

type Blog = {
  title: string;
  excerpt: string;
  category: string;
  readingTime: number;
  publishedAt: string;
  featured?: boolean;
  slug: {
    current: string;
  };
};

const colors = ["var(--yellow)", "var(--blue)", "var(--green)", "var(--pink)"];

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export function LatestBlogs({ data }: { data: Blog[] }) {
  const blogs = data?.length
    ? data.map((blog, index) => ({ ...blog, color: colors[index % colors.length] }))
    : [];

  const featuredIndex = blogs.findIndex((blog) => blog.featured);
  const [index, setIndex] = useState(featuredIndex >= 0 ? featuredIndex : 0);
  const [direction, setDirection] = useState(1);

  if (!data?.length) {
    return null;
  }

  const active = blogs[index];

  function go(nextIndex: number, dir: number) {
    setDirection(dir);
    setIndex((nextIndex + blogs.length) % blogs.length);
  }

  return (
    <section className="section-padding overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="Writing"
          title="Latest Articles"
          description="Thoughts, learnings and engineering notes from my journey."
          align="center"
        />

        <div className="mx-auto mt-16 max-w-2xl">
          <div className="relative [perspective:1600px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active.slug.current}
                custom={direction}
                initial={{ rotateY: direction > 0 ? 90 : -90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: direction > 0 ? -90 : 90, opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
                className="overflow-hidden rounded-[28px] border-[4px] border-black bg-white shadow-[10px_10px_0px_#000]"
              >
                {/* header strip */}
                <div
                  className="flex h-24 items-center justify-between border-b-[4px] border-black px-6 sm:h-28 sm:px-8"
                  style={{ background: active.color }}
                >
                  <span className="font-mono text-xs font-bold uppercase tracking-widest sm:text-sm">
                    {active.category}
                  </span>
                  {active.featured && (
                    <span className="rounded-full border-[2px] border-black bg-white px-3 py-1 text-[10px] font-black uppercase">
                      Featured
                    </span>
                  )}
                </div>

                {/* content */}
                <div className="p-6 sm:p-9">
                  <h3 className="font-heading text-2xl font-black leading-tight sm:text-3xl">
                    {active.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-base leading-relaxed text-neutral-600 sm:text-lg">
                    {active.excerpt}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-neutral-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={15} />
                      {formatDate(active.publishedAt)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock3 size={15} />
                      {active.readingTime} min read
                    </span>
                  </div>

                  <Button className="group mt-6">
                    <Link
                      href={`/blogs/${active.slug.current}`}
                      className="flex items-center gap-2 font-medium"
                    >
                      Read article
                      <ArrowRightIcon
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* rolodex controls */}
          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={() => go(index - 1, -1)}
              aria-label="Previous article"
              className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-black bg-white shadow-[3px_3px_0px_#000] transition-all hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"
            >
              <ArrowLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {blogs.map((blog, i) => (
                <button
                  key={blog.slug.current}
                  onClick={() => go(i, i > index ? 1 : -1)}
                  aria-label={`Go to article ${i + 1}`}
                  className={`h-2.5 rounded-full border-[2px] border-black transition-all ${
                    i === index ? "w-7 bg-black" : "w-2.5 bg-white"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => go(index + 1, 1)}
              aria-label="Next article"
              className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-black bg-white shadow-[3px_3px_0px_#000] transition-all hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"
            >
              <ArrowRight size={18} />
            </button>
          </div>

          <p className="mt-3 text-center font-mono text-xs text-neutral-400">
            {String(index + 1).padStart(2, "0")} / {String(blogs.length).padStart(2, "0")}
          </p>
        </div>

        {/* view all */}
        <div className="mt-10 flex justify-center">
          <Button variant="outline" size="lg">
            <Link href="/blogs" className="flex items-center font-medium">
              View all articles
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}