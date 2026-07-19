import { getDSAProblems, getDSAStats } from "@/sanity/services/dsa";

import DSAHero from "@/components/dsa/dsa-hero";
import DSAStats from "@/components/dsa/dsa-stats";
import DSAGrid from "@/components/dsa/dsa-grid";
import DSAProgress from "@/components/dsa/dsa-progress";
import DSARoadmap from "@/components/dsa/dsa-roadmap";
import { ContactCTA } from "@/components/sections/contact";

export const metadata = {
  title: "DSA Journey",
  description:
    "Track my Data Structures and Algorithms journey with solved problems, learning notes, Java solutions, complexity analysis, and progress across multiple coding platforms.",
};

export default async function DSAPage() {
  const [problems, stats] = await Promise.all([
    getDSAProblems(),
    getDSAStats(),
  ]);

  return (
    <>
      <DSAHero
        totalProblems={stats.totalProblems}
        totalTopics={stats.totalTopics}
        totalPlatforms={stats.totalPlatforms}
      />
      <DSAStats stats={stats} />
      <DSAGrid problems={problems} />
      <DSAProgress stats={stats} />
      <DSARoadmap />
      <ContactCTA />
    </>
  );
}