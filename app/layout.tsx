import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Space_Grotesk,
} from "next/font/google";

import "./globals.css";
import { LayoutWrapper } from "@/components/layout/layout-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dileepmali.me"),

  title: {
    default: "Dileep OS — Software Engineer, Builder & Lifelong Learner",
    template: "%s | Dileep OS",
  },

  description:
    "Personal operating system of Dileep Mali — MERN Stack Developer exploring Java, DSA, System Design and Full Stack Engineering in public. Projects, notes, experiments, and the journey of becoming a better software engineer.",

  keywords: [
    "Dileep Mali",
    "Dileep OS",
    "Software Engineer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Java Developer",
    "DSA Journey",
    "System Design",
    "Next.js Portfolio",
    "React Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "Problem Solving",
    "Developer Portfolio",
  ],

  authors: [
    {
      name: "Dileep Mali",
    },
  ],

  creator: "Dileep Mali",

  openGraph: {
    title: "Dileep OS",
    description:
      "Building in public while evolving from MERN Developer to Software Engineer.",
    type: "website",
    locale: "en_US",
    siteName: "Dileep OS",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dileep OS",
    description:
      "Projects, learning logs, DSA journey, Java notes and software engineering experiments.",
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${spaceGrotesk.variable}
      `}
    >
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}