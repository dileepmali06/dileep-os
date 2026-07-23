import {
  Code2,
  Server,
  Layers,
  Briefcase,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export const typeConfig: Record<string, { label: string; icon: LucideIcon; color: string }> = {
  "software-engineer": { label: "Software Engineer", icon: Code2, color: "var(--blue)" },
  "backend-developer": { label: "Backend Developer", icon: Server, color: "var(--green)" },
  "full-stack-developer": { label: "Full Stack Developer", icon: Layers, color: "var(--pink)" },
  freelance: { label: "Freelance", icon: Briefcase, color: "var(--yellow)" },
  founder: { label: "Founder", icon: Rocket, color: "var(--orange, #fb923c)" },
};

export function getTypeMeta(type?: string) {
  return typeConfig[type ?? ""] ?? {
    label: type ?? "Resume",
    icon: Code2,
    color: "var(--cream)",
  };
}

export const experienceLabels: Record<string, string> = {
  fresher: "Fresher",
  junior: "Junior",
  "mid-level": "Mid Level",
  senior: "Senior",
};

export function formatDateTime(date?: string) {
  if (!date) return null;
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}