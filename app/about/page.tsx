import { AboutHero } from "@/components/about/about-hero";
import { AboutStory } from "@/components/about/about-story";
import { AboutFocus } from "@/components/about/about-focus";
import { ExperienceSection } from "@/components/about/experience-section";
import { EducationSection } from "@/components/about/education-section";
import { CertificatesSection } from "@/components/about/certificates-section";
import { CoursesSection } from "@/components/about/courses-section";
import { CoreValuesSection } from "@/components/about/core-values";
import { FunFacts } from "@/components/about/fun-facts";
import { ContactCTA } from "@/components/sections/contact";

import { getAbout } from "@/sanity/services/about";
import { getFeaturedExperiences } from "@/sanity/services/experience";
import { getEducation } from "@/sanity/services/education";
import { getCertificates } from "@/sanity/services/certificate";
import { getCourses } from "@/sanity/services/course";
import { getCoreValues } from "@/sanity/services/core-value";
import { getFunFacts } from "@/sanity/services/fun-fact";

export default async function AboutPage() {
  const [
    about,
    experience,
    education,
    certificates,
    courses,
    coreValues,
    funFacts
  ] = await Promise.all([
    getAbout(),
    getFeaturedExperiences(),
    getEducation(),
    getCertificates(),
    getCourses(),
    getCoreValues(),
    getFunFacts(),
  ]);

  return (
    <>
      <AboutHero data={about} />
      <AboutStory data={about} />
      
      <AboutFocus data={about} />
      
      <ExperienceSection data={experience} />
      
      <EducationSection data={education} />
      <CertificatesSection data={certificates} />
      <CoursesSection data={courses} />
      
      <CoreValuesSection data={coreValues} />
      <FunFacts data={funFacts} />
      <ContactCTA />
    </>
  );
}
