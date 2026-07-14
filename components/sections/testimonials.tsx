"use client";

import { Quote, UserRound, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    role: "Future Client",
    message:
      "Working with Dilip was a great experience. Professional communication and excellent delivery quality.",
  },
  {
    role: "Future Colleague",
    message:
      "Strong learning mindset and always willing to improve engineering skills and product quality.",
  },
  {
    role: "Future Manager",
    message:
      "Reliable, curious and focused on building scalable and maintainable software solutions.",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What People Say"
          description="This section is reserved for real feedback — here's the kind of impact I'm working toward."
          align="center"
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.role}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative rounded-2xl border-[3px] border-dashed border-black/30 bg-white p-8"
            >
              <span className="absolute right-5 top-5 rounded-full border-[2px] border-black/20 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-neutral-400">
                Reserved
              </span>

              <div className="flex h-full flex-col justify-between gap-6">
                <Quote className="text-black/15" size={36} />

                <p className="leading-relaxed text-neutral-500">
                  &ldquo;{testimonial.message}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border-[2px] border-dashed border-black/30 text-black/30">
                    <UserRound size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-neutral-400">
                      Awaiting feedback
                    </h3>
                    <p className="text-sm text-neutral-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mx-auto mt-8 flex max-w-2xl flex-col items-center gap-4 rounded-2xl border-[3px] border-black bg-[var(--yellow)] p-8 text-center shadow-[8px_8px_0px_#000] sm:flex-row sm:text-left"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-[3px] border-black bg-white">
            <Sparkles size={22} />
          </div>
          <div className="flex-1">
            <h3 className="font-heading text-lg font-black">
              Be the first to leave feedback
            </h3>
            <p className="text-sm text-neutral-800/80">
              Work with me on a project and your testimonial gets a permanent
              spot right here.
            </p>
          </div>
          <Button className="shrink-0 bg-black text-white hover:bg-black/90">
            Let&apos;s Connect
            <ArrowRight size={16} className="ml-1.5" />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}