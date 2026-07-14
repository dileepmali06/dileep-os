import { notFound } from "next/navigation";

import { getProjectBySlug } from "@/sanity/services/project";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectTechStack } from "@/components/projects/project-tech-stack";
import { ProjectLinks } from "@/components/projects/project-links";
import { ProjectChallenges } from "@/components/projects/project-challenges";
import { ProjectLearnings } from "@/components/projects/project-learnings";
import { ProjectGallery } from "@/components/projects/project-gallery";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectHero project={project} />
      <ProjectGallery project={project} />
      <ProjectTechStack project={project} />
      <ProjectLinks project={project} />
      <ProjectChallenges project={project} />
      <ProjectLearnings project={project} />
    </>
  );
}