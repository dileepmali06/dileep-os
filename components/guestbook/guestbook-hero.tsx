"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { PenTool, MessageSquare, Star, Globe2, ArrowDown } from "lucide-react";

import { Container } from "../ui/container";

type GuestbookHeroProps = {
  approvedMessages: number;
  featuredMessages: number;
  countries: number;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
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
    { icon: MessageSquare, label: "Messages", value: approvedMessages ?? 0, color: "var(--pink)" },
    { icon: Star, label: "Featured", value: featuredMessages ?? 0, color: "var(--yellow)" },
    { icon: Globe2, label: "Countries", value: countries ?? 0, color: "var(--blue)" },
  ];

  return (
    <section className="overflow-hidden pb-16 pt-28 sm:pt-32">
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border-[2px] border-black bg-white px-4 py-1.5 text-sm font-black shadow-[3px_3px_0px_#000]">
            <PenTool size={15} />
            Guestbook
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-7 text-5xl font-black leading-tight md:text-6xl"
          >
            Say{" "}
            <span className="inline-block -rotate-2 bg-[var(--pink)] px-3">hello</span>{" "}
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
        </motion.div>

        {/* open guestbook illustration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto mt-14 max-w-2xl"
        >
          <Link href="#leave-message" className="group block">
            <div className="relative overflow-hidden rounded-2xl border-[3px] border-black bg-[#fbf8f0] shadow-[10px_12px_0px_#000] transition-shadow group-hover:shadow-[13px_15px_0px_#000]">
              {/* spine crease down the middle */}
              <div className="pointer-events-none absolute inset-y-0 left-1/2 w-8 -translate-x-1/2 bg-gradient-to-r from-transparent via-black/10 to-transparent" />

              <div className="grid sm:grid-cols-2">
                {/* left page */}
                <div
                  className="border-b-[2px] border-black/10 p-8 sm:border-b-0 sm:border-r-[2px] sm:p-10"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(to bottom, transparent, transparent 30px, rgba(0,0,0,0.05) 31px)",
                  }}
                >
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                    Visitor log
                  </p>
                  <p className="mt-4 font-heading text-2xl font-black italic leading-relaxed text-neutral-700">
                    &ldquo;Loved exploring your work — keep building!&rdquo;
                  </p>
                  <p className="mt-3 text-xs font-semibold text-neutral-400">— a recent visitor</p>
                </div>

                {/* right page - sign here */}
                <div
                  className="flex flex-col justify-center p-8 sm:p-10"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(to bottom, transparent, transparent 30px, rgba(0,0,0,0.05) 31px)",
                  }}
                >
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                    Your turn
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-[2px] flex-1 bg-black/25" />
                  </div>
                  <p className="mt-2 flex items-center gap-2 text-sm font-bold text-neutral-500 transition-colors group-hover:text-black">
                    Sign the guestbook
                    <ArrowDown size={15} className="transition-transform group-hover:translate-y-0.5" />
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}