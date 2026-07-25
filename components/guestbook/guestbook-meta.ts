import { Globe, MessageSquare, type LucideIcon } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa";


type AppIcon = LucideIcon | IconType;

export const sourceConfig: Record<
  string,
  {
    label: string;
    icon: AppIcon;
  }
> = {
  portfolio: {
    label: "Portfolio",
    icon: Globe,
  },
  github: {
    label: "GitHub",
    icon: FaGithub,
  },
  linkedin: {
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  direct: {
    label: "Direct",
    icon: MessageSquare,
  },
};

export function getSourceMeta(source?: string) {
  return sourceConfig[source ?? "direct"] ?? sourceConfig.direct;
}

const avatarColors = [
  "var(--blue)",
  "var(--pink)",
  "var(--green)",
  "var(--yellow)",
];

export function avatarColorFor(id: string) {
  let hash = 0;

  for (let i = 0; i < id.length; i++) {
    hash = (hash + id.charCodeAt(i)) % avatarColors.length;
  }

  return avatarColors[hash];
}

export function formatCreatedAt(date?: string) {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}