import { Route, Rocket } from "lucide-react";

import { Container } from "@/components/ui/container";

export function JourneyHero() {
  return (
    <section className="section-padding">
      <Container>
        <div className="mx-auto max-w-5xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border-[3px] border-black bg-[var(--blue)] px-5 py-2 font-mono text-sm font-bold shadow-[4px_4px_0px_#000]">
            <Route size={16} />
            JOURNEY
          </div>

          <h1 className="mt-8 font-heading text-5xl font-black leading-tight md:text-7xl">
            From Curiosity
            <br />
            To Engineering
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-neutral-600 md:text-xl">
            Every developer has a timeline of experiments, failures,
            lessons and breakthroughs. This page documents mine —
            from writing the first lines of code to building software
            products and pursuing software engineering.
          </p>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-4">

            <div className="rounded-2xl border-[3px] border-black bg-white p-6 shadow-[6px_6px_0px_#000]">
              <h3 className="font-heading text-3xl font-black">2023</h3>
              <p className="mt-2 text-sm text-neutral-500">
                Started Coding
              </p>
            </div>

            <div className="rounded-2xl border-[3px] border-black bg-white p-6 shadow-[6px_6px_0px_#000]">
              <h3 className="font-heading text-3xl font-black">2024</h3>
              <p className="mt-2 text-sm text-neutral-500">
                Frontend Development
              </p>
            </div>

            <div className="rounded-2xl border-[3px] border-black bg-white p-6 shadow-[6px_6px_0px_#000]">
              <h3 className="font-heading text-3xl font-black">2025</h3>
              <p className="mt-2 text-sm text-neutral-500">
                Full Stack Development
              </p>
            </div>

            <div className="rounded-2xl border-[3px] border-black bg-[var(--yellow)] p-6 shadow-[6px_6px_0px_#000]">
              <div className="flex items-center justify-center gap-2">
                <Rocket size={18} />
                <h3 className="font-heading text-3xl font-black">
                  Future
                </h3>
              </div>

              <p className="mt-2 text-sm text-neutral-700">
                Software Engineer
              </p>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}