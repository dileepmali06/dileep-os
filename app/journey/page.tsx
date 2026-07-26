import { AchievementTimeline } from "@/components/journey/achievement-timeline";
import { CertificateTimeline } from "@/components/journey/certificate-timeline";
import { EducationTimeline } from "@/components/journey/education-timeline";
import { ExperienceTimeline } from "@/components/journey/experience-timeline";
import { FutureRoadmap } from "@/components/journey/future-roadmap";
import { JourneyHero } from "@/components/journey/journey-hero";
import { JourneyStats } from "@/components/journey/journey-stats";
import { TimelineHistory } from "@/components/journey/timeline-history";
import { ContactCTA } from "@/components/sections/contact";
import { getAchievements } from "@/sanity/services/achievement";
import { getCertificates } from "@/sanity/services/certificate";
import { getEducation } from "@/sanity/services/education";
import { getAllExperiences } from "@/sanity/services/experience";
import { getGoals } from "@/sanity/services/goal";
import { getTimeline } from "@/sanity/services/timeline";

export default async function JourneyPage() {
  const timeline = await getTimeline();
  const education = await getEducation();
  const experience = await getAllExperiences();
  const certificates = await getCertificates();
  const achievements = await getAchievements();
  const goals = await getGoals();

  const stats = {
    education: education.length,
    experience: experience.length,
    certificates: certificates.length,
    achievements: achievements.length,
    goals: goals.length,
    milestones: timeline.length,
  };

  return (
    <>
      <JourneyHero />
      <TimelineHistory timeline={timeline} />
      <EducationTimeline education={education} />
      <ExperienceTimeline experience={experience} />
      <CertificateTimeline certificates={certificates} />
      <AchievementTimeline achievements={achievements} />
      <FutureRoadmap goals={goals} />
      <JourneyStats stats={stats} />
      <ContactCTA />
    </>
  );
}