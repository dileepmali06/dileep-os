import { Container } from "@/components/ui/container";

export default function Loading() {
  return (
    <div>
      {/* hero skeleton */}
      <section className="pb-4 pt-28 sm:pt-32">
        <Container>
          <div className="mx-auto max-w-3xl animate-pulse">
            <div className="h-9 w-32 rounded-xl bg-neutral-200" />

            <div className="mt-6 flex items-start gap-5 rounded-2xl border-[3px] border-black/10 bg-white p-7">
              <div className="h-20 w-20 shrink-0 rounded-2xl bg-neutral-200 sm:h-24 sm:w-24" />

              <div className="min-w-0 flex-1">
                <div className="flex gap-2">
                  <div className="h-6 w-20 rounded-full bg-neutral-100" />
                  <div className="h-6 w-16 rounded-full bg-neutral-100" />
                </div>
                <div className="mt-3 h-8 w-full rounded-lg bg-neutral-300" />
                <div className="mt-2 h-8 w-2/3 rounded-lg bg-neutral-200" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* content skeleton - ruled page */}
      <section className="pb-4">
        <Container>
          <div className="mx-auto max-w-3xl animate-pulse rounded-2xl border-[3px] border-black/10 bg-white p-10">
            <div className="space-y-3.5">
              <div className="h-4 w-full rounded bg-neutral-200" />
              <div className="h-4 w-full rounded bg-neutral-200" />
              <div className="h-4 w-11/12 rounded bg-neutral-200" />
              <div className="h-4 w-full rounded bg-neutral-200" />
              <div className="h-4 w-4/5 rounded bg-neutral-200" />
            </div>
          </div>
        </Container>
      </section>

      {/* key takeaways skeleton */}
      <section className="pb-4">
        <Container>
          <div className="mx-auto max-w-3xl animate-pulse rounded-2xl border-[3px] border-black/10 bg-neutral-50 p-8">
            <div className="h-3 w-32 rounded bg-neutral-200" />
            <div className="mt-5 space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-start gap-3.5 py-1">
                  <div className="h-5 w-5 shrink-0 rounded bg-neutral-200" />
                  <div className="h-4 w-full rounded bg-neutral-200" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* resources skeleton */}
      <section className="pb-12">
        <Container>
          <div className="mx-auto max-w-3xl animate-pulse">
            <div className="h-3 w-24 rounded bg-neutral-200" />
            <div className="mt-4 overflow-hidden rounded-2xl border-[3px] border-black/10 bg-white">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3 px-5 py-4">
                  <div className="h-7 w-7 shrink-0 rounded-lg bg-neutral-200" />
                  <div className="h-4 w-40 rounded bg-neutral-100" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}