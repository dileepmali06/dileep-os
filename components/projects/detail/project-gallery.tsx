"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Expand, Play } from "lucide-react";

import { Container } from "@/components/ui/container";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageValue } from "../project-meta";

interface ProjectGalleryProps {
  gallery?: SanityImageValue[];
  demoVideo?: string;
}

function getYouTubeEmbedUrl(url: string) {
  const regExp = /^.*(?:youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/;
  const match = url.match(regExp);
  if (!match || match[1].length !== 11) return null;
  return `https://www.youtube.com/embed/${match[1]}`;
}

type Frame =
  | { type: "video"; embedUrl: string }
  | { type: "image"; image: SanityImageValue; index: number };

export function ProjectGallery({ gallery, demoVideo }: ProjectGalleryProps) {
  const embedUrl = demoVideo ? getYouTubeEmbedUrl(demoVideo) : null;

  const frames: Frame[] = [
    ...(embedUrl ? [{ type: "video", embedUrl } as Frame] : []),
    ...(gallery ?? []).map((image, index) => ({ type: "image", image, index } as Frame)),
  ];

  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!frames.length) return null;

  const activeFrame = frames[active];

  const goTo = (i: number) => setActive((i + frames.length) % frames.length);

  return (
    <section className="section-padding pt-0">
      <Container>
        <div className="mb-4 flex items-center justify-between">
          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400">
            Contact sheet — frame {String(active + 1).padStart(2, "0")} / {String(frames.length).padStart(2, "0")}
          </p>
          {frames.length > 1 && (
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => goTo(active - 1)}
                className="flex h-7 w-7 items-center justify-center rounded-full border-[2px] border-black bg-white transition-shadow hover:shadow-[2px_2px_0px_#000]"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                onClick={() => goTo(active + 1)}
                className="flex h-7 w-7 items-center justify-center rounded-full border-[2px] border-black bg-white transition-shadow hover:shadow-[2px_2px_0px_#000]"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          )}
        </div>

        {/* main viewer — film-strip framed */}
        <div className="relative overflow-hidden rounded-2xl border-[3px] border-black bg-black shadow-[8px_8px_0px_#000]">
          {/* sprocket holes */}
          <div className="absolute inset-y-0 left-0 z-10 flex w-6 flex-col justify-around bg-black py-3 sm:w-8">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="mx-auto h-2.5 w-2.5 rounded-[3px] bg-white/90 sm:h-3 sm:w-3" />
            ))}
          </div>
          <div className="absolute inset-y-0 right-0 z-10 flex w-6 flex-col justify-around bg-black py-3 sm:w-8">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="mx-auto h-2.5 w-2.5 rounded-[3px] bg-white/90 sm:h-3 sm:w-3" />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative mx-6 flex aspect-video items-center justify-center bg-neutral-900 sm:mx-8"
            >
              {activeFrame.type === "video" ? (
                <iframe
                  src={activeFrame.embedUrl}
                  title="Project demo"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <>
                  <Image
                    src={urlFor(activeFrame.image).width(1400).fit("max").url()}
                    alt={activeFrame.image.alt ?? `Gallery image ${activeFrame.index + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1000px"
                    className="object-contain p-2"
                  />
                  <button
                    onClick={() => setLightboxOpen(true)}
                    className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border-[2px] border-white/40 bg-black/50 text-white backdrop-blur transition-colors hover:bg-black/70"
                  >
                    <Expand size={15} />
                  </button>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* thumbnail filmstrip */}
        {frames.length > 1 && (
          <div className="mt-4 flex gap-2.5 overflow-x-auto pb-2 [scrollbar-width:thin]">
            {frames.map((frame, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-[2px] transition-all sm:h-20 sm:w-28 ${
                  active === i
                    ? "border-black shadow-[3px_3px_0px_#000]"
                    : "border-black/20 opacity-60 hover:opacity-100"
                }`}
              >
                {frame.type === "video" ? (
                  <div className="flex h-full w-full items-center justify-center bg-black">
                    <Play size={16} className="text-white" fill="white" />
                  </div>
                ) : (
                  <Image
                    src={urlFor(frame.image).width(300).height(200).url()}
                    alt={frame.image.alt ?? `Thumbnail ${frame.index + 1}`}
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                )}
              </button>
            ))}
          </div>
        )}
      </Container>

      {/* lightbox */}
      <AnimatePresence>
        {lightboxOpen && activeFrame.type === "image" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-10"
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border-[2px] border-white/40 bg-black/50 text-white"
            >
              <X size={18} />
            </button>

            {frames.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goTo(active - 1);
                  }}
                  className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full border-[2px] border-white/40 bg-black/50 text-white sm:left-8"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goTo(active + 1);
                  }}
                  className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full border-[2px] border-white/40 bg-black/50 text-white sm:right-8"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="relative h-full max-h-[85vh] w-full max-w-5xl"
            >
              <Image
                src={urlFor(activeFrame.image).width(2000).fit("max").url()}
                alt={activeFrame.image.alt ?? "Gallery image"}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}