import LearningHero from "@/components/learning/learning-hero";
import LearningStats from "@/components/learning/learning-stats";
import FeaturedLearning from "@/components/learning/featured-learning";
import LearningTimeline from "@/components/learning/learning-timeline";

import {
  getAllLearningLogs,
  getFavoriteLearningLogs,
  getLearningStats,
} from "@/sanity/services/learning";
import { ContactCTA } from "@/components/sections/contact";

export const metadata = {
  title: "Learning Log",
  description:
    "A personal journal documenting my journey through DSA, Java, Spring Boot, Backend Engineering, System Design and modern software development.",
};

export default async function LearningPage() {
  const [logs, favoriteLogs, stats] = await Promise.all([
    getAllLearningLogs(),
    getFavoriteLearningLogs(),
    getLearningStats(),
  ]);

  const safeStats = {
    totalLogs: stats?.totalLogs ?? logs.length,
    favoriteLogs: stats?.favoriteLogs ?? favoriteLogs.length,
    totalCategories: stats?.totalCategories ?? 0,
    easy: stats?.easy ?? 0,
    medium: stats?.medium ?? 0,
    hard: stats?.hard ?? 0,
  };

  return (
    <main>
      <LearningHero
        totalLogs={safeStats.totalLogs}
        totalCategories={safeStats.totalCategories}
        favoriteLogs={safeStats.favoriteLogs}
      />

      <LearningStats stats={safeStats} />

      <FeaturedLearning logs={favoriteLogs} />

      <LearningTimeline logs={logs} />

      <ContactCTA />
    </main>
  );
}