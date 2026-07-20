import { Container } from "@/components/ui/container";

export default function Loading() {
  return (
    <main>
      {/* hero skeleton */}
      <section className="section-padding pb-10">
        <Container>
          <div className="grid animate-pulse items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="h-8 w-56 rounded-full bg-neutral-200" />
              <div className="mt-8 h-11 w-full rounded-xl bg-neutral-300" />
              <div className="mt-3 h-11 w-2/3 rounded-xl bg-neutral-300" />
              <div className="mt-6 space-y-2.5">
                <div className="h-4 w-full rounded bg-neutral-200" />
                <div className="h-4 w-5/6 rounded bg-neutral-200" />
              </div>
              <div className="mt-8 flex gap-4">
                <div className="h-14 w-40 rounded-2xl bg-neutral-300" />
                <div className="h-14 w-44 rounded-2xl bg-neutral-200" />
              </div>
            </div>

            <div className="rounded-[28px] border-[3px] border-black/10 bg-white p-7 shadow-sm sm:p-8">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="h-3 w-32 rounded bg-neutral-200" />
                  <div className="h-6 w-40 rounded bg-neutral-300" />
                </div>
                <div className="h-14 w-14 rounded-2xl bg-neutral-200" />
              </div>

              <div className="mt-8 space-y-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="h-16 rounded-2xl bg-neutral-100" />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* grid section skeleton */}
      <section className="pb-24">
        <Container>
          <div className="animate-pulse">
            <div className="mb-10">
              <div className="h-3.5 w-28 rounded bg-neutral-200" />
              <div className="mt-3 h-9 w-72 rounded-lg bg-neutral-300" />
              <div className="mt-4 h-4 w-full max-w-2xl rounded bg-neutral-200" />
            </div>

            {/* toolbar skeleton */}
            <div className="rounded-[24px] border-[3px] border-black/10 bg-white p-6 shadow-sm">
              <div className="h-14 w-full rounded-2xl bg-neutral-100" />
              <div className="mt-5 flex flex-wrap gap-2.5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-9 w-24 rounded-full bg-neutral-100" />
                ))}
              </div>
            </div>

            <div className="mt-6 h-4 w-40 rounded bg-neutral-200" />

            {/* card grid skeleton */}
            <div className="mt-8 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-[20px] border-[3px] border-black/10 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="h-5 w-20 rounded-full bg-neutral-200" />
                    <div className="h-4 w-4 rounded-full bg-neutral-100" />
                  </div>
                  <div className="mt-4 h-5 w-4/5 rounded bg-neutral-300" />
                  <div className="mt-2 h-4 w-full rounded bg-neutral-100" />
                  <div className="mt-1.5 h-4 w-3/4 rounded bg-neutral-100" />
                  <div className="mt-4 flex gap-1.5">
                    <div className="h-5 w-14 rounded-md bg-neutral-100" />
                    <div className="h-5 w-16 rounded-md bg-neutral-100" />
                  </div>
                  <div className="mt-5 flex items-center justify-between border-t-2 border-dashed border-black/10 pt-4">
                    <div className="h-3.5 w-16 rounded bg-neutral-100" />
                    <div className="h-8 w-8 rounded-lg bg-neutral-200" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}