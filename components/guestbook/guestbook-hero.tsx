"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowDown, MessageSquare, Star, Globe2 } from "lucide-react";

import { Badge } from "../ui/badge";
import { Container } from "../ui/container";

type GuestbookHeroProps = {
  approvedMessages: number;
  featuredMessages: number;
  countries: number;
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

export default function GuestbookHero({
  approvedMessages,
  featuredMessages,
  countries,
}: GuestbookHeroProps) {
  const stats = [
    { icon: MessageSquare, label: "Messages", value: approvedMessages ?? 0 },
    { icon: Star, label: "Featured", value: featuredMessages ?? 0 },
    { icon: Globe2, label: "Countries", value: countries ?? 0 },
  ];

  return (
    <section className="section-padding">
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={fadeUp}>
            <Badge>
              <MessageSquare className="mr-2 h-4 w-4" />
              Guestbook
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-8 text-5xl font-black leading-tight md:text-6xl"
          >
            Say{" "}
            <span className="inline-block -rotate-2 bg-[var(--pink)] px-3">
              hello
            </span>{" "}
            — leave your mark.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl text-lg leading-8 text-neutral-600"
          >
            A little corner of the internet where visitors leave a note. No
            login, no fuss — just a message from wherever you&apos;re reading
            this.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex justify-center gap-4">
            <Link
              href="#leave-message"
              className="inline-flex items-center gap-2.5 rounded-2xl border-[3px] border-black bg-[var(--pink)] px-6 py-3.5 font-black shadow-[6px_6px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              Leave a message
              <ArrowDown className="h-5 w-5" />
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mx-auto mt-10 flex max-w-lg flex-wrap justify-center gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-2.5 rounded-full border-[2px] border-black bg-white px-4 py-2"
              >
                <stat.icon size={15} />
                <span className="font-heading font-black">
                  <CountUp target={stat.value} />
                </span>
                <span className="text-xs font-semibold text-neutral-500">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}