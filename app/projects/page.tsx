import { ProjectsGrid } from "@/components/projects/projects-grid";
import { getProjects } from "@/sanity/services/project";

export default async function ProjectsPage() {
  const project = await getProjects();

  return <ProjectsGrid project={project} />;
}