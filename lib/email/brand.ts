
export const BRAND = {
  green: "#7ED957",
  blue: "#5B8DEF",
  pink: "#FF6FA5",
  yellow: "#FFD23F",
  cream: "#FAF7F0",
} as const;


export const contactTypeLabels: Record<string, string> = {
  "hire-me": "💼 Hire Me",
  freelance: "🤝 Freelance Work",
  general: "💬 General Inquiry",
};

export const contactTypeAccent: Record<string, string> = {
  "hire-me": BRAND.yellow,
  freelance: BRAND.blue,
  general: BRAND.cream,
};