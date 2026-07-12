import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { AboutPreview } from "@/components/sections/about";
import { ContactCTA } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { LearningJourney } from "@/components/sections/learning";
import { FeaturedProjects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Stats } from "@/components/sections/stats";
import { Timeline } from "@/components/sections/timeline";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <AboutPreview />
      <Skills />
      <FeaturedProjects />
      <LearningJourney />
      <Timeline />
      <ContactCTA />
      <Footer/>

    </>
  );
}