import { Container } from "@/components/ui/container";

export default function Loading() {
  return (
    <main>
      {/* hero skeleton */}
      <section className="section-padding overflow-hidden">
        <Container>
          <div className="animate-pulse text-center">
            <div className="mx-auto h-8 w-44 rounded-full bg-neutral-200" />
            <div className="mx-auto mt-8 h-11 w-full max-w-2xl rounded-xl bg-neutral-300" />
            <div className="mx-auto mt-3 h-11 w-2/3 max-w-md rounded-xl bg-neutral-200" />
            <div className="mx-auto mt-6 h-4 w-full max-w-lg rounded bg-neutral-100" />
            <div className="mx-auto mt-9 flex max-w-md justify-center gap-4">
              <div className="h-12 w-40 rounded-2xl bg-neutral-300" />
              <div className="h-12 w-44 rounded-2xl bg-neutral-100" />
            </div>
          </div>
        </Container>
      </section>

      {/* stats band skeleton */}
      <section className="pb-20">
        <Container>
          <div className="animate-pulse overflow-hidden rounded-[28px] border-[3px] border-black/10 bg-white">
            <div className="grid divide-y divide-black/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4 xl:grid-cols-7">
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3.5 p-5">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-neutral-100" />
                  <div className="min-w-0 flex-1 space-y-1.5">
                    <div className="h-4 w-10 rounded bg-neutral-200" />
                    <div className="h-2.5 w-14 rounded bg-neutral-100" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* currently reading skeleton - leaning books */}
      <section className="pb-24">
        <Container>
          <div className="animate-pulse text-center">
            <div className="mx-auto h-6 w-52 rounded bg-neutral-300" />
            <div className="mx-auto mt-2 h-3.5 w-64 rounded bg-neutral-100" />

            <div className="mx-auto mt-8 flex max-w-4xl flex-wrap items-end justify-center gap-7 pt-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <div className="h-52 w-36 rounded-md bg-neutral-100 sm:h-60 sm:w-40" />
                  <div className="h-3 w-24 rounded bg-neutral-100" />
                </div>
              ))}
            </div>
            <div className="mx-auto mt-1 h-3 max-w-4xl rounded-full bg-neutral-200 sm:h-4" />
          </div>
        </Container>
      </section>

      {/* featured skeleton - scroll row */}
      <section className="pb-20">
        <Container>
          <div className="mb-7 flex animate-pulse items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-neutral-200" />
            <div className="space-y-2">
              <div className="h-2.5 w-24 rounded bg-neutral-100" />
              <div className="h-5 w-40 rounded bg-neutral-300" />
            </div>
          </div>

          <div className="flex animate-pulse gap-7 overflow-hidden">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="w-[190px] shrink-0 space-y-3 sm:w-[210px]">
                <div className="aspect-[2/3] w-full rounded-sm bg-neutral-100" />
                <div className="h-4 w-4/5 rounded bg-neutral-200" />
                <div className="h-3 w-1/2 rounded bg-neutral-100" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* shelf skeleton */}
      <section className="pb-24">
        <Container>
          <div className="animate-pulse">
            <div className="h-2.5 w-24 rounded bg-neutral-100" />
            <div className="mt-2 h-7 w-40 rounded bg-neutral-300" />

            <div className="mt-10 space-y-16">
              {Array.from({ length: 2 }).map((_, groupIndex) => (
                <div key={groupIndex}>
                  <div className="mb-6 flex items-center gap-2.5">
                    <div className="h-4 w-4 rounded bg-neutral-200" />
                    <div className="h-5 w-28 rounded bg-neutral-200" />
                  </div>
                  <div className="flex flex-wrap items-end gap-x-8 gap-y-10 border-b-[6px] border-black/10 pb-6">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="w-[150px] space-y-3 sm:w-[170px]">
                        <div className="aspect-[2/3] w-full rounded-sm bg-neutral-100" />
                        <div className="h-3.5 w-4/5 rounded bg-neutral-200" />
                        <div className="h-2.5 w-1/2 rounded bg-neutral-100" />
                      </div>
                    ))}
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