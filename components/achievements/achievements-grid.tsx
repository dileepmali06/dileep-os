"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { AchievementCard } from "./achievement-card";
import { AchievementSearch } from "./achievements-search";
import { AchievementFilters } from "./achievements-filters";
import { AchievementSort } from "./achievements-sort";

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

interface AchievementsGridProps {
  achievements: Achievement[];
}

export function AchievementsGrid({ achievements }: AchievementsGridProps) {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  const categories = useMemo(
    () => [
      "All",
      ...Array.from(
        new Set(achievements.map((item) => item.category).filter(Boolean) as string[])
      ),
    ],
    [achievements]
  );

  const filteredAchievements = useMemo(() => {
    const query = search.toLowerCase();

    const filtered = achievements.filter((item) => {
      const titleMatch = item.title?.toLowerCase().includes(query);
      const descriptionMatch = item.description?.toLowerCase().includes(query);
      const skillMatch = item.skills?.some((skill) => skill.toLowerCase().includes(query));
      const filterMatch = activeFilter === "All" ? true : item.category === activeFilter;

      return (titleMatch || descriptionMatch || skillMatch) && filterMatch;
    });

    switch (sortBy) {
      case "oldest":
        return [...filtered].sort(
          (a, b) =>
            new Date(a.achievementDate || "").getTime() -
            new Date(b.achievementDate || "").getTime()
        );
      case "featured":
        return [...filtered].sort((a, b) => Number(b.featured) - Number(a.featured));
      case "metric":
        return [...filtered].sort(
          (a, b) => parseFloat(b.metric || "0") - parseFloat(a.metric || "0")
        );
      case "title":
        return [...filtered].sort((a, b) => a.title.localeCompare(b.title));
      case "newest":
      default:
        return [...filtered].sort(
          (a, b) =>
            new Date(b.achievementDate || "").getTime() -
            new Date(a.achievementDate || "").getTime()
        );
    }
  }, [achievements, search, activeFilter, sortBy]);

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones & Wins"
          description="A collection of accomplishments throughout my journey."
          align="center"
        />

        {/* toolbar */}
        <div className="mx-auto mt-12 max-w-5xl rounded-2xl border-[3px] border-black bg-white p-5 shadow-[6px_6px_0px_#000]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="lg:w-72">
              <AchievementSearch value={search} onChange={setSearch} />
            </div>
            <div className="flex-1">
              <AchievementFilters
                categories={categories}
                activeFilter={activeFilter}
                onChange={setActiveFilter}
              />
            </div>
            <AchievementSort value={sortBy} onChange={setSortBy} />
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-neutral-500">
          Showing <span className="font-bold text-black">{filteredAchievements.length}</span>{" "}
          achievements
        </div>

        {filteredAchievements.length === 0 && (
          <div className="mt-10 rounded-[28px] border-[4px] border-dashed border-black/30 p-16 text-center">
            <h3 className="font-heading text-3xl font-black">No Achievements Found</h3>
            <p className="mt-4 text-neutral-500">Try another search term or filter.</p>
          </div>
        )}

        {filteredAchievements.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          >
            {filteredAchievements.map((achievement, index) => (
              <motion.div
                key={achievement._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <AchievementCard achievement={achievement} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </Container>
    </section>
  );
}