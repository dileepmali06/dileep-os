import { Quote, Sparkles } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface LifeUpdateProps {
  data: {
    lifeUpdate?: string;
  };
}

export function LifeUpdate({
  data,
}: LifeUpdateProps) {

  if (!data.lifeUpdate) {
    return null;
  }

  return (
    <section className="section-padding bg-neutral-50">
      <Container>

        <SectionHeading
          eyebrow="Life Update"
          title="What's Going On Behind The Scenes"
          description="A small snapshot of life outside commits, pull requests and deployments."
          align="center"
        />

        <div className="mx-auto mt-16 max-w-4xl">

          <div className="relative overflow-hidden rounded-[32px] border-[4px] border-black bg-[var(--yellow)] p-10 shadow-[12px_12px_0px_#000]">

            <div className="absolute right-6 top-6 opacity-20">
              <Quote size={80} />
            </div>

            <div className="relative z-10">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-[3px] border-black bg-white">
                <Sparkles size={30} />
              </div>

              <p className="mt-8 text-xl leading-relaxed text-neutral-800 sm:text-2xl">
                {data.lifeUpdate}
              </p>

              <div className="mt-10 inline-flex items-center gap-2 rounded-full border-[3px] border-black bg-white px-4 py-2 font-mono text-sm font-bold shadow-[4px_4px_0px_#000]">
                <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500" />
                LIVE STATUS
              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}