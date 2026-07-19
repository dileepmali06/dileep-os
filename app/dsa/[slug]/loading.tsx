export default function Loading() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto max-w-6xl px-4 py-16">
        {/* hero skeleton */}
        <div className="animate-pulse rounded-[28px] border-[3px] border-black bg-white p-7 shadow-[8px_8px_0px_#000] sm:p-9">
          <div className="flex flex-wrap gap-2.5">
            <div className="h-6 w-20 rounded-full bg-neutral-200" />
            <div className="h-6 w-24 rounded-full bg-neutral-200" />
            <div className="h-6 w-20 rounded-full bg-neutral-200" />
          </div>

          <div className="mt-6 h-10 w-3/4 rounded-xl bg-neutral-300 lg:h-12" />

          <div className="mt-5 space-y-2.5">
            <div className="h-4 w-full rounded bg-neutral-200" />
            <div className="h-4 w-5/6 rounded bg-neutral-200" />
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <div className="h-7 w-16 rounded-lg bg-neutral-100" />
            <div className="h-7 w-20 rounded-lg bg-neutral-100" />
            <div className="h-7 w-14 rounded-lg bg-neutral-100" />
          </div>
        </div>

        {/* approach tabs skeleton */}
        <div className="mt-8 animate-pulse overflow-hidden rounded-[24px] border-[3px] border-black bg-white shadow-[7px_7px_0px_#000]">
          <div className="flex border-b-[3px] border-black">
            <div className="h-12 flex-1 bg-neutral-100" />
            <div className="h-12 flex-1 bg-neutral-50" />
          </div>
          <div className="space-y-3 p-7">
            <div className="h-4 w-full rounded bg-neutral-200" />
            <div className="h-4 w-11/12 rounded bg-neutral-200" />
            <div className="h-4 w-4/5 rounded bg-neutral-200" />
          </div>
        </div>

        {/* code block skeleton */}
        <div className="mt-8 animate-pulse overflow-hidden rounded-2xl border-[3px] border-black bg-[#1a1a1a] shadow-[8px_8px_0px_#000]">
          <div className="flex items-center gap-3.5 border-b-[2px] border-white/10 px-5 py-3.5">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-white/15" />
              <span className="h-3 w-3 rounded-full bg-white/15" />
              <span className="h-3 w-3 rounded-full bg-white/15" />
            </div>
            <div className="h-3.5 w-28 rounded bg-white/10" />
          </div>

          <div className="space-y-3 p-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="h-3.5 rounded bg-white/10"
                style={{ width: `${55 + (index % 4) * 12}%` }}
              />
            ))}
          </div>
        </div>

        {/* complexity panel skeleton */}
        <div className="mt-8 animate-pulse overflow-hidden rounded-[28px] border-[3px] border-black bg-white shadow-[8px_8px_0px_#000]">
          <div className="grid divide-y-[3px] divide-black border-b-[3px] border-black sm:grid-cols-2 sm:divide-x-[3px] sm:divide-y-0">
            <div className="flex items-center gap-4 p-6 sm:p-8">
              <div className="h-14 w-14 shrink-0 rounded-2xl bg-neutral-200" />
              <div className="space-y-2.5">
                <div className="h-3.5 w-24 rounded bg-neutral-200" />
                <div className="h-7 w-16 rounded bg-neutral-300" />
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 sm:p-8">
              <div className="h-14 w-14 shrink-0 rounded-2xl bg-neutral-200" />
              <div className="space-y-2.5">
                <div className="h-3.5 w-24 rounded bg-neutral-200" />
                <div className="h-7 w-16 rounded bg-neutral-300" />
              </div>
            </div>
          </div>

          <div className="grid gap-3 p-6 sm:grid-cols-3 sm:p-8">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="h-16 rounded-2xl bg-neutral-100" />
            ))}
          </div>
        </div>

        {/* key learning skeleton */}
        <div className="mt-8 animate-pulse space-y-3 overflow-hidden rounded-[28px] border-[3px] border-black bg-white p-7 shadow-[8px_8px_0px_#000] sm:p-8">
          <div className="h-5 w-32 rounded bg-neutral-300" />
          <div className="h-4 w-full rounded bg-neutral-200" />
          <div className="h-4 w-4/5 rounded bg-neutral-200" />
        </div>

        {/* nav bar skeleton */}
        <div className="mt-8 flex animate-pulse gap-0 overflow-hidden rounded-[24px] border-[3px] border-black bg-white shadow-[7px_7px_0px_#000]">
          <div className="h-20 flex-1 border-r-[3px] border-black bg-neutral-50" />
          <div className="h-20 flex-1 bg-neutral-50" />
        </div>
      </div>
    </main>
  );
}