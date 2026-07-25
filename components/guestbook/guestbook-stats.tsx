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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

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
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-4xl overflow-hidden rounded-[28px] border-[3px] border-black bg-white shadow-[10px_10px_0px_#000]"
        >
          <div className="grid divide-y-[3px] divide-black sm:grid-cols-2 sm:divide-x-[3px] sm:divide-y-0 xl:grid-cols-4">
            {overview.map((item) => (
              <div key={item.title} className="flex items-center gap-4 p-6">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-[2px] border-black"
                  style={{ background: item.color }}
                >
                  <item.icon size={18} />
                </div>
                <div className="min-w-0">
                  <p className="truncate font-heading text-2xl font-black">{item.value}</p>
                  <p className="mt-0.5 text-xs font-semibold text-neutral-500">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}