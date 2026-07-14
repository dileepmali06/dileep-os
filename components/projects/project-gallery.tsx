"use client";

import { useState } from "react";
import Image from "next/image";
import type { Image as SanityImage } from "sanity";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { urlFor } from "@/sanity/lib/image";

interface Props {
  project: {
    title: string;
    gallery?: SanityImage[];
  };
}

export function ProjectGallery({ project }: Props) {
  const [active, setActive] = useState(0);

  if (!project.gallery || project.gallery.length === 0) {
    return null;
  }

  const images = project.gallery;

  const activeUrl = urlFor(images[active])
    .width(1400)
    .fit("max")
    .url();

  const go = (dir: 1 | -1) => {
    setActive(
      (prev) =>
        (prev + dir + images.length) %
        images.length
    );
  };

  return (
    <section className="pb-20">
      <Container>
        {/* Heading */}
        <div className="mb-8">
          <h2 className="font-heading text-3xl font-black sm:text-4xl">
            Project Gallery
          </h2>

          <p className="mt-2 text-sm text-neutral-500 sm:text-base">
            Screenshots and visuals from the project.
          </p>
        </div>

        {/* Main Viewer */}
        <div className="relative overflow-hidden rounded-[20px] border-[3px] border-black bg-neutral-50 shadow-[7px_7px_0px_#000]">
          <div className="relative flex aspect-[16/8.5] w-full items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{
                  opacity: 0,
                  scale: 0.98,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="absolute inset-0"
              >
                <Image
                  src={activeUrl}
                  alt={`${project.title} screenshot ${active + 1}`}
                  fill
                  priority
                  sizes="(max-width:768px) 100vw, 900px"
                  className="object-contain p-2"
                />
              </motion.div>
            </AnimatePresence>

            {/* Previous */}
            {images.length > 1 && (
              <button
                onClick={() => go(-1)}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-[2px] border-black bg-white shadow-[2px_2px_0px_#000] transition-all duration-200 hover:scale-105"
              >
                <ChevronLeft size={18} />
              </button>
            )}

            {/* Next */}
            {images.length > 1 && (
              <button
                onClick={() => go(1)}
                aria-label="Next image"
                className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-[2px] border-black bg-white shadow-[2px_2px_0px_#000] transition-all duration-200 hover:scale-105"
              >
                <ChevronRight size={18} />
              </button>
            )}

            {/* Counter */}
            <span className="absolute bottom-3 right-3 z-10 rounded-full border-[2px] border-black bg-white px-2.5 py-0.5 font-mono text-[11px] font-semibold shadow-[2px_2px_0px_#000]">
              {active + 1} / {images.length}
            </span>
          </div>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {images.map(
              (
                image,
                index
              ) => {
                const thumbUrl =
                  urlFor(image)
                    .width(220)
                    .height(140)
                    .fit("crop")
                    .url();

                const isActive =
                  index === active;

                return (
                  <button
                    key={index}
                    onClick={() =>
                      setActive(index)
                    }
                    className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-md border-[2px] transition-all duration-200 sm:h-16 sm:w-24 ${
                      isActive
                        ? "border-black opacity-100 shadow-[2px_2px_0px_#000]"
                        : "border-black/20 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={thumbUrl}
                      alt={`${project.title} thumbnail ${
                        index + 1
                      }`}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </button>
                );
              }
            )}
          </div>
        )}
      </Container>
    </section>
  );
}