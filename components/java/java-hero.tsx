"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles, Coffee, FileCode2, Boxes, Code2 } from "lucide-react";

import { Badge } from "../ui/badge";
import { Container } from "../ui/container";

type JavaHeroProps = {
  totalSnippets: number;
  totalCategories: number;
  featuredSnippets: number;
};

// falls back to a warm orange if --orange isn't defined in your theme,
// so this never silently renders as a blank/transparent background
const ORANGE = "var(--orange, #fb923c)";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function CountUp({ target }: { target: number }) {
  const safeTarget = Number.isFinite(target) ? target : 0;
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 900;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * safeTarget));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, safeTarget]);

  return <span ref={ref}>{value}</span>;
}

export default function JavaHero({
  totalSnippets,
  totalCategories,
  featuredSnippets,
}: JavaHeroProps) {
  const stats = [
    { key: "snippets", icon: FileCode2, label: "Java snippets", value: totalSnippets ?? 0, color: ORANGE },
    { key: "categories", icon: Boxes, label: "Categories", value: totalCategories ?? 0, color: "var(--green)" },
    { key: "featured", icon: Coffee, label: "Featured", value: featuredSnippets ?? 0, color: "var(--yellow)" },
  ];

  return (
    <section className="section-padding overflow-x-hidden">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
        >
          {/* left content */}
          <motion.div variants={fadeUp} className="min-w-0">
            <Badge>
              <Coffee className="mr-2 h-4 w-4 shrink-0" />
              Developer toolkit — Java snippets
            </Badge>

            <h1 className="mt-6 break-words text-4xl font-black leading-tight sm:mt-8 sm:text-5xl md:text-6xl">
              Write less.
              <br />
              <span
                className="inline-block -rotate-2 px-3"
                style={{ background: ORANGE }}
              >
                Build faster.
              </span>
              <br />
              Remember only what matters.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600 sm:mt-6 sm:text-lg sm:leading-8">
              A curated collection of production-ready Java snippets that I use
              for interviews, DSA, backend development, Spring Boot projects,
              and day-to-day problem solving.
            </p>

            <div className="mt-7 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
              <Link
                href="#snippets"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl border-[3px] border-black px-6 py-3.5 font-black shadow-[6px_6px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none xs:w-auto"
                style={{ background: ORANGE }}
              >
                Browse snippets
                <ArrowRight className="h-5 w-5 shrink-0" />
              </Link>

              <Link
                href="#categories"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl border-[3px] border-black bg-white px-6 py-3.5 font-black shadow-[6px_6px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none xs:w-auto"
              >
                Explore categories
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5 sm:mt-10 sm:gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border-[2px] border-black bg-[var(--cream)] px-3.5 py-1.5 text-xs font-bold sm:px-4 sm:py-2 sm:text-sm">
                <Sparkles className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
                Interview ready
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border-[2px] border-black bg-[var(--green)] px-3.5 py-1.5 text-xs font-bold sm:px-4 sm:py-2 sm:text-sm">
                <Code2 className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
                Production ready
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border-[2px] border-black bg-[var(--blue)] px-3.5 py-1.5 text-xs font-bold sm:px-4 sm:py-2 sm:text-sm">
                <Coffee className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
                Daily reference
              </div>
            </div>
          </motion.div>

          {/* right: clean dashboard card */}
          <motion.div variants={fadeUp} className="min-w-0">
            <div className="rounded-[24px] border-[3px] border-black bg-white p-5 shadow-[8px_8px_0px_#000] sm:rounded-[28px] sm:p-7 sm:shadow-[10px_10px_0px_#000] md:p-8">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-xs font-bold uppercase tracking-widest text-neutral-400">
                    Java quick reference
                  </p>
                  <h3 className="mt-1.5 text-xl font-black sm:text-2xl">
                    Developer dashboard
                  </h3>
                </div>

                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-[3px] border-black sm:h-14 sm:w-14"
                  style={{ background: ORANGE }}
                >
                  <Coffee size={24} className="sm:h-[26px] sm:w-[26px]" />
                </div>
              </div>

              <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
                {stats.map((stat) => (
                  <div
                    key={stat.key}
                    className="flex items-center gap-3 rounded-xl border-[2px] border-black p-3 shadow-[3px_3px_0px_#000] sm:gap-4 sm:rounded-2xl sm:p-4"
                  >
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border-[2px] border-black sm:h-11 sm:w-11 sm:rounded-xl"
                      style={{ background: stat.color }}
                    >
                      <stat.icon size={16} className="sm:h-[18px] sm:w-[18px]" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-semibold text-neutral-500 sm:text-sm">
                        {stat.label}
                      </p>
                    </div>

                    <p className="shrink-0 font-heading text-2xl font-black sm:text-3xl">
                      <CountUp target={stat.value} />
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border-[2px] border-black bg-neutral-50 px-4 py-3.5 sm:mt-7 sm:rounded-2xl sm:px-5 sm:py-4">
                <p className="text-sm leading-relaxed text-neutral-600">
                  <span className="font-black text-black">{totalSnippets ?? 0} snippets</span>{" "}
                  organized across{" "}
                  <span className="font-black text-black">{totalCategories ?? 0} categories</span>,
                  ready to browse whenever you need them.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}