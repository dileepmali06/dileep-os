"use client";

import { useState } from "react";
import { ArrowRight, Calendar, Clock3, Layers } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const blogs = [
  {
    title: "How I Built Dileep OS Using Next.js and Sanity",
    description:
      "The architecture decisions, CMS setup and design system behind my personal developer operating system.",
    category: "Engineering",
    readTime: "8 min read",
    date: "Jul 2026",
    featured: true,
    color: "var(--yellow)",
  },
  {
    title: "My Java + DSA Journey",
    description:
      "Transitioning from MERN development towards software engineering and backend systems.",
    category: "Learning",
    readTime: "5 min read",
    date: "Jul 2026",
    color: "var(--blue)",
  },
  {
    title: "Why I Chose Sanity CMS",
    description:
      "My experience building scalable content architectures using Sanity Studio.",
    category: "Development",
    readTime: "6 min read",
    date: "Jun 2026",
    color: "var(--green)",
  },
];

// slot 0 = front (readable), slot 1 = middle peek, slot 2 = back peek
const slotStyle = [
  { x: 0, y: 0, rotate: 0, scale: 1, zIndex: 30 },
  { x: 26, y: 22, rotate: 5, scale: 0.96, zIndex: 20 },
  { x: 52, y: 44, rotate: -7, scale: 0.92, zIndex: 10 },
];

export function LatestBlogs() {
  const initialOrder = (() => {
    const featuredIdx = blogs.findIndex((b) => b.featured);
    const rest = blogs.map((_, i) => i).filter((i) => i !== featuredIdx);
    return featuredIdx >= 0 ? [featuredIdx, ...rest] : blogs.map((_, i) => i);
  })();

  const [order, setOrder] = useState(initialOrder);

  const bringToFront = (blogIndex: number) => {
    setOrder((prev) => [blogIndex, ...prev.filter((i) => i !== blogIndex)]);
  };

  return (
    <section className="section-padding overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="Writing"
          title="Latest Articles"
          description="Thoughts, learnings and engineering notes from my journey."
          align="center"
        />

        <div className="relative mx-auto mt-20 h-[540px] w-full max-w-xl sm:h-[460px]">
          {order.map((blogIndex, slot) => {
            const blog = blogs[blogIndex];
            const pos = slotStyle[slot];
            const isFront = slot === 0;

            return (
              <motion.div
                key={blog.title}
                animate={{
                  x: pos.x,
                  y: pos.y,
                  rotate: pos.rotate,
                  scale: pos.scale,
                  zIndex: pos.zIndex,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 26 }}
                onClick={() => !isFront && bringToFront(blogIndex)}
                className={`absolute inset-0 flex flex-col overflow-hidden rounded-[28px] border-[4px] border-black bg-white shadow-[10px_10px_0px_#000] ${
                  isFront ? "cursor-default" : "cursor-pointer"
                }`}
              >
                <div
                  className="flex h-28 shrink-0 items-center justify-between border-b-[4px] border-black px-6 sm:h-32 sm:px-8"
                  style={{ background: blog.color }}
                >
                  <span className="font-mono text-xs font-bold uppercase tracking-widest sm:text-sm">
                    {blog.category}
                  </span>
                  <Layers size={20} className="opacity-40" />
                </div>

                <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                  <div>
                    <h3
                      className={`font-heading font-black leading-tight ${
                        isFront ? "text-2xl sm:text-3xl" : "text-xl"
                      }`}
                    >
                      {blog.title}
                    </h3>

                    <p
                      className={`mt-3 leading-relaxed text-neutral-600 ${
                        isFront ? "line-clamp-3 text-base sm:text-lg" : "line-clamp-1 text-sm"
                      }`}
                    >
                      {blog.description}
                    </p>
                  </div>

                  {isFront && (
                    <div>
                      <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-neutral-500">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={15} />
                          {blog.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock3 size={15} />
                          {blog.readTime}
                        </span>
                      </div>

                      <Button className="group mt-6">
                        Read Article
                        <ArrowRight
                          size={18}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </Button>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* dot indicator + hint */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="flex gap-2">
            {order.map((blogIndex, slot) => (
              <button
                key={blogIndex}
                onClick={() => bringToFront(blogIndex)}
                aria-label={`Show ${blogs[blogIndex].title}`}
                className={`h-2.5 rounded-full border-[2px] border-black transition-all ${
                  slot === 0 ? "w-8 bg-black" : "w-2.5 bg-white"
                }`}
              />
            ))}
          </div>
          <p className="font-mono text-xs text-neutral-400">
            tap a card behind the stack to bring it forward
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <Button variant="outline" size="lg">
            View All Articles
          </Button>
        </div>
      </Container>
    </section>
  );
}