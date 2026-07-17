import { AboutFocus } from "@/components/about/about-focus";
import { AboutHero } from "@/components/about/about-hero";
import { AboutStory } from "@/components/about/about-story";
import { CertificatesSection } from "@/components/about/certificates-section";
import { CoreValuesSection } from "@/components/about/core-values";
import { CoursesSection } from "@/components/about/courses-section";
import { EducationSection } from "@/components/about/education-section";
import { ExperienceSection } from "@/components/about/experience-section";
import { FunFacts } from "@/components/about/fun-facts";
import { ContactCTA } from "@/components/sections/contact";
import { getAbout } from "@/sanity/services/about";
import { getCertificates } from "@/sanity/services/certificate";
import { getCoreValues } from "@/sanity/services/core-value";
import { getCourses } from "@/sanity/services/course";
import { getEducation } from "@/sanity/services/education";
import { getExperience } from "@/sanity/services/experience";
import { getFunFacts } from "@/sanity/services/fun-fact";

export default async function AboutPage() {
  const about = await getAbout();
  const education = await getEducation();
  const experience = await getExperience();
  const certificates = await getCertificates();
  const courses = await getCourses();
  const coreValues = await getCoreValues();
  const funFacts = await getFunFacts();

  return (
    <>
      <AboutHero data={about} />
      <AboutStory data={about} />
      <AboutFocus data={about} />
      <EducationSection data={education} />
      <ExperienceSection data={experience} />
      <CertificatesSection data={certificates} />
      <CoursesSection data={courses} />
      <CoreValuesSection data={coreValues} />
      <FunFacts data={funFacts} />
      <ContactCTA />
    </>
  );
}