"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Clock3,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";

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

const colors = [
  "var(--yellow)",
  "var(--blue)",
  "var(--green)",
  "var(--pink)",
];

const slotStyle = [
  {
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    zIndex: 30,
  },
  {
    x: 26,
    y: 22,
    rotate: 5,
    scale: 0.96,
    zIndex: 20,
  },
  {
    x: 52,
    y: 44,
    rotate: -7,
    scale: 0.92,
    zIndex: 10,
  },
];

function formatDate(date: string) {
  return new Date(date).toLocaleDateString(
    "en-US",
    {
      month: "short",
      year: "numeric",
    }
  );
}

export function LatestBlogs({
  data,
}: {
  data: Blog[];
}) {
  const blogs = data?.length ? data.map(
    (
      blog,
      index
    ) => ({
      ...blog,
      color:
        colors[
          index %
            colors.length
        ],
    })
  ) : [];

  const featuredIndex =
    blogs.findIndex(
      (blog) =>
        blog.featured
    );

  const defaultOrder =
    featuredIndex >= 0
      ? [
          featuredIndex,
          ...blogs
            .map(
              (
                _,
                index
              ) => index
            )
            .filter(
              (
                index
              ) =>
                index !==
                featuredIndex
            ),
        ]
      : blogs.map(
          (
            _,
            index
          ) => index
        );

  const [order, setOrder] =
    useState(
      defaultOrder
    );

  if (!data?.length) {
    return null;
  }

  const bringToFront = (
    blogIndex: number
  ) => {
    setOrder(
      (prev) => [
        blogIndex,
        ...prev.filter(
          (i) =>
            i !==
            blogIndex
        ),
      ]
    );
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
          {order.map(
            (
              blogIndex,
              slot
            ) => {
              const blog =
                blogs[
                  blogIndex
                ];

              const pos =
                slotStyle[
                  slot
                ];

              const isFront =
                slot === 0;

              return (
                <motion.div
                  key={
                    blog.slug
                      .current
                  }
                  animate={{
                    x: pos.x,
                    y: pos.y,
                    rotate:
                      pos.rotate,
                    scale:
                      pos.scale,
                    zIndex:
                      pos.zIndex,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 26,
                  }}
                  onClick={() =>
                    !isFront &&
                    bringToFront(
                      blogIndex
                    )
                  }
                  className={`absolute inset-0 flex flex-col overflow-hidden rounded-[28px] border-[4px] border-black bg-white shadow-[10px_10px_0px_#000] ${
                    isFront
                      ? "cursor-default"
                      : "cursor-pointer"
                  }`}
                >
                  {/* Header */}
                  <div
                    className="flex h-28 shrink-0 items-center justify-between border-b-[4px] border-black px-6 sm:h-32 sm:px-8"
                    style={{
                      background:
                        blog.color,
                    }}
                  >
                    <span className="font-mono text-xs font-bold uppercase tracking-widest sm:text-sm">
                      {
                        blog.category
                      }
                    </span>

                    <Layers
                      size={
                        20
                      }
                      className="opacity-40"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                    <div>
                      <h3
                        className={`font-heading font-black leading-tight ${
                          isFront
                            ? "text-2xl sm:text-3xl"
                            : "text-xl"
                        }`}
                      >
                        {
                          blog.title
                        }
                      </h3>

                      <p
                        className={`mt-3 leading-relaxed text-neutral-600 ${
                          isFront
                            ? "line-clamp-3 text-base sm:text-lg"
                            : "line-clamp-1 text-sm"
                        }`}
                      >
                        {
                          blog.excerpt
                        }
                      </p>
                    </div>

                    {isFront && (
                      <div>
                        <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-neutral-500">
                          <span className="flex items-center gap-1.5">
                            <Calendar
                              size={
                                15
                              }
                            />
                            {formatDate(
                              blog.publishedAt
                            )}
                          </span>

                          <span className="flex items-center gap-1.5">
                            <Clock3
                              size={
                                15
                              }
                            />
                            {
                              blog.readingTime
                            }
                            {" "}
                            min read
                          </span>
                        </div>

                        <Button
                          className="group mt-6"
                        >
                          <Link
                            href={`/blogs/${blog.slug.current}`}
                            className="flex items-center gap-2 font-medium"
                          >
                            Read Article

                            <ArrowRight
                              size={
                                18
                              }
                              className="transition-transform group-hover:translate-x-1"
                            />
                          </Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            }
          )}
        </div>

        {/* Indicators */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="flex gap-2">
            {order.map(
              (
                blogIndex,
                slot
              ) => (
                <button
                  key={
                    blogIndex
                  }
                  onClick={() =>
                    bringToFront(
                      blogIndex
                    )
                  }
                  aria-label={`Show ${blogs[blogIndex].title}`}
                  className={`h-2.5 rounded-full border-[2px] border-black transition-all ${
                    slot ===
                    0
                      ? "w-8 bg-black"
                      : "w-2.5 bg-white"
                  }`}
                />
              )
            )}
          </div>

          <p className="font-mono text-xs text-neutral-400">
            tap a card behind the stack to bring it forward
          </p>
        </div>

        {/* View All */}
        <div className="mt-10 flex justify-center">
          <Button
            variant="outline"
            size="lg"
          >
            <Link href="/blogs" className="flex items-center font-medium">
              View All
              Articles

              <ArrowRight
                size={18}
                className="ml-2"
              />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}