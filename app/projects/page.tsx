
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectStats } from "@/components/projects/project-stats";
import { FeaturedProjects } from "@/components/projects/featured-projects";
import { ProjectList } from "@/components/projects/project-list";
import { getFeaturedProjects, getProjects, getProjectStats } from "@/sanity/services/project";
import { ContactCTA } from "@/components/sections/contact";

export const revalidate = 60;

export default async function ProjectsPage() {
  const [projects, featuredProjects, stats] = await Promise.all([
    getProjects(),
    getFeaturedProjects(),
    getProjectStats(),
  ]);

  return (
    <>
      <ProjectHero
        totalProjects={stats?.totalProjects ?? 0}
        liveProjects={stats?.liveProjects ?? 0}
        featuredProjects={stats?.featuredProjects ?? 0}
        totalTechnologies={stats?.totalTechnologies ?? 0}
      />
      <ProjectStats stats={stats} />
      <FeaturedProjects projects={featuredProjects} />
      <ProjectList projects={projects} />
      <ContactCTA />
    </>
  );
}