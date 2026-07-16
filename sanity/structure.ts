import type { StructureResolver } from "sanity/structure";

import {
  Settings,
  User,
  Home,
  Clock,
  Wrench,
  FolderGit2,
  FileText,
  Brain,
  Coffee,
  Award,
  GraduationCap,
  Briefcase,
  BookOpen,
  History,
  MessageSquare,
  PenSquare,
  Package,
  Trophy,
  Target,
  LayoutDashboard,
  TrendingUp,
  NotebookPen,
  GitPullRequest,
  LibraryBig,
  FileUser,
  MessageCircleMore,
  CalendarDays,
  Code2,
  Rocket,
  Cpu,
  Folder,
  Users,
  Heart,
  Sparkles,
} from "lucide-react";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Dilip OS")
    .items([
      // =====================================================
      // CORE CONFIGURATION
      // =====================================================

      S.listItem()
        .title("Core Configuration")
        .icon(Settings)
        .child(
          S.list()
            .title("Core Configuration")
            .items([
              S.listItem()
                .title("Site Settings")
                .icon(Settings)
                .child(
                  S.document()
                    .schemaType("siteSettings")
                    .documentId("siteSettings")
                ),

              S.listItem()
                .title("Homepage Settings")
                .icon(Home)
                .child(
                  S.document()
                    .schemaType("homepageSettings")
                    .documentId("homepageSettings")
                ),

              S.listItem()
                .title("About")
                .icon(User)
                .child(
                  S.document()
                    .schemaType("about")
                    .documentId("about")
                ),

              S.listItem()
                .title("Stats Dashboard")
                .icon(LayoutDashboard)
                .child(
                  S.document()
                    .schemaType("stats")
                    .documentId("stats")
                ),

              S.listItem()
                .title("Now")
                .icon(Clock)
                .child(
                  S.document()
                    .schemaType("now")
                    .documentId("now")
                ),

              S.listItem()
                .title("Uses")
                .icon(Wrench)
                .child(
                  S.document()
                    .schemaType("uses")
                    .documentId("uses")
                ),

              S.listItem()
                .title("Skills")
                .icon(Code2)
                .child(
                  S.document()
                    .schemaType("skills")
                    .documentId("skills")
                ),
            ])
        ),

      // =====================================================
      // CAREER & PERSONAL BRAND
      // =====================================================

      S.listItem()
        .title("Career & Personal Brand")
        .icon(Rocket)
        .child(
          S.list()
            .title("Career & Personal Brand")
            .items([
              S.documentTypeListItem("education")
                .title("Education")
                .icon(GraduationCap),

              S.documentTypeListItem("experience")
                .title("Experience")
                .icon(Briefcase),

              S.documentTypeListItem("achievement")
                .title("Achievements")
                .icon(Trophy),

              S.documentTypeListItem("goal")
                .title("Goals & Roadmap")
                .icon(Target),

              S.documentTypeListItem("certificate")
                .title("Certificates")
                .icon(Award),

              S.documentTypeListItem("course")
                .title("Courses")
                .icon(BookOpen),

              S.documentTypeListItem("coreValue")
                .title("Core Values")
                .icon(Heart),

              S.documentTypeListItem("funFact")
                .title("Fun Facts")
                .icon(Sparkles),

              S.documentTypeListItem("resumeVersion")
                .title("Resume Versions")
                .icon(FileUser),

              S.documentTypeListItem("recommendation")
                .title("Recommendations")
                .icon(MessageCircleMore),
            ])
        ),

      // =====================================================
      // LEARNING JOURNEY
      // =====================================================

      S.listItem()
        .title("Learning Journey")
        .icon(Cpu)
        .child(
          S.list()
            .title("Learning Journey")
            .items([
              S.documentTypeListItem("stackEvolution")
                .title("Stack Evolution")
                .icon(TrendingUp),

              S.documentTypeListItem("learningLog")
                .title("Learning Log")
                .icon(NotebookPen),

              S.documentTypeListItem("dsaProblem")
                .title("DSA Problems")
                .icon(Brain),

              S.documentTypeListItem("javaSnippet")
                .title("Java Snippets")
                .icon(Coffee),

              S.documentTypeListItem("book")
                .title("Books")
                .icon(BookOpen),

              S.documentTypeListItem("readingList")
                .title("Reading List")
                .icon(LibraryBig),

              S.documentTypeListItem("timeline")
                .title("Timeline")
                .icon(History),
            ])
        ),

      // =====================================================
      // BUILDING & ENGINEERING
      // =====================================================

      S.listItem()
        .title("Building & Engineering")
        .icon(Folder)
        .child(
          S.list()
            .title("Building & Engineering")
            .items([
              S.documentTypeListItem("project")
                .title("Projects")
                .icon(FolderGit2),

              S.documentTypeListItem("featuredRepo")
                .title("Featured Repositories")
                .icon(FolderGit2),

              S.documentTypeListItem("openSource")
                .title("Open Source")
                .icon(GitPullRequest),

              S.documentTypeListItem("changelog")
                .title("Changelog")
                .icon(Package),
            ])
        ),

      // =====================================================
      // CONTENT & COMMUNITY
      // =====================================================

      S.listItem()
        .title("Content & Community")
        .icon(Users)
        .child(
          S.list()
            .title("Content & Community")
            .items([
              S.documentTypeListItem("blog")
                .title("Blogs")
                .icon(FileText),

              S.documentTypeListItem("testimonial")
                .title("Testimonials")
                .icon(MessageSquare),

              S.documentTypeListItem("guestbook")
                .title("Guestbook")
                .icon(PenSquare),

              S.documentTypeListItem("event")
                .title("Events")
                .icon(CalendarDays),
            ])
        ),
    ]);