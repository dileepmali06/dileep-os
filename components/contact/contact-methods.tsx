"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { FiLinkedin as Linkedin } from "react-icons/fi";
import { FiGithub as Github } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import { Container } from "../ui/container";

const methods = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@dileepmali.me",
    href: "mailto:hello@dileepmali.me",
    color: "var(--yellow)",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 96362 49430",
    href: "tel:+919636249430",
    color: "var(--blue)",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "Chat directly",
    href: "https://wa.me/919636249430",
    color: "var(--green)",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/dileep-mali",
    color: "var(--blue)",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@dileepmali06",
    href: "https://github.com/dileepmali06",
    color: "var(--pink)",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Rajasthan, India",
    href: null,
    color: "var(--yellow)",
  },
];

export default function ContactMethods() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = methods[activeIndex];

  return (
    <section className="pb-20">
      <Container>
        <div className="mx-auto max-w-2xl">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
            Reach out
          </p>
          <h2 className="mt-1 text-3xl font-black sm:text-4xl">Ways to connect</h2>

          {/* address book */}
          <div className="relative mt-8">
            <div className="flex overflow-hidden rounded-2xl border-[3px] border-black bg-white shadow-[8px_8px_0px_#000]">
              {/* entry display */}
              <div className="min-w-0 flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.label}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-full flex-col justify-center p-7 sm:p-9"
                  >
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl border-[2px] border-black"
                      style={{ background: active.color }}
                    >
                      <active.icon size={20} />
                    </div>

                    <p className="mt-5 text-xs font-bold uppercase tracking-widest text-neutral-400">
                      {active.label}
                    </p>
                    <p className="mt-1 font-heading text-2xl font-black sm:text-3xl">
                      {active.value}
                    </p>

                    {active.href && (

                      <a href={active.href}
                        target={active.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex w-fit items-center gap-2 rounded-xl border-[2px] border-black bg-neutral-50 px-4 py-2.5 text-sm font-bold transition-colors hover:bg-neutral-100"
                      >
                        Open
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* tab index */}
              <div className="flex shrink-0 flex-col border-l-[3px] border-black">
                {methods.map((method, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={method.label}
                      onClick={() => setActiveIndex(index)}
                      aria-label={method.label}
                      className={`relative flex flex-1 items-center justify-center border-b-[2px] border-black/10 px-3 py-3 transition-all last:border-b-0 sm:px-5 ${isActive ? "" : "hover:bg-neutral-50"
                        }`}
                      style={isActive ? { background: method.color } : undefined}
                    >
                      <method.icon
                        size={16}
                        className={isActive ? "text-black" : "text-neutral-400"}
                      />
                      {isActive && (
                        <motion.span
                          layoutId="tab-indicator"
                          className="absolute -left-[3px] top-0 h-full w-[3px] bg-black"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}