"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles, Star, Code2, Tag } from "lucide-react";

import { Container } from "../ui/container";
import { Badge } from "../ui/badge";

type JavaSnippet = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  complexity: string;
  tags?: string[];
};

type FeaturedSnippetsProps = {
  snippets: JavaSnippet[];
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function FeaturedSnippets({ snippets }: FeaturedSnippetsProps) {
  if (!snippets?.length) return null;

  const [spotlight, ...rest] = snippets;

  return (
    <section className="pb-20">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Badge>
                <Sparkles className="mr-2 h-4 w-4" />
                Featured collection
              </Badge>

              <h2 className="mt-5 text-4xl font-black">Most useful Java snippets</h2>

              <p className="mt-3 max-w-2xl text-neutral-600">
                Hand-picked snippets that I frequently use in interviews,
                competitive programming, and backend development.
              </p>
            </div>

            <Link
              href="#snippets"
              className="inline-flex items-center gap-2 rounded-2xl border-[3px] border-black bg-[var(--orange)] px-6 py-3 font-black shadow-[6px_6px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              View all
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
            {/* spotlight - the top featured snippet, given real weight */}
            {spotlight && (
              <motion.div variants={fadeUp}>
                <Link
                  href={`/java/${spotlight.slug}`}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border-[3px] border-black bg-[var(--orange)] p-8 shadow-[10px_10px_0px_#000] transition-all hover:-translate-y-1 hover:shadow-[14px_14px_0px_#000] sm:p-10"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-full border-[2px] border-black bg-white px-3 py-1 text-xs font-black">
                        <Star size={13} fill="black" />
                        Editor&apos;s pick
                      </span>

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border-[2px] border-black bg-white">
                        <Code2 size={19} />
                      </div>
                    </div>

                    <h3 className="mt-7 text-3xl font-black leading-tight sm:text-4xl">
                      {spotlight.title}
                    </h3>

                    <p className="mt-4 max-w-lg text-base leading-relaxed text-black/80">
                      {spotlight.description}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-2">
                      <span className="rounded-full border-[2px] border-black bg-white px-3 py-1 text-xs font-bold">
                        {spotlight.category}
                      </span>
                      <span className="rounded-full border-[2px] border-black bg-white px-3 py-1 text-xs font-bold">
                        {spotlight.complexity}
                      </span>
                      {spotlight.tags?.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 rounded-full border-[2px] border-black bg-black/10 px-2.5 py-1 text-[11px] font-bold"
                        >
                          <Tag size={10} />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-2 text-sm font-black">
                    View snippet
                    <ArrowUpRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </Link>
              </motion.div>
            )}

            {/* compact list of the rest */}
            <motion.div
              variants={fadeUp}
              className="overflow-hidden rounded-[28px] border-[3px] border-black bg-white shadow-[10px_10px_0px_#000]"
            >
              {rest.map((snippet, index) => (
                <Link
                  key={snippet._id}
                  href={`/java/${snippet.slug}`}
                  className={`group flex items-center gap-4 p-5 transition-colors hover:bg-neutral-50 sm:p-6 ${
                    index !== 0 ? "border-t-[2px] border-black/10" : ""
                  }`}
                >
                  <span className="font-heading text-2xl font-black text-black/15">
                    {String(index + 2).padStart(2, "0")}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h4 className="truncate text-base font-black">{snippet.title}</h4>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-xs font-semibold text-neutral-400">
                        {snippet.category}
                      </span>
                      <span className="text-neutral-300">·</span>
                      <span className="text-xs font-semibold text-neutral-400">
                        {snippet.complexity}
                      </span>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-neutral-300 transition-all group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}