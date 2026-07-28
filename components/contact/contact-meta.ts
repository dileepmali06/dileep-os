import { Handshake, MessageCircle, type LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import { HiOutlineSpeakerphone } from "react-icons/hi";

type ContactIcon = LucideIcon | IconType;

export const contactTypeConfig: Record<string, { label: string; icon: ContactIcon }> = {
  "hire-me": { label: "Hire Me", icon: HiOutlineSpeakerphone },
  freelance: { label: "Freelance Work", icon: Handshake },
  general: { label: "General Inquiry", icon: MessageCircle },
};

export const contactTypeOptions = Object.entries(contactTypeConfig).map(([value, meta]) => ({
  value,
  ...meta,
}));

export const priorityColors: Record<string, string> = {
  low: "var(--cream)",
  normal: "var(--blue)",
  high: "var(--yellow)",
  urgent: "var(--pink)",
};

export const statusColors: Record<string, string> = {
  new: "var(--blue)",
  won: "var(--green)",
  lost: "var(--pink)",
};