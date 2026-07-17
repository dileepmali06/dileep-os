import {
  Trophy,
  CalendarDays,
  Star,
  ExternalLink,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";

interface Achievement {
  _id: string;

  title: string;

  slug?: {
    current: string;
  };

  category?: string;

  description?: string;

  achievementDate?: string;

  metric?: string;

  skills?: string[];

  proofUrl?: string;

  featured?: boolean;
}

interface AchievementTimelineProps {
  achievements: Achievement[];
}

export function AchievementTimeline({
  achievements,
}: AchievementTimelineProps) {
  if (!achievements.length) {
    return null;
  }

  return (
    <section className="section-padding bg-neutral-50">
      <Container>

        <SectionHeading
          eyebrow="Achievements"
          title="Milestones & Achievements"
          description="Important moments that marked progress in my learning and engineering journey."
          align="center"
        />

        <div className="mx-auto mt-16 max-w-5xl space-y-8">

          {achievements.map(
            (achievement) => (
              <div
                key={achievement._id}
                className="rounded-[28px] border-[4px] border-black bg-white p-8 shadow-[10px_10px_0px_#000]"
              >

                <div className="flex flex-wrap items-start justify-between gap-6">

                  <div className="flex gap-5">

                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-[3px] border-black bg-[var(--yellow)]">
                      <Trophy size={28} />
                    </div>

                    <div>

                      <div className="flex flex-wrap items-center gap-3">

                        <h3 className="font-heading text-3xl font-black">
                          {achievement.title}
                        </h3>

                        {achievement.featured && (
                          <span className="flex items-center gap-1 rounded-full border-[2px] border-black bg-[var(--green)] px-3 py-1 text-xs font-bold">
                            <Star size={12} />
                            Featured
                          </span>
                        )}

                      </div>

                      {achievement.category && (
                        <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-neutral-500">
                          {achievement.category}
                        </p>
                      )}

                      {achievement.achievementDate && (
                        <div className="mt-3 flex items-center gap-2 text-sm text-neutral-500">
                          <CalendarDays size={15} />

                          {new Date(
                            achievement.achievementDate
                          ).toLocaleDateString(
                            "en-US",
                            {
                              month: "long",
                              year: "numeric",
                            }
                          )}
                        </div>
                      )}

                    </div>

                  </div>

                  {achievement.metric && (
                    <div className="rounded-2xl border-[3px] border-black bg-[var(--pink)] px-6 py-4 text-center shadow-[4px_4px_0px_#000]">
                      <p className="font-heading text-3xl font-black">
                        {achievement.metric}
                      </p>

                      <p className="text-xs uppercase tracking-wide">
                        Metric
                      </p>
                    </div>
                  )}

                </div>

                {achievement.description && (
                  <p className="mt-8 leading-relaxed text-neutral-600">
                    {achievement.description}
                  </p>
                )}

                {achievement.skills?.length ? (
                  <div className="mt-8 flex flex-wrap gap-3">

                    {achievement.skills.map(
                      (skill) => (
                        <span
                          key={skill}
                          className="rounded-full border-[2px] border-black bg-neutral-100 px-4 py-2 text-sm font-semibold"
                        >
                          {skill}
                        </span>
                      )
                    )}

                  </div>
                ) : null}

                {achievement.proofUrl && (
                  <div className="mt-8">
                    <Button
                      variant="outline"
                    >
                      <a
                        href={
                          achievement.proofUrl
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Proof

                        <ExternalLink
                          size={16}
                          className="ml-2"
                        />
                      </a>
                    </Button>
                  </div>
                )}

              </div>
            )
          )}

        </div>

      </Container>
    </section>
  );
}