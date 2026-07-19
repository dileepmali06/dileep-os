"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles, BookOpen, Brain, Target, Code2 } from "lucide-react";

import { Badge } from "../ui/badge";
import { Container } from "../ui/container";

type DSAHeroProps = {
  totalProblems: number;
  totalTopics: number;
  totalPlatforms: number;
};

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

export default function DSAHero({
  totalProblems,
  totalTopics,
  totalPlatforms,
}: DSAHeroProps) {
  const stats = [
    { icon: BookOpen, label: "Problems Solved", value: totalProblems ?? 0, color: "var(--yellow)" },
    { icon: Brain, label: "Topics Covered", value: totalTopics ?? 0, color: "var(--green)" },
    { icon: Target, label: "Platforms", value: totalPlatforms ?? 0, color: "var(--blue)" },
  ];

  return (
    <section className="section-padding">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-16 lg:grid-cols-2"
        >
          {/* left content */}
          <motion.div variants={fadeUp}>
            <Badge>
              <Sparkles className="mr-2 h-4 w-4" />
              Developer brand — Data Structures & Algorithms
            </Badge>

            <h1 className="mt-8 text-5xl font-black leading-tight md:text-6xl">
              Mastering{" "}
              <span className="inline-block -rotate-2 bg-[var(--yellow)] px-3">
                Data Structures
              </span>{" "}
              & Algorithms, one problem at a time.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
              A curated collection of my DSA journey — brute force thinking,
              optimized solutions, Java implementation, and the lessons I
              picked up along the way.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#problems"
                className="inline-flex items-center gap-2.5 rounded-2xl border-[3px] border-black bg-[var(--yellow)] px-6 py-3.5 font-black shadow-[6px_6px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                Explore problems
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/journey"
                className="inline-flex items-center gap-2.5 rounded-2xl border-[3px] border-black bg-white px-6 py-3.5 font-black shadow-[6px_6px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                Learning journey
              </Link>
            </div>
          </motion.div>

          {/* right: dashboard card — only real props, nothing fabricated */}
          <motion.div variants={fadeUp}>
            <div className="rounded-[28px] border-[3px] border-black bg-white p-7 shadow-[10px_10px_0px_#000] sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                    DSA Dashboard
                  </p>
                  <h3 className="mt-1.5 text-2xl font-black">Learning progress</h3>
                </div>

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-[3px] border-black bg-[var(--blue)]">
                  <Code2 size={26} />
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-4 rounded-2xl border-[2px] border-black p-4 shadow-[3px_3px_0px_#000]"
                  >
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-[2px] border-black"
                      style={{ background: stat.color }}
                    >
                      <stat.icon size={18} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-neutral-500">
                        {stat.label}
                      </p>
                    </div>
                    <p className="font-heading text-3xl font-black">
                      <CountUp target={stat.value} />
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}