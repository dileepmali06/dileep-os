"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Send } from "lucide-react";

import { Container } from "../ui/container";

const availabilityTags = ["Freelance", "Full Time", "Remote", "Contract"];

export default function ContactHero() {
  return (
    <section className="section-padding overflow-hidden">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          {/* left: statement */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border-[2px] border-black bg-white px-4 py-1.5 text-sm font-black shadow-[3px_3px_0px_#000]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--green)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--green)]" />
              </span>
              Currently available
            </div>

            <h1 className="mt-7 text-5xl font-black leading-[1.05] md:text-6xl">
              Let&apos;s build something{" "}
              <span className="inline-block -rotate-2 bg-[var(--green)] px-3">amazing</span>{" "}
              together.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-600">
              Whether it&apos;s a full-time role, a freelance project, or just a
              question — drop a message and I&apos;ll get back to you.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {availabilityTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border-[2px] border-black bg-white px-3.5 py-1.5 text-xs font-bold"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="#contact-form"
                className="inline-flex items-center gap-2.5 rounded-2xl border-[3px] border-black bg-[var(--green)] px-6 py-3.5 font-black shadow-[6px_6px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                <Send size={18} />
                Send a message
              </Link>
              <Link
                href="#availability"
                className="inline-flex items-center gap-2.5 rounded-2xl border-[3px] border-black bg-white px-6 py-3.5 font-black shadow-[6px_6px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                <Calendar size={18} />
                Schedule call
              </Link>
            </div>
          </motion.div>

          {/* right: business card */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="mx-auto w-full max-w-sm"
          >
            <div className="relative overflow-hidden rounded-[24px] border-[3px] border-black bg-white p-8 shadow-[12px_12px_0px_#000]">
              {/* corner accent */}
              <div className="absolute -right-10 -top-10 h-28 w-28 rotate-45 bg-[var(--yellow)]" />

              <div className="relative">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-400">
                  Contact card
                </p>

                <h2 className="mt-3 font-heading text-2xl font-black leading-tight">
                  Dileep Mali
                </h2>
                <p className="mt-1 text-sm font-semibold text-neutral-500">
                  Full Stack Developer
                </p>

                <div className="mt-6 border-t-[2px] border-dashed border-black/15 pt-5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-400">Based in</span>
                    <span className="font-bold">Jaipur, India</span>
                  </div>
                  <div className="mt-2.5 flex items-center justify-between text-sm">
                    <span className="text-neutral-400">Response time</span>
                    <span className="font-bold">Within 24h</span>
                  </div>
                  <div className="mt-2.5 flex items-center justify-between text-sm">
                    <span className="text-neutral-400">Status</span>
                    <span className="flex items-center gap-1.5 font-bold text-[var(--green)]">
                      <span className="h-2 w-2 rounded-full bg-[var(--green)]" />
                      Open to work
                    </span>
                  </div>
                </div>

                <Link
                  href="#contact-form"
                  className="mt-7 flex items-center justify-between rounded-xl border-[2px] border-black bg-neutral-50 px-4 py-3 text-sm font-bold transition-colors hover:bg-neutral-100"
                >
                  Get in touch
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}