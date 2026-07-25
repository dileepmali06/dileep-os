import {
  Briefcase,
  Clock3,
  FileSignature,
  Handshake,
  GraduationCap,
  Rocket,
  Building2,
  Home,
  Blend,
  type LucideIcon,
} from "lucide-react";

export const employmentTypeConfig: Record<string, { label: string; icon: LucideIcon; color: string }> = {
  "full-time": { label: "Full Time", icon: Briefcase, color: "var(--blue)" },
  "part-time": { label: "Part Time", icon: Clock3, color: "var(--green)" },
  contract: { label: "Contract", icon: FileSignature, color: "var(--yellow)" },
  freelance: { label: "Freelance", icon: Handshake, color: "var(--pink)" },
  internship: { label: "Internship", icon: GraduationCap, color: "var(--cream)" },
  founder: { label: "Founder", icon: Rocket, color: "var(--orange, #fb923c)" },
};

export function getEmploymentMeta(type?: string) {
  return employmentTypeConfig[type ?? ""] ?? {
    label: type ?? "Role",
    icon: Briefcase,
    color: "var(--cream)",
  };
}

export const workModeConfig: Record<string, { label: string; icon: LucideIcon }> = {
  onsite: { label: "On-site", icon: Building2 },
  remote: { label: "Remote", icon: Home },
  hybrid: { label: "Hybrid", icon: Blend },
};

export function getWorkModeMeta(mode?: string) {
  return workModeConfig[mode ?? ""] ?? null;
}

export function formatMonthYear(date?: string) {
  if (!date) return null;
  return new Date(date).toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function formatDateRange(start?: string, end?: string, current?: boolean) {
  const startLabel = formatMonthYear(start) ?? "—";
  const endLabel = current ? "Present" : formatMonthYear(end) ?? "—";
  return `${startLabel} – ${endLabel}`;
}