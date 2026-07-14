import { getProjects } from "@/sanity/services/project";

// import { ProjectsGrid } from "@/components/projects/projects-grid";


export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
    Project page Welcome
    </>
    // <ProjectsGrid
    //   projects={projects}
    // />
  );
}