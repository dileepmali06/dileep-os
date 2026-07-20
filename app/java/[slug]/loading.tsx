import { Coffee } from "lucide-react";

export default function Loading() {
  return (
    <main className="container mx-auto max-w-2xl px-4 py-28">
      <div className="flex flex-col items-center text-center">
        {/* steaming cup */}
        <div className="relative">
          <div className="absolute -top-6 left-1/2 flex -translate-x-1/2 gap-2">
            <span className="steam-bar h-6 w-1 rounded-full bg-neutral-300" style={{ animationDelay: "0ms" }} />
            <span className="steam-bar h-8 w-1 rounded-full bg-neutral-300" style={{ animationDelay: "200ms" }} />
            <span className="steam-bar h-6 w-1 rounded-full bg-neutral-300" style={{ animationDelay: "400ms" }} />
          </div>

          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border-[3px] border-black bg-[var(--orange)] shadow-[6px_6px_0px_#000]">
            <Coffee size={32} />
          </div>
        </div>

        <h1 className="mt-8 font-heading text-2xl font-black sm:text-3xl">
          Brewing your snippet...
        </h1>

        <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-neutral-500">
          Fetching the code, complexity notes and tags. Just a moment.
        </p>

        {/* brew progress bar */}
        <div className="mt-8 h-2.5 w-64 overflow-hidden rounded-full border-[2px] border-black bg-neutral-100">
          <div className="brew-fill h-full bg-[var(--orange)]" />
        </div>
      </div>

      <style>{`
        @keyframes steam-rise {
          0% { transform: translateY(0) scaleY(1); opacity: 0; }
          30% { opacity: 0.7; }
          100% { transform: translateY(-14px) scaleY(1.4); opacity: 0; }
        }
        .steam-bar {
          animation: steam-rise 1.6s ease-in-out infinite;
        }
        @keyframes brew-fill {
          0% { width: 10%; }
          50% { width: 85%; }
          100% { width: 10%; }
        }
        .brew-fill {
          animation: brew-fill 1.4s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}