"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Quote,
  UserRound,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import type { Image as SanityImage } from "sanity";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";

type Testimonial = {
  _id: string;
  name: string;
  position: string;
  company: string;
  message: string;
  avatar?: SanityImage;
};

export function Testimonials({
  data,
}: {
  data: Testimonial[];
}) {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What People Say"
          description="Feedback from people I've worked with and collaborated with."
          align="center"
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {data?.map(
            (
              testimonial,
              index
            ) => {
              const avatarUrl =
                testimonial.avatar
                  ? urlFor(
                      testimonial.avatar
                    )
                      .width(
                        200
                      )
                      .height(
                        200
                      )
                      .url()
                  : null;

              return (
                <motion.div
                  key={
                    testimonial._id
                  }
                  initial={{
                    opacity: 0,
                    y: 16,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay:
                      index *
                      0.1,
                  }}
                  className="relative rounded-2xl border-[3px] border-black bg-white p-8 shadow-[6px_6px_0px_#000] transition-all duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_0px_#000]"
                >
                  <div className="flex h-full flex-col justify-between gap-6">
                    <Quote
                      className="text-black/15"
                      size={36}
                    />

                    <p className="leading-relaxed text-neutral-600">
                      &ldquo;
                      {
                        testimonial.message
                      }
                      &rdquo;
                    </p>

                    <div className="flex items-center gap-3">
                      {avatarUrl ? (
                        <div className="relative h-12 w-12 overflow-hidden rounded-full border-[2px] border-black">
                          <Image
                            src={
                              avatarUrl
                            }
                            alt={
                              testimonial.name
                            }
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border-[2px] border-black bg-neutral-100">
                          <UserRound
                            size={
                              22
                            }
                          />
                        </div>
                      )}

                      <div>
                        <h3 className="font-heading text-base font-bold">
                          {
                            testimonial.name
                          }
                        </h3>

                        <p className="text-sm text-neutral-500">
                          {
                            testimonial.position
                          }
                        </p>

                        <p className="text-xs text-neutral-400">
                          {
                            testimonial.company
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            }
          )}
        </div>

        {/* CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 16,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.4,
            delay: 0.3,
          }}
          className="mx-auto mt-8 flex max-w-2xl flex-col items-center gap-4 rounded-2xl border-[3px] border-black bg-[var(--yellow)] p-8 text-center shadow-[8px_8px_0px_#000] sm:flex-row sm:text-left"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-[3px] border-black bg-white">
            <Sparkles
              size={22}
            />
          </div>

          <div className="flex-1">
            <h3 className="font-heading text-lg font-black">
              Want to work together?
            </h3>

            <p className="text-sm text-neutral-800/80">
              Let&apos;s build
              something
              meaningful
              together and
              create the next
              success story.
            </p>
          </div>

          <Button
            className="shrink-0 bg-black text-white hover:bg-black/90"
          >
            <Link href="/contact" className="flex items-center">
              Let&apos;s Connect

              <ArrowRight
                size={16}
                className="ml-1.5"
              />
            </Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}