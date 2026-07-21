import { BookOpen, CheckCircle2, Clock3, XCircle, type LucideIcon } from "lucide-react";

export const statusConfig: Record<
  string,
  { label: string; icon: LucideIcon; color: string }
> = {
  planned: { label: "Planned", icon: Clock3, color: "var(--cream)" },
  reading: { label: "Reading", icon: BookOpen, color: "var(--blue)" },
  completed: { label: "Completed", icon: CheckCircle2, color: "var(--green)" },
  dropped: { label: "Dropped", icon: XCircle, color: "var(--pink)" },
};

export function getStatusMeta(status?: string) {
  return statusConfig[status ?? "planned"] ?? statusConfig.planned;
}

const spineColors = ["var(--blue)", "var(--pink)", "var(--green)", "var(--yellow)"];

export function spineColorFor(id: string) {
  let hash = 0;
  for (let i = 0; i < id.length; i++) hash = (hash + id.charCodeAt(i)) % spineColors.length;
  return spineColors[hash];
}

export function formatDate(date?: string) {
  if (!date) return null;
  return new Date(date).toLocaleDateString("en-US", { month: "short", year: "numeric" });
}