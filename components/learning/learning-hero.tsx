"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, NotebookPen, BookOpen, Star, Layers } from "lucide-react";

import { Badge } from "../ui/badge";
import { Container } from "../ui/container";

type LearningHeroProps = {
  totalLogs: number;
  totalCategories: number;
  favoriteLogs: number;
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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

export default function LearningHero({
  totalLogs,
  totalCategories,
  favoriteLogs,
}: LearningHeroProps) {
  const stats = [
    { icon: BookOpen, label: "Log Entries", value: totalLogs ?? 0, color: "var(--blue)" },
    { icon: Layers, label: "Categories", value: totalCategories ?? 0, color: "var(--green)" },
    { icon: Star, label: "Favorites", value: favoriteLogs ?? 0, color: "var(--yellow)" },
  ];

  return (
    <section className="overflow-hidden pb-20 pt-16">
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-0"
        >
          {/* Left: ruled notebook page */}
          <div
            className="relative overflow-hidden rounded-t-[28px] border-[3px] border-black bg-white pb-10 pl-12 pr-7 pt-8 shadow-[8px_8px_0px_#000] sm:pl-16 sm:pr-9 sm:pt-10 lg:rounded-l-[28px] lg:rounded-tr-none lg:border-r-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, transparent, transparent 34px, rgba(0,0,0,0.08) 35px)",
            }}
          >
            {/* red margin rule */}
            <div className="absolute bottom-0 left-8 top-0 w-[2px] bg-[var(--pink)] sm:left-11" />

            <Badge>
              <NotebookPen className="mr-2 h-4 w-4" />
              Personal journal — Learning Log
            </Badge>

            <h1 className="mt-6 max-w-lg text-4xl font-black leading-tight sm:text-5xl">
              Notes from{" "}
              <span className="inline-block -rotate-2 bg-[var(--blue)] px-3">
                every lesson
              </span>{" "}
              along the way.
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-neutral-600 sm:text-lg">
              A running log of what I&apos;m learning — DSA, backend
              engineering, system design and everything in between. Dated,
              honest, and written as I go.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="#log"
                className="inline-flex items-center gap-2.5 rounded-2xl border-[3px] border-black bg-[var(--blue)] px-6 py-3.5 font-black shadow-[5px_5px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                Read the log
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Right: sticky-note dashboard */}
          <div className="relative flex flex-col justify-center gap-5 rounded-b-[28px] border-[3px] border-t-0 border-black bg-neutral-100 p-7 shadow-[8px_8px_0px_#000] sm:p-9 lg:rounded-r-[28px] lg:rounded-bl-none lg:border-l-0 lg:border-t-[3px]">
            <div className="mb-1">
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                Journal overview
              </p>
              <h2 className="mt-1.5 text-xl font-black">Learning snapshot</h2>
            </div>

            {stats.map((stat, index) => {
              const rotations = [-2, 1.5, -1.5];

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, rotate: 0, y: 10 }}
                  animate={{ opacity: 1, rotate: rotations[index % rotations.length], y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.35 }}
                  className="flex items-center justify-between rounded-xl border-[3px] border-black p-5 shadow-[4px_4px_0px_#000]"
                  style={{ background: stat.color }}
                >
                  <div className="flex items-center gap-4">
                    <stat.icon size={18} />
                    <span className="font-black">{stat.label}</span>
                  </div>
                  <span className="text-3xl font-black">
                    <CountUp target={stat.value} />
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}