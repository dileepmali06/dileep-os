import { AboutPreview } from "@/components/sections/about";
import { Achievements } from "@/components/sections/achievements";
import { LatestBlogs } from "@/components/sections/blogs";
import { ContactCTA } from "@/components/sections/contact";
import { FeaturedRepositories } from "@/components/sections/featured_repo";
import { Hero } from "@/components/sections/hero";
import { LearningJourney } from "@/components/sections/learning";
import { NowSection } from "@/components/sections/now";
import { FeaturedProjects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { Timeline } from "@/components/sections/timeline";
import { UsesSection } from "@/components/sections/uses";
import { getAbout } from "@/sanity/services/about";
import { getFeaturedAchievements } from "@/sanity/services/achievement";
import { getFeaturedProjects } from "@/sanity/services/featuredProjects";
import { getHomepageSettings } from "@/sanity/services/homepage";
import { getNowSection } from "@/sanity/services/now";
import { getFeaturedRepositories } from "@/sanity/services/repository";
import { getSkills } from "@/sanity/services/skills";
import { getStats } from "@/sanity/services/stats";

export default async function Home() {

  const homepage = await getHomepageSettings();
  const stats = await getStats();
  const now = await getNowSection();
  const achievements = await getFeaturedAchievements();
  const about = await getAbout();
  const skills = await getSkills();
  const featuredProjects = await getFeaturedProjects();
  const repositories = await getFeaturedRepositories();


  return (
    <>
      <Hero data={homepage} />
      <Stats data={stats} />
      <NowSection data={now} />
      <Achievements data={achievements} />
      <AboutPreview data={about} />
      <Skills data={skills} />
      <FeaturedProjects data={featuredProjects} />
      <FeaturedRepositories data={repositories} />
      <UsesSection />
      <LearningJourney />
      <Timeline />
      <LatestBlogs />
      <Testimonials />
      {/* <ContactCTA /> */}

    </>
  );
}