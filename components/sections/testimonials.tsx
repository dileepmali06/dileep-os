"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Quote,
  UserRound,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";

import { FaLinkedinIn } from "react-icons/fa6";
import { motion } from "framer-motion";
import type { Image as SanityImage } from "sanity";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";

type Testimonial = {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  name: string;
  position: string;
  company: string;
  message: string;
  avatar?: SanityImage & { alt?: string };
  linkedinUrl?: string;
  featured?: boolean;
};

const SECONDARY_ROTATION = ["-rotate-1", "rotate-1"];

function Avatar({
  testimonial,
  size,
}: {
  testimonial: Testimonial;
  size: number;
}) {
  const avatarUrl = testimonial.avatar
    ? urlFor(testimonial.avatar)
        .width(size * 2)
        .height(size * 2)
        .url()
    : null;

  if (avatarUrl) {
    return (
      <div
        className="relative shrink-0 overflow-hidden rounded-full border-[2px] border-black"
        style={{ width: size, height: size }}
      >
        <Image
          src={avatarUrl}
          alt={testimonial.avatar?.alt || testimonial.name}
          fill
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-full border-[2px] border-black bg-neutral-100"
      style={{ width: size, height: size }}
    >
      <UserRound size={Math.round(size * 0.45)} />
    </div>
  );
}

function LinkedInBadge({ url }: { url: string }) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View LinkedIn profile"
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-[2px] border-black bg-transparent text-white transition-transform duration-200 hover:scale-110"
    >
      <FaLinkedinIn size={16} />
    </Link>
  );
}

export function Testimonials({ data }: { data: Testimonial[] }) {
  if (!data?.length) return null;

  const [featured, ...rest] = data;
  const companies = Array.from(
    new Set(data.map((t) => t.company).filter(Boolean))
  );

  return (
    <section className="section-padding overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What People Say"
          description="Feedback from people I've worked with and collaborated with."
          align="center"
        />

        {companies.length > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-wide"
          >
            <span className="tracking-normal text-neutral-400">
              Trusted by teams at
            </span>
            {companies.map((company) => (
              <span key={company} className="text-neutral-700">
                {company}
              </span>
            ))}
          </motion.div>
        )}

        <div
          className={`mt-12 grid gap-8 ${
            rest.length > 0 ? "lg:grid-cols-5" : "lg:grid-cols-1"
          }`}
        >
          {/* Featured / most recent testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`relative rounded-2xl border-[3px] border-black bg-[var(--yellow)] p-8 shadow-[8px_8px_0px_#000] ${
              rest.length > 0 ? "lg:col-span-3" : "mx-auto max-w-2xl"
            }`}
          >
            <div className="absolute -right-4 -top-4 flex h-16 w-16 rotate-12 items-center justify-center rounded-full border-[3px] border-black bg-white text-center shadow-[3px_3px_0px_#000]">
              <span className="text-[10px] font-black leading-tight">
                LATEST
                <br />
                PICK
              </span>
            </div>

            <Quote className="text-black/20" size={44} />

            <p className="mt-4 font-heading text-xl font-medium leading-snug text-black sm:text-2xl">
              &ldquo;{featured.message}&rdquo;
            </p>

            <div className="mt-8 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Avatar testimonial={featured} size={56} />
                <div>
                  <h3 className="font-heading text-base font-bold">
                    {featured.name}
                  </h3>
                  <p className="text-sm text-black/70">
                    {featured.position} · {featured.company}
                  </p>
                </div>
              </div>

              {featured.linkedinUrl && (
                <LinkedInBadge url={featured.linkedinUrl} />
              )}
            </div>
          </motion.div>

          {/* Remaining testimonials, stacked */}
          {rest.length > 0 && (
            <div className="flex flex-col gap-6 lg:col-span-2">
              {rest.map((testimonial, index) => (
                <motion.div
                  key={testimonial._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                  className={`relative flex-1 rounded-2xl border-[3px] border-black bg-white p-6 shadow-[6px_6px_0px_#000] transition-all duration-300 hover:-translate-y-1 hover:shadow-[9px_9px_0px_#000] ${
                    SECONDARY_ROTATION[index % SECONDARY_ROTATION.length]
                  }`}
                >
                  <p className="text-sm leading-relaxed text-neutral-600">
                    &ldquo;{testimonial.message}&rdquo;
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <Avatar testimonial={testimonial} size={40} />
                      <div>
                        <h4 className="font-heading text-sm font-bold">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-neutral-500">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {testimonial.linkedinUrl && (
                      <LinkedInBadge url={testimonial.linkedinUrl} />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}