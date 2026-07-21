import Link from "next/link";
import { Library, ArrowRight } from "lucide-react";

import { Container } from "../../ui/container";

type BookNavigationProps = {
  genre?: string;
};

export default function BookNavigation({ genre }: BookNavigationProps) {
  return (
    <section className="pb-16">
      <Container>
        <div className="mx-auto max-w-md">
          <Link href="/books" className="group relative block">
            <div className="relative overflow-hidden rounded-lg border-[2px] border-dashed border-black/40 bg-[#fbf8f0] px-6 py-7 text-center transition-colors group-hover:bg-[#f5f0e0]">
              {/* rotated stamp */}
              <div className="mx-auto flex h-16 w-16 -rotate-12 items-center justify-center rounded-full border-[3px] border-black/70">
                <Library size={22} className="text-black/70" />
              </div>

              <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/50">
                {genre ? `Filed under — ${genre}` : "Return to shelf"}
              </p>

              <p className="mt-1.5 font-heading text-lg font-black">
                {genre ? `Browse more ${genre}` : "Back to the full library"}
              </p>

              <div className="mt-4 flex items-center justify-center gap-1.5 text-sm font-bold transition-transform group-hover:translate-x-1">
                Explore the shelf
                <ArrowRight size={16} />
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
}