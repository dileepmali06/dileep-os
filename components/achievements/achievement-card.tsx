import Link from "next/link";
import { Trophy, CalendarDays, Star, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Achievement {
  _id: string;
  title: string;
  slug?: { current: string };
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

export function AchievementCard({ achievement }: AchievementCardProps) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border-[3px] border-black bg-white shadow-[8px_8px_0px_#000] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[11px_11px_0px_#000]">
      {/* corner seal */}
      {achievement.featured && (
        <div className="absolute -right-8 top-4 z-10 w-32 rotate-45 border-y-2 border-black bg-[var(--green)] py-1 text-center">
          <span className="flex items-center justify-center gap-1 text-[10px] font-bold uppercase">
            <Star size={10} className="fill-black" />
            Featured
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-[3px] border-black bg-[var(--yellow)]">
            <Trophy size={20} />
          </div>
          {achievement.category && (
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-neutral-400">
              {achievement.category}
            </span>
          )}
        </div>

        <h3 className="mt-4 font-heading text-2xl font-black leading-tight">
          {achievement.title}
        </h3>

        {achievement.description && (
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-neutral-600">
            {achievement.description}
          </p>
        )}

        {/* engraved nameplate */}
        {achievement.metric && (
          <div className="mt-5 rounded-xl border-[3px] border-black bg-[var(--pink)] px-4 py-3 text-center">
            <div className="rounded-lg border-2 border-dashed border-black/30 py-2">
              <p className="font-heading text-3xl font-black">
                {achievement.metric}
              </p>
              <p className="mt-0.5 text-[10px] font-bold uppercase tracking-widest">
                Record
              </p>
            </div>
          </div>
        )}

        {achievement.skills && achievement.skills.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-1.5">
            {achievement.skills.slice(0, 4).map((skill) => (
              <span
                key={skill}
                className="rounded-full border-[2px] border-black/20 bg-neutral-50 px-2.5 py-0.5 text-xs font-medium text-neutral-600"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex items-center justify-between gap-3 pt-6">
          {achievement.achievementDate && (
            <span className="flex items-center gap-1.5 text-xs text-neutral-500">
              <CalendarDays size={13} />
              {new Date(achievement.achievementDate).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              })}
            </span>
          )}

          <div className="flex gap-2">
            {achievement.proofUrl && (
              <Button size="sm" variant="outline" >
                <a
                  href={achievement.proofUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  Proof
                  <ExternalLink size={13} />
                </a>
              </Button>
            )}

            {/* {achievement.slug?.current && (
              <Button size="sm" >
                <Link href={`/achievements/${achievement.slug.current}`}>
                  Details
                </Link>
              </Button>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}