"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Briefcase, Star, Home, IdCard } from "lucide-react";

import { Badge } from "../ui/badge";
import { Container } from "../ui/container";

type ExperienceHeroProps = {
  totalExperiences: number;
  featuredExperiences: number;
  remoteExperiences: number;
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

export default function ExperienceHero({
  totalExperiences,
  featuredExperiences,
  remoteExperiences,
}: ExperienceHeroProps) {
  const stats = [
    { icon: Briefcase, label: "Roles logged", value: totalExperiences ?? 0, color: "var(--blue)" },
    { icon: Star, label: "Featured", value: featuredExperiences ?? 0, color: "var(--yellow)" },
    { icon: Home, label: "Remote roles", value: remoteExperiences ?? 0, color: "var(--green)" },
  ];

  return (
    <section className="section-padding overflow-hidden">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-16 lg:grid-cols-2"
        >
          {/* LEFT */}
          <motion.div variants={fadeUp}>
            <Badge>
              <Briefcase className="mr-2 h-4 w-4" />
              Career record
            </Badge>

            <h1 className="mt-8 text-5xl font-black leading-tight md:text-6xl">
              Where I&apos;ve{" "}
              <span className="inline-block -rotate-2 bg-[var(--blue)] px-3">
                shown up
              </span>{" "}
              and shipped work.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
              Every role, contract and founding effort that shaped how I build
              software — companies, teams, responsibilities and the outcomes
              I&apos;m proud of.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#timeline"
                className="inline-flex items-center gap-2.5 rounded-2xl border-[3px] border-black bg-[var(--blue)] px-6 py-3.5 font-black shadow-[6px_6px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                View timeline
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT — ID badge on a lanyard */}
          <motion.div variants={fadeUp} className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full max-w-xs origin-top"
            >
              {/* lanyard clip */}
              <div className="mx-auto h-7 w-3 rounded-t-full border-[2px] border-b-0 border-black bg-neutral-300" />
              <div className="mx-auto h-3 w-1.5 bg-black" />

              <div className="overflow-hidden rounded-2xl border-[3px] border-black bg-white shadow-[8px_10px_0px_#000]">
                {/* badge header */}
                <div className="flex items-center justify-between border-b-[3px] border-black bg-[var(--blue)] px-5 py-2.5">
                  <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest">
                    <IdCard size={13} />
                    Career pass
                  </span>
                  <span className="h-2 w-2 rounded-full border border-black bg-[var(--green)]" />
                </div>

                <div className="p-6 sm:p-7">
                  <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                    Career overview
                  </p>
                  <h3 className="mt-1 text-xl font-black">Experience snapshot</h3>

                  <div className="mt-6 space-y-3">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex items-center gap-3.5 rounded-xl border-[2px] border-black px-4 py-3 shadow-[3px_3px_0px_#000]"
                      >
                        <div
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border-[2px] border-black"
                          style={{ background: stat.color }}
                        >
                          <stat.icon size={15} />
                        </div>
                        <p className="flex-1 text-xs font-semibold text-neutral-500">{stat.label}</p>
                        <p className="font-heading text-2xl font-black">
                          <CountUp target={stat.value} />
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* barcode footer, decorative */}
                <div className="flex items-center gap-[2px] border-t-[3px] border-black bg-neutral-50 px-5 py-3">
                  {Array.from({ length: 28 }).map((_, i) => (
                    <span
                      key={i}
                      className="bg-black"
                      style={{
                        width: i % 3 === 0 ? "2.5px" : "1px",
                        height: i % 5 === 0 ? "18px" : "12px",
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}