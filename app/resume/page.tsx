import ResumeHero from "@/components/resume/resume-hero";
import ResumeStats from "@/components/resume/resume-stats";
import PrimaryResume from "@/components/resume/primary-resume";
import FeaturedResumes from "@/components/resume/featured-resumes";
import ResumeList from "@/components/resume/resume-list";
import ResumeTimeline from "@/components/resume/resume-timeline";
import { ContactCTA } from "@/components/sections/contact";

import {
  getAllResumes,
  getFeaturedResumes,
  getPrimaryResume,
  getResumeStats,
} from "@/sanity/services/resume";

export const metadata = {
  title: "Resume",
  description:
    "Browse and download different versions of my resume tailored for Software Engineering, Backend Development, Full Stack Development, Freelancing, and Founder roles.",
};

export default async function ResumePage() {
  const [resumes, featuredResumes, primaryResume, stats] = await Promise.all([
    getAllResumes(),
    getFeaturedResumes(),
    getPrimaryResume(),
    getResumeStats(),
  ]);

  const safeStats = {
    totalResumes: stats?.totalResumes ?? resumes.length,
    featuredResumes: stats?.featuredResumes ?? featuredResumes.length,
    atsFriendlyResumes: stats?.atsFriendlyResumes ?? 0,
    primaryResumes: stats?.primaryResumes ?? (primaryResume ? 1 : 0),
  };

  return (
    <main>
      <ResumeHero
        totalResumes={safeStats.totalResumes}
        featuredResumes={safeStats.featuredResumes}
        atsFriendlyResumes={safeStats.atsFriendlyResumes}
        primaryResume={primaryResume}
      />

      <ResumeStats stats={safeStats} />

      {primaryResume && <PrimaryResume resume={primaryResume} />}

      <FeaturedResumes resumes={featuredResumes} />

      <ResumeTimeline resumes={resumes} />    
    
      <ResumeList resumes={resumes} />

      <ContactCTA />
    </main>
  );
}