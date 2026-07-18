import {
  Trophy,
  Star,
  Award,
} from "lucide-react";

import { Container } from "@/components/ui/container";

export function AchievementsHero() {
  return (
    <section className="section-padding overflow-hidden">
      <Container>

        <div className="mx-auto max-w-5xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border-[3px] border-black bg-[var(--yellow)] px-5 py-2 font-mono text-sm font-bold shadow-[4px_4px_0px_#000]">
            <Trophy size={16} />
            ACHIEVEMENTS
          </div>

          <h1 className="mt-8 font-heading text-5xl font-black leading-tight md:text-7xl">
            Milestones,
            <br />
            Wins & Progress
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-neutral-600 md:text-xl">
            A collection of milestones, accomplishments and memorable moments
            throughout my learning, engineering and personal journey.
          </p>

          <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-3">

            <div className="rounded-[24px] border-[4px] border-black bg-white p-8 shadow-[8px_8px_0px_#000]">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border-[3px] border-black bg-[var(--yellow)]">
                <Trophy size={28} />
              </div>

              <h3 className="mt-6 font-heading text-4xl font-black">
                Wins
              </h3>

              <p className="mt-2 text-neutral-500">
                Important milestones achieved along the way.
              </p>
            </div>

            <div className="rounded-[24px] border-[4px] border-black bg-white p-8 shadow-[8px_8px_0px_#000]">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border-[3px] border-black bg-[var(--green)]">
                <Award size={28} />
              </div>

              <h3 className="mt-6 font-heading text-4xl font-black">
                Growth
              </h3>

              <p className="mt-2 text-neutral-500">
                Continuous improvement through learning and building.
              </p>
            </div>

            <div className="rounded-[24px] border-[4px] border-black bg-white p-8 shadow-[8px_8px_0px_#000]">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border-[3px] border-black bg-[var(--pink)]">
                <Star size={28} />
              </div>

              <h3 className="mt-6 font-heading text-4xl font-black">
                Future
              </h3>

              <p className="mt-2 text-neutral-500">
                Many more milestones are still waiting ahead.
              </p>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}