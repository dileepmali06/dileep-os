export default function GuestbookLoading() {
  return (
    <div className="grid animate-pulse gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="rounded-2xl border-[3px] border-black/10 bg-white p-5">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 shrink-0 rounded-full bg-neutral-100" />
            <div className="min-w-0 flex-1 space-y-1.5">
              <div className="h-4 w-2/3 rounded bg-neutral-200" />
              <div className="h-2.5 w-1/2 rounded bg-neutral-100" />
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-3.5 w-full rounded bg-neutral-100" />
            <div className="h-3.5 w-4/5 rounded bg-neutral-100" />
          </div>
        </div>
      ))}
    </div>
  );
}