import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { urlFor } from "@/sanity/lib/image";

import { ProjectDetailHero } from "@/components/projects/detail/project-detail-hero";
import { ProjectGallery } from "@/components/projects/detail/project-gallery";
import { ProjectContent } from "@/components/projects/detail/project-content";
import { TechStack } from "@/components/projects/detail/tech-stack";
import { ProjectLinks } from "@/components/projects/detail/project-links";
import { Challenges } from "@/components/projects/detail/challenges";
import { Learnings } from "@/components/projects/detail/learnings";
import { RelatedProjects } from "@/components/projects/detail/related-projects";
import { ProjectNavigation } from "@/components/projects/detail/project-navigation";

import {
  getProject,
  getProjects,
  getRelatedProjects,
} from "@/sanity/services/project";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((project: { slug: string }) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = await getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: project.ogImage
        ? [urlFor(project.ogImage).width(1200).height(630).url()]
        : undefined,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = project.category
    ? await getRelatedProjects(project.category, project.slug)
    : [];

  return (
    <>
      <ProjectDetailHero project={project} />

      <ProjectLinks
        githubUrl={project.githubUrl}
        liveUrl={project.liveUrl}
        figmaUrl={project.figmaUrl}
      />

      <ProjectGallery
        gallery={project.gallery}
        demoVideo={project.demoVideo}
      />

      <ProjectContent description={project.description} />

      <TechStack techStack={project.techStack} />

      <Challenges challenges={project.challenges} />

      <Learnings learnings={project.learnings} />

      <RelatedProjects projects={relatedProjects} />

      <ProjectNavigation />
    </>
  );
}