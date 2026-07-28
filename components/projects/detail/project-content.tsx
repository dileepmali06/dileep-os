import { PortableText, PortableTextComponents } from "@portabletext/react";
import { Children, isValidElement, ReactNode } from "react";

import { Container } from "@/components/ui/container";

function getFirstLetter(children: ReactNode): string | null {
  const first = Children.toArray(children)[0];
  if (typeof first === "string") return first.charAt(0);
  if (isValidElement(first)) return getFirstLetter((first.props as any).children);
  return null;
}

let paragraphCount = 0;

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => {
      paragraphCount += 1;
      const isFirst = paragraphCount === 1;
      const letter = isFirst ? getFirstLetter(children) : null;

      return (
        <p className="mb-5 leading-relaxed text-neutral-700">
          {isFirst && letter ? (
            <>
              <span className="float-left mr-2 mt-1 font-heading text-5xl font-black leading-[0.8] sm:text-6xl">
                {letter}
              </span>
              {typeof children === "string" ? children.slice(1) : children}
            </>
          ) : (
            children
          )}
        </p>
      );
    },
    h3: ({ children }) => (
      <h3 className="mb-3 border-l-[3px] border-black pl-3 font-heading text-xl font-black">
        {children}
      </h3>
    ),
  },
};

interface ProjectContentProps {
  description?: string | any[];
}

export function ProjectContent({ description }: ProjectContentProps) {
  if (!description) return null;
  paragraphCount = 0;

  const isPortableText = Array.isArray(description);
  const firstLetter = !isPortableText && typeof description === "string" ? description.charAt(0) : null;
  const restOfText = !isPortableText && typeof description === "string" ? description.slice(1) : null;

  return (
    <section className="section-padding pt-0">
      <Container>
        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border-[3px] border-black bg-white shadow-[6px_6px_0px_#000]">
          <div className="flex">
            {/* margin rail */}
            <div className="hidden w-14 shrink-0 flex-col items-center gap-6 border-r-[2px] border-dashed border-black/15 bg-neutral-50/60 py-8 sm:flex">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-300 [writing-mode:vertical-rl]">
                About this build
              </span>
              <div className="mt-auto flex flex-col gap-1.5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-1 w-1 rounded-full ${i === 0 ? "bg-black" : "bg-black/15"}`}
                  />
                ))}
              </div>
            </div>

            {/* manuscript text */}
            <div className="min-w-0 flex-1 px-6 py-8 sm:px-10 sm:py-10">
              {isPortableText ? (
                <PortableText value={description as any[]} components={components} />
              ) : (
                <p className="leading-relaxed text-neutral-700">
                  {firstLetter && (
                    <span className="float-left mr-2 mt-1 font-heading text-5xl font-black leading-[0.8] sm:text-6xl">
                      {firstLetter}
                    </span>
                  )}
                  {restOfText}
                </p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}