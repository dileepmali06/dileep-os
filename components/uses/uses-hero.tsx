import { Container } from "@/components/ui/container";

export function UsesHero() {
  return (
    <section className="section-padding border-b-[4px] border-black">
      <Container>
        <div className="mx-auto max-w-4xl text-center">

          <p className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-neutral-500">
            Uses
          </p>

          <h1 className="mt-6 font-heading text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
            My Developer
            <br />
            Workspace
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600 sm:text-xl">
            The hardware, software and tools that power my daily
            workflow. Everything from code editors and terminals to
            browsers, AI tools and productivity apps.
          </p>

          <div className="mt-10 inline-flex rounded-2xl border-[3px] border-black bg-[var(--yellow)] px-6 py-3 shadow-[6px_6px_0px_#000]">
            <span className="font-mono text-sm font-bold">
              Updated regularly as my setup evolves.
            </span>
          </div>

        </div>
      </Container>
    </section>
  );
}