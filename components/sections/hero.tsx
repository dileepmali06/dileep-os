"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Download,
  Layers,
  GraduationCap,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

function lineClass(line: string) {
  if (line.startsWith("$")) return "text-emerald-400 font-semibold";
  if (line.startsWith("✓")) return "text-green-400 font-semibold";
  if (line === "") return "";
  return "text-white/75";
}

function useTypewriter(text: string, speed = 26) {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTyped("");
    setDone(false);

    const id = setInterval(() => {
      i += 1;
      setTyped(text.slice(0, i));

      if (i >= text.length) {
        setDone(true);
        clearInterval(id);
      }
    }, speed);

    return () => clearInterval(id);
  }, [text, speed]);

  return { typed, done };
}

interface HeroProps {
  data: {
    heroName: string;
    heroEmoji: string;
    heroTitle: string;
    heroSubtitle: string;
    heroBadge: string;
    heroRoles: string[];
    terminalLines: string[];
    floatingTags: string[];
    focusTechnologies: string[];
    projectsCount: number;
    coursesCount: number;
    footerTitle: string;
    footerSubtitle: string;
    footerBadge: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    secondaryButtonText: string;
    secondaryButtonLink: string;
    isAvailable: boolean;
  };
}

export function Hero({ data }: HeroProps) {
  const roles = data?.heroRoles || [];
  const terminalLines = data?.terminalLines || [];

  const [roleIndex, setRoleIndex] = useState(0);

  const { typed } = useTypewriter(
    terminalLines.join("\n")
  );

  useEffect(() => {
    if (roles.length === 0) return;

    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2400);

    return () => clearInterval(id);
  }, [roles.length]);

  return (
    <section className="relative overflow-hidden py-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.12) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {data?.isAvailable && (
              <div className="inline-flex items-center gap-2 rounded-full border-[2px] border-black bg-white px-4 py-1.5 shadow-[3px_3px_0px_#000]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>

                <span className="text-sm font-semibold">
                  {data.heroBadge}
                </span>
              </div>
            )}

            <div className="space-y-5">
              <h1 className="font-heading text-6xl font-black leading-[0.95] lg:text-8xl">
                I&apos;m {data.heroName}{" "}
                <span className="inline-block">
                  {data.heroEmoji}
                </span>
              </h1>

              <div className="flex h-10 items-center text-2xl font-semibold sm:h-9">
                <span className="mr-2 text-neutral-600">/</span>

                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                    className="bg-[var(--blue)] bg-clip-text"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, var(--blue), #000)",
                    }}
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>

              <p className="max-w-2xl text-lg text-neutral-600">
                {data.heroSubtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group">
                {data.primaryButtonText}

                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Button>

              <Button size="lg" variant="outline">
                <Download
                  size={18}
                  className="mr-2"
                />

                {data.secondaryButtonText}
              </Button>
            </div>

            {/* STATS */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 border-t-[2px] border-black/10 pt-6">
              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border-[2px] border-black bg-[var(--yellow)]">
                  <Layers size={18} />
                </div>

                <div>
                  <p className="font-heading text-xl font-black leading-none">
                    {data.projectsCount}+
                  </p>

                  <p className="text-xs text-neutral-500">
                    Projects built
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border-[2px] border-black bg-[var(--green)]">
                  <GraduationCap size={18} />
                </div>

                <div>
                  <p className="font-heading text-xl font-black leading-none">
                    {data.coursesCount}+
                  </p>

                  <p className="text-xs text-neutral-500">
                    Courses done
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {data.focusTechnologies?.map((tech: string, index: number) => {
                  const variants = [
                    "default",
                    "secondary",
                    "success",
                    "danger",
                  ];

                  return (
                    <Badge
                      key={tech}
                      variant={
                        variants[index % variants.length] as
                        | "default"
                        | "secondary"
                        | "success"
                        | "danger"
                      }
                    >
                      {tech}
                    </Badge>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="relative"
          >
            {data.floatingTags?.[0] && (
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-4 -top-4 z-10 hidden rotate-[-6deg] rounded-full border-[2px] border-black bg-white px-3 py-1.5 text-xs font-bold shadow-[3px_3px_0px_#000] sm:block"
              >
                {data.floatingTags[0]}
              </motion.div>
            )}

            {data.floatingTags?.[1] && (
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-3 top-10 z-10 hidden rotate-[5deg] rounded-full border-[2px] border-black bg-[var(--yellow)] px-3 py-1.5 text-xs font-bold shadow-[3px_3px_0px_#000] sm:block"
              >
                {data.floatingTags[1]}
              </motion.div>
            )}

            <Card className="overflow-hidden p-0 shadow-[10px_10px_0px_#000]">
              <div className="flex items-center gap-3 border-b-[3px] border-black bg-neutral-100 px-5 py-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full border border-black/40 bg-red-500" />
                  <span className="h-3 w-3 rounded-full border border-black/40 bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full border border-black/40 bg-green-500" />
                </div>

                <span className="font-mono text-xs font-semibold text-neutral-600">
                  dileep@portfolio: ~
                </span>
              </div>

              <div className="min-h-[220px] bg-neutral-900 p-6 font-mono text-sm leading-relaxed sm:p-7">
                {typed.split("\n").map(
                  (line, idx) => (
                    <div
                      key={idx}
                      className={lineClass(
                        line
                      )}
                    >
                      {line || "\u00A0"}
                    </div>
                  )
                )}

                <span className="inline-block h-4 w-2 animate-pulse bg-white/70 align-middle" />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t-[3px] border-black bg-white p-6">
                <div>
                  <h3 className="font-heading text-2xl font-bold">
                    {data.footerTitle}
                  </h3>

                  <p className="text-sm text-neutral-600">
                    {data.footerSubtitle}
                  </p>
                </div>

                <Badge variant="success">
                  {data.footerBadge}
                </Badge>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}