import { Trophy, Star, Award } from "lucide-react";

import { Container } from "@/components/ui/container";

const items = [
  {
    icon: Trophy,
    color: "var(--yellow)",
    title: "Wins",
    description: "Important milestones achieved along the way.",
  },
  {
    icon: Award,
    color: "var(--green)",
    title: "Growth",
    description: "Continuous improvement through learning and building.",
  },
  {
    icon: Star,
    color: "var(--pink)",
    title: "Future",
    description: "Many more milestones are still waiting ahead.",
  },
];

export function AchievementsHero() {
  return (
    <section className="section-padding overflow-hidden">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border-[3px] border-black bg-[var(--yellow)] px-5 py-2 font-mono text-sm font-bold shadow-[4px_4px_0px_#000]">
            <Trophy size={16} />
            ACHIEVEMENTS
          </div>

          <h1 className="mx-auto mt-8 max-w-3xl font-heading text-5xl font-black leading-tight md:text-7xl">
            Milestones,
            <br />
            wins & progress
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600 md:text-xl">
            A collection of milestones, accomplishments and memorable moments
            throughout my learning, engineering and personal journey.
          </p>

          <div className="mx-auto mt-14 grid max-w-4xl overflow-hidden rounded-[28px] border-[3px] border-black bg-white shadow-[8px_8px_0px_#000] sm:grid-cols-3">
            {items.map((item, index) => (
              <div
                key={item.title}
                className={`flex flex-col items-center gap-3 p-7 text-center sm:p-8 ${
                  index !== 0 ? "border-t-[3px] border-black sm:border-l-[3px] sm:border-t-0" : ""
                }`}
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-[3px] border-black"
                  style={{ background: item.color }}
                >
                  <item.icon size={22} />
                </div>

                <div>
                  <h3 className="font-heading text-2xl font-black">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}