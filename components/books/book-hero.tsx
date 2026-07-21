"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Library, BookOpen, CheckCircle2 } from "lucide-react";

import { Badge } from "../ui/badge";
import { Container } from "../ui/container";

type BookHeroProps = {
  totalBooks: number;
  completedBooks: number;
  currentlyReading: number;
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

export default function BookHero({ totalBooks, completedBooks, currentlyReading }: BookHeroProps) {
  const stats = [
    { icon: Library, label: "Books logged", value: totalBooks ?? 0, color: "var(--pink)" },
    { icon: CheckCircle2, label: "Finished", value: completedBooks ?? 0, color: "var(--green)" },
    { icon: BookOpen, label: "Currently reading", value: currentlyReading ?? 0, color: "var(--blue)" },
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
          <motion.div variants={fadeUp}>
            <Badge>
              <Library className="mr-2 h-4 w-4" />
              My personal library
            </Badge>

            <h1 className="mt-8 text-5xl font-black leading-tight md:text-6xl">
              Every book,
              <br />
              <span className="inline-block -rotate-2 bg-[var(--pink)] px-3">
                one page
              </span>{" "}
              at a time.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
              A running shelf of everything I&apos;m reading, have finished, or
              plan to pick up — technical books, career reads, and the
              occasional novel.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#shelf"
                className="inline-flex items-center gap-2.5 rounded-2xl border-[3px] border-black bg-[var(--pink)] px-6 py-3.5 font-black shadow-[6px_6px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                Browse the shelf
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <div className="rounded-[28px] border-[3px] border-black bg-white p-7 shadow-[10px_10px_0px_#000] sm:p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                Library overview
              </p>
              <h3 className="mt-1.5 text-2xl font-black">Reading snapshot</h3>

              <div className="mt-7 space-y-4">
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
                    <p className="flex-1 text-sm font-semibold text-neutral-500">{stat.label}</p>
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