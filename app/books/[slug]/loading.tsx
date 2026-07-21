import { Container } from "@/components/ui/container";

export default function Loading() {
  return (
    <main>
      {/* hero skeleton */}
      <section className="pb-16 pt-28 sm:pt-32">
        <Container>
          <div className="mx-auto max-w-5xl animate-pulse">
            <div className="h-9 w-32 rounded-xl bg-neutral-200" />

            <div className="mt-8 grid gap-12 md:grid-cols-[240px_1fr] md:items-center md:gap-14">
              <div className="mx-auto aspect-[2/3] w-40 rounded-sm bg-neutral-100 md:mx-0 md:w-full" />

              <div className="text-center md:text-left">
                <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                  <div className="h-6 w-20 rounded-full bg-neutral-200" />
                  <div className="h-6 w-16 rounded-full bg-neutral-100" />
                  <div className="h-6 w-24 rounded-full bg-neutral-100" />
                </div>
                <div className="mx-auto mt-4 h-9 w-full max-w-md rounded-lg bg-neutral-300 md:mx-0" />
                <div className="mx-auto mt-2 h-5 w-40 rounded bg-neutral-100 md:mx-0" />
                <div className="mx-auto mt-3 h-4 w-32 rounded bg-neutral-100 md:mx-0" />
                <div className="mx-auto mt-4 space-y-2 md:mx-0">
                  <div className="h-4 w-full max-w-md rounded bg-neutral-100" />
                  <div className="h-4 w-5/6 max-w-md rounded bg-neutral-100" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* description spread skeleton */}
      <section className="pb-16">
        <Container>
          <div className="mx-auto max-w-4xl animate-pulse overflow-hidden rounded-2xl border-[3px] border-black/10">
            <div className="grid sm:grid-cols-[0.7fr_1fr]">
              <div className="hidden bg-neutral-50 sm:block" />
              <div className="space-y-3 bg-neutral-50 p-9">
                <div className="h-4 w-full rounded bg-neutral-200" />
                <div className="h-4 w-full rounded bg-neutral-200" />
                <div className="h-4 w-4/5 rounded bg-neutral-200" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* catalog card skeleton */}
      <section className="pb-16">
        <Container>
          <div className="mx-auto max-w-2xl animate-pulse rounded-lg border-[2px] border-black/10 bg-neutral-50 p-8">
            <div className="h-3 w-28 rounded bg-neutral-200" />
            <div className="mt-5 space-y-2.5">
              <div className="h-3.5 w-full rounded bg-neutral-100" />
              <div className="h-3.5 w-3/4 rounded bg-neutral-100" />
            </div>
            <div className="mt-5 flex gap-3">
              <div className="h-10 w-20 rounded bg-neutral-100" />
              <div className="h-10 w-20 rounded bg-neutral-100" />
            </div>
          </div>
        </Container>
      </section>

      {/* key takeaways skeleton */}
      <section className="pb-16">
        <Container>
          <div className="mx-auto max-w-2xl animate-pulse rounded-lg border-[2px] border-black/10 bg-neutral-50 p-9">
            <div className="h-3 w-36 rounded bg-neutral-200" />
            <div className="mt-6 space-y-4">
              <div className="h-4 w-full rounded bg-neutral-100" />
              <div className="h-4 w-11/12 rounded bg-neutral-100" />
              <div className="h-4 w-4/5 rounded bg-neutral-100" />
            </div>
          </div>
        </Container>
      </section>

      {/* purchase links skeleton */}
      <section className="pb-16">
        <Container>
          <div className="mx-auto max-w-3xl animate-pulse">
            <div className="mx-auto h-3 w-32 rounded bg-neutral-100" />
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-16 rounded-xl bg-neutral-100" />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* related books skeleton - receipt */}
      <section className="pb-16">
        <Container>
          <div className="mx-auto max-w-md animate-pulse">
            <div className="mx-auto h-3 w-28 rounded bg-neutral-100" />
            <div className="mt-5 space-y-4 rounded-lg bg-neutral-50 p-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-3.5 w-full rounded bg-neutral-100" />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}