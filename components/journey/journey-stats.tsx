"use client";

import { useEffect, useRef, useState } from "react";
import {
  FolderGit2,
  Trophy,
  Award,
  GraduationCap,
  Briefcase,
  Target,
} from "lucide-react";
import { motion, useInView, animate } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface JourneyStatsProps {
  stats: {
    education: number;
    experience: number;
    certificates: number;
    achievements: number;
    goals: number;
    milestones: number;
  };
}

function CountUp({ value, inView }: { value: number; inView: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, value, {
      duration: 1.1,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });

    return () => controls.stop();
  }, [inView, value]);

  return <>{display}</>;
}

export function JourneyStats({ stats }: JourneyStatsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const items = [
    {
      title: "Education",
      value: stats.education,
      icon: GraduationCap,
      color: "var(--yellow)",
    },
    {
      title: "Experience",
      value: stats.experience,
      icon: Briefcase,
      color: "var(--blue)",
    },
    {
      title: "Certificates",
      value: stats.certificates,
      icon: Award,
      color: "var(--green)",
    },
    {
      title: "Achievements",
      value: stats.achievements,
      icon: Trophy,
      color: "var(--pink)",
    },
    {
      title: "Goals",
      value: stats.goals,
      icon: Target,
      color: "var(--yellow)",
    },
    {
      title: "Timeline Events",
      value: stats.milestones,
      icon: FolderGit2,
      color: "var(--blue)",
    },
  ];

  return (
    <section className="section-padding bg-neutral-50" ref={ref}>
      <Container>
        <SectionHeading
          eyebrow="Summary"
          title="Journey In Numbers"
          description="A quick overview of the milestones, learning and growth accumulated so far."
          align="center"
        />

        <div className="mx-auto mt-16 max-w-6xl overflow-hidden rounded-[32px] border-[4px] border-black bg-white shadow-[12px_12px_0px_#000]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => {
              const Icon = item.icon;
              const isLastInRow3 = (index + 1) % 3 === 0;
              const isLastInRow2 = (index + 1) % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
                  className={`relative overflow-hidden p-8 ${
                    index < items.length - (items.length % 3 === 0 ? 3 : items.length % 3)
                      ? "border-b-[3px] border-black/10"
                      : ""
                  } ${
                    isLastInRow2 ? "sm:border-l-[3px] sm:border-black/10 lg:border-l-0" : ""
                  } ${!isLastInRow3 ? "lg:border-r-[3px] lg:border-black/10" : ""}`}
                >
                  {/* watermark icon */}
                  <Icon
                    size={110}
                    strokeWidth={1.5}
                    className="pointer-events-none absolute -right-4 -top-4 opacity-[0.06]"
                  />

                  <div className="relative flex items-center gap-4">
                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-[3px] border-black shadow-[3px_3px_0px_#000]"
                      style={{ background: item.color }}
                    >
                      <Icon size={24} />
                    </div>

                    <div>
                      <h3 className="font-heading text-4xl font-black leading-none sm:text-5xl">
                        <CountUp value={item.value} inView={isInView} />
                      </h3>
                      <p className="mt-1.5 text-sm font-semibold text-neutral-500">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}