import Link from "next/link";

import {
  Trophy,
  CalendarDays,
  Star,
  ExternalLink,
} from "lucide-react";

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

interface AchievementCardProps {
  achievement: Achievement;
}

export function AchievementCard({
  achievement,
}: AchievementCardProps) {
  return (
    <div className="group h-full rounded-[28px] border-[4px] border-black bg-white p-8 shadow-[10px_10px_0px_#000] transition-all duration-300 hover:-translate-y-2 hover:shadow-[14px_14px_0px_#000]">

      <div className="flex items-start justify-between gap-4">

        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-[3px] border-black bg-[var(--yellow)]">
          <Trophy size={28} />
        </div>

        {achievement.featured && (
          <div className="flex items-center gap-1 rounded-full border-[2px] border-black bg-[var(--green)] px-3 py-1 text-xs font-bold">
            <Star size={12} />
            Featured
          </div>
        )}

      </div>

      {achievement.category && (
        <div className="mt-6 inline-flex rounded-full border-[2px] border-black bg-neutral-100 px-3 py-1 text-xs font-bold uppercase tracking-wide">
          {achievement.category}
        </div>
      )}

      <h3 className="mt-5 font-heading text-3xl font-black leading-tight">
        {achievement.title}
      </h3>

      {achievement.description && (
        <p className="mt-4 line-clamp-4 leading-relaxed text-neutral-600">
          {achievement.description}
        </p>
      )}

      {achievement.metric && (
        <div className="mt-6 rounded-2xl border-[3px] border-black bg-[var(--pink)] p-4 text-center shadow-[4px_4px_0px_#000]">
          <div className="font-heading text-4xl font-black">
            {achievement.metric}
          </div>

          <div className="mt-1 text-xs font-bold uppercase tracking-wider">
            Achievement Metric
          </div>
        </div>
      )}

      {achievement.skills?.length ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {achievement.skills
            .slice(0, 4)
            .map((skill) => (
              <span
                key={skill}
                className="rounded-full border-[2px] border-black bg-neutral-100 px-3 py-1 text-xs font-semibold"
              >
                {skill}
              </span>
            ))}
        </div>
      ) : null}

      <div className="mt-8 flex items-center justify-between gap-4">

        {achievement.achievementDate && (
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <CalendarDays size={15} />

            {new Date(
              achievement.achievementDate
            ).toLocaleDateString(
              "en-US",
              {
                month: "short",
                year: "numeric",
              }
            )}
          </div>
        )}

        <div className="flex gap-3">

          {achievement.proofUrl && (
            <Button
              size="sm"
              variant="outline"
            >
              <a
                href={achievement.proofUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Proof
                <ExternalLink
                  size={14}
                  className="ml-1"
                />
              </a>
            </Button>
          )}

          {achievement.slug?.current && (
            <Button
              size="sm"
            >
              <Link
                href={`/achievements/${achievement.slug.current}`}
              >
                Details
              </Link>
            </Button>
          )}

        </div>

      </div>

    </div>
  );
}