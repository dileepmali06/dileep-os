import {
  Binary,
  Coffee,
  Leaf,
  Network,
  Server,
  LayoutGrid,
  Cloud,
  Database,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

export const categoryMeta: Record<
  string,
  { label: string; icon: LucideIcon; color: string }
> = {
  dsa: { label: "DSA", icon: Binary, color: "var(--pink)" },
  java: { label: "Java", icon: Coffee, color: "var(--orange, #fb923c)" },
  springboot: { label: "Spring Boot", icon: Leaf, color: "var(--green)" },
  "system-design": { label: "System Design", icon: Network, color: "var(--blue)" },
  backend: { label: "Backend", icon: Server, color: "var(--yellow)" },
  frontend: { label: "Frontend", icon: LayoutGrid, color: "var(--pink)" },
  devops: { label: "DevOps", icon: Cloud, color: "var(--blue)" },
  database: { label: "Database", icon: Database, color: "var(--green)" },
  career: { label: "Career", icon: Briefcase, color: "var(--yellow)" },
  default: { label: "Learning", icon: Binary, color: "var(--cream)" },
};

export const difficultyStyles: Record<string, string> = {
  easy: "bg-green-300",
  medium: "bg-yellow-300",
  hard: "bg-red-300",
};

export function getCategoryMeta(category?: string) {
  return categoryMeta[category ?? "default"] ?? categoryMeta.default;
}