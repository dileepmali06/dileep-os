import { Container } from "@/components/ui/container";

export default function Loading() {
  return (
    <div>
      {/* hero skeleton - notebook page + sticky notes */}
      <section className="overflow-hidden pb-20 pt-16">
        <Container>
          <div className="grid animate-pulse gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-0">
            <div className="rounded-t-[28px] border-[3px] border-black/10 bg-white p-8 sm:pt-10 lg:rounded-l-[28px] lg:rounded-tr-none lg:border-r-0">
              <div className="h-8 w-56 rounded-full bg-neutral-200" />
              <div className="mt-6 h-10 w-full rounded-xl bg-neutral-300" />
              <div className="mt-3 h-10 w-2/3 rounded-xl bg-neutral-300" />
              <div className="mt-6 space-y-2.5">
                <div className="h-4 w-full rounded bg-neutral-200" />
                <div className="h-4 w-5/6 rounded bg-neutral-200" />
              </div>
              <div className="mt-9 h-12 w-40 rounded-2xl bg-neutral-300" />
            </div>

            <div className="rounded-b-[28px] border-[3px] border-t-0 border-black/10 bg-neutral-50 p-8 lg:rounded-r-[28px] lg:rounded-bl-none lg:border-l-0 lg:border-t-[3px]">
              <div className="h-4 w-28 rounded bg-neutral-200" />
              <div className="mt-5 space-y-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="h-16 rounded-xl bg-neutral-100" />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* stats skeleton - overview row + donut */}
      <section className="pb-20">
        <Container>
          <div className="animate-pulse">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-16 w-48 rounded-2xl bg-neutral-100" />
              ))}
            </div>

            <div className="mt-8 rounded-[28px] border-[3px] border-black/10 bg-white p-9">
              <div className="mx-auto h-3 w-40 rounded bg-neutral-200" />
              <div className="mt-6 flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-12">
                <div className="h-44 w-44 rounded-full bg-neutral-100" />
                <div className="flex flex-col gap-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="h-10 w-52 rounded-xl bg-neutral-100" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* featured skeleton - fan of cards */}
      <section className="pb-24">
        <Container>
          <div className="animate-pulse">
            <div className="mb-14 flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-neutral-200" />
              <div>
                <div className="h-3 w-20 rounded bg-neutral-200" />
                <div className="mt-2 h-6 w-44 rounded bg-neutral-300" />
              </div>
            </div>

            <div className="hidden justify-center gap-2 lg:flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="h-72 w-52 rounded-2xl bg-neutral-100"
                  style={{ marginLeft: i === 0 ? 0 : -56 }}
                />
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-52 rounded-2xl bg-neutral-100" />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* log/ledger skeleton */}
      <section className="section-padding">
        <Container>
          <div className="animate-pulse">
            <div className="mb-10 flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-neutral-200" />
              <div>
                <div className="h-3 w-16 rounded bg-neutral-200" />
                <div className="mt-2 h-7 w-40 rounded bg-neutral-300" />
              </div>
            </div>

            {/* toolbar skeleton */}
            <div className="rounded-2xl border-[3px] border-black/10 bg-white p-6">
              <div className="h-12 w-full rounded-2xl bg-neutral-100" />
              <div className="mt-4 flex flex-wrap gap-2">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div key={i} className="h-9 w-20 rounded-xl bg-neutral-100" />
                ))}
              </div>
            </div>

            <div className="mt-5 h-4 w-40 rounded bg-neutral-200" />

            {/* month group skeleton */}
            {Array.from({ length: 2 }).map((_, groupIndex) => (
              <div key={groupIndex} className="mt-10">
                <div className="flex items-center gap-4">
                  <div className="h-6 w-32 rounded bg-neutral-300" />
                  <div className="h-[2px] flex-1 bg-neutral-100" />
                  <div className="h-6 w-20 rounded-full bg-neutral-100" />
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="flex gap-4 rounded-2xl border-[3px] border-black/10 bg-white p-4">
                      <div className="h-16 w-16 shrink-0 rounded-xl bg-neutral-100" />
                      <div className="flex-1 space-y-2">
                        <div className="h-3 w-16 rounded bg-neutral-100" />
                        <div className="h-4 w-full rounded bg-neutral-200" />
                        <div className="h-3 w-4/5 rounded bg-neutral-100" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}