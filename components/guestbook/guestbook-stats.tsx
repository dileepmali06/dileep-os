"use client";

import { motion } from "framer-motion";
import { MessageSquare, Star, Pin, Globe2 } from "lucide-react";

import { Container } from "../ui/container";

type GuestbookStatsProps = {
  stats: {
    approvedMessages: number;
    featuredMessages: number;
    pinnedMessages: number;
    countries: number;
    professions: number;
  };
};

const fadeUp = {
  hidden: { opacity: 0, y: 20, rotate: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const stampTilts = [-3, 2, -2, 3];

export default function GuestbookStats({ stats }: GuestbookStatsProps) {
  const overview = [
    { title: "Messages", value: stats.approvedMessages ?? 0, icon: MessageSquare, color: "var(--pink)" },
    { title: "Featured", value: stats.featuredMessages ?? 0, icon: Star, color: "var(--yellow)" },
    { title: "Pinned", value: stats.pinnedMessages ?? 0, icon: Pin, color: "var(--green)" },
    { title: "Countries", value: stats.countries ?? 0, icon: Globe2, color: "var(--blue)" },
  ];

  return (
    <section className="pb-20">
      <Container>
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 text-center font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
            — collected from around the world —
          </p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-8"
          >
            {overview.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                animate={{ rotate: stampTilts[index % stampTilts.length] }}
                whileHover={{ rotate: 0, scale: 1.05 }}
                className="relative w-32"
              >
                {/* perforated stamp edge */}
                <div
                  className="relative border-[2px] border-dashed border-black/50 bg-white p-4 shadow-[3px_4px_0px_rgba(0,0,0,0.15)]"
                  style={{
                    maskImage:
                      "radial-gradient(circle 3px at 0 0, transparent 3px, black 3.5px), radial-gradient(circle 3px at 100% 0, transparent 3px, black 3.5px), radial-gradient(circle 3px at 0 100%, transparent 3px, black 3.5px), radial-gradient(circle 3px at 100% 100%, transparent 3px, black 3.5px)",
                  }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-full border-[2px] border-black"
                      style={{ background: item.color }}
                    >
                      <item.icon size={15} />
                    </div>
                    <p className="mt-2 font-heading text-xl font-black leading-none">{item.value}</p>
                    <p className="mt-1 text-[9px] font-bold uppercase tracking-wide text-neutral-400">
                      {item.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}