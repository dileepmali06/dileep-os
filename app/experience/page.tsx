import ExperienceHero from "@/components/experience/experience-hero";
import ExperienceStats from "@/components/experience/experience-stats";
import CurrentExperience from "@/components/experience/current-experience";
import FeaturedExperience from "@/components/experience/featured-experience";
import ExperienceList from "@/components/experience/experience-list";

import {
  getAllExperiences,
  getExperienceStats,
  getCurrentExperience,
  getFeaturedExperiences,
} from "@/sanity/services/experience";

export const metadata = {
  title: "Experience",
  description: "Every role, contract and founding effort that shaped how I build software.",
};

export default async function ExperiencePage() {
  const [experiences, stats, currentExperience, featuredExperiences] = await Promise.all([
    getAllExperiences(),
    getExperienceStats(),
    getCurrentExperience(),
    getFeaturedExperiences(),
  ]);

  const safeStats = {
    totalExperiences: stats?.totalExperiences ?? experiences.length,
    featuredExperiences: stats?.featuredExperiences ?? featuredExperiences.length,
    currentExperiences: stats?.currentExperiences ?? (currentExperience ? 1 : 0),
    remoteExperiences: stats?.remoteExperiences ?? 0,
  };

  return (
    <main>
      <ExperienceHero
        totalExperiences={safeStats.totalExperiences}
        featuredExperiences={safeStats.featuredExperiences}
        remoteExperiences={safeStats.remoteExperiences}
      />

      <ExperienceStats stats={safeStats} />

      <CurrentExperience experience={currentExperience} />

      <FeaturedExperience experiences={featuredExperiences} />

      <ExperienceList experiences={experiences} />
    </main>
  );
}