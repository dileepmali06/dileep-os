import type { Image } from "sanity";

export interface SanityImageValue extends Image {
  alt?: string;
}

export interface ProjectListItem {
  _id: string;
  title: string;
  slug: string;
  shortDescription?: string;
  coverImage?: SanityImageValue;
  techStack?: string[];
  featured?: boolean;
  status?: "completed" | "in-progress" | "archived";
  year?: number;
  projectType?: "personal" | "client" | "open-source";
  category?: string;
  role?: string;
  duration?: string;
  teamSize?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Metric {
  label: string;
  value: string;
}

export interface Project extends ProjectListItem {
  description?: string;
  gallery?: SanityImageValue[];
  demoVideo?: string;
  clientName?: string;
  figmaUrl?: string;
  challenges?: string[];
  learnings?: string[];
  metrics?: Metric[];
  ogImage?: SanityImageValue;
  order?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface ProjectStats {
  totalProjects: number;
  featuredProjects: number;
  completedProjects: number;
  inProgressProjects: number;
  archivedProjects: number;
  personalProjects: number;
  clientProjects: number;
  openSourceProjects: number;
  totalTechnologies: number;
}

export const BRAND_COLORS = [
  "var(--green)",
  "var(--blue)",
  "var(--pink)",
  "var(--yellow)",
];

export function colorForIndex(index: number) {
  return BRAND_COLORS[index % BRAND_COLORS.length];
}

export const STATUS_META: Record<
  NonNullable<ProjectListItem["status"]>,
  { label: string; color: string }
> = {
  completed: { label: "Completed", color: "var(--green)" },
  "in-progress": { label: "In progress", color: "var(--yellow)" },
  archived: { label: "Archived", color: "var(--pink)" },
};

export const TYPE_META: Record<
  NonNullable<ProjectListItem["projectType"]>,
  { label: string }
> = {
  personal: { label: "Personal" },
  client: { label: "Client" },
  "open-source": { label: "Open source" },
};