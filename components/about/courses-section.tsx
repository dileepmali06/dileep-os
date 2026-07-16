import Image from "next/image";
import Link from "next/link";

import {
  Calendar,
  User,
  ExternalLink,
  CheckCircle2,
  Clock3,
  BookOpen,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/badge";

import { urlFor } from "@/sanity/lib/image";

interface Course {
  _id: string;

  title: string;

  platform: string;

  instructor?: string;

  status: string;

  progress?: number;

  startDate?: string;

  completionDate?: string;

  courseUrl?: string;

  skills?: string[];

  notes?: unknown[];

  thumbnail?: { asset?: { _ref?: string } } | null;
}

interface CoursesSectionProps {
  data: Course[];
}

export function CoursesSection({
  data,
}: CoursesSectionProps) {

  if (!data?.length) {
    return null;
  }

  const getStatusColor = (
    status: string
  ) => {
    switch (status) {
      case "completed":
        return "bg-[var(--green)]";

      case "in-progress":
        return "bg-[var(--yellow)]";

      default:
        return "bg-neutral-200";
    }
  };

  const getStatusText = (
    status: string
  ) => {
    switch (status) {
      case "completed":
        return "Completed";

      case "in-progress":
        return "In Progress";

      default:
        return "Planned";
    }
  };

  return (
    <section className="section-padding">
      <Container>

        <SectionHeading
          eyebrow="Courses"
          title="Learning Through Courses"
          description="Courses, tutorials and structured learning paths that helped shape my engineering journey."
          align="center"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {data.map((course) => (
            <div
              key={course._id}
              className="overflow-hidden rounded-2xl border-[3px] border-black bg-white shadow-[8px_8px_0px_#000]"
            >

              {/* Thumbnail */}
              <div className="relative aspect-video border-b-[3px] border-black bg-neutral-100">

                {course.thumbnail ? (
                  <Image
                    src={urlFor(
                      course.thumbnail
                    ).url()}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-neutral-400">
                    <BookOpen size={40} />
                  </div>
                )}

              </div>

              <div className="p-6">

                <div
                  className={`inline-flex rounded-full border-[2px] border-black px-3 py-1 text-xs font-bold ${getStatusColor(
                    course.status
                  )}`}
                >
                  {getStatusText(
                    course.status
                  )}
                </div>

                <h3 className="mt-4 font-heading text-2xl font-black">
                  {course.title}
                </h3>

                <div className="mt-4 space-y-2 text-sm text-neutral-600">

                  <div className="flex items-center gap-2">
                    <BookOpen size={15} />
                    {course.platform}
                  </div>

                  {course.instructor && (
                    <div className="flex items-center gap-2">
                      <User size={15} />
                      {course.instructor}
                    </div>
                  )}

                  {course.startDate && (
                    <div className="flex items-center gap-2">
                      <Calendar size={15} />
                      Started: {course.startDate}
                    </div>
                  )}

                  {course.completionDate && (
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} />
                      Completed: {course.completionDate}
                    </div>
                  )}

                </div>

                {course.progress !== undefined && (
                  <div className="mt-6">

                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2">
                        <Clock3 size={15} />
                        Progress
                      </span>

                      <span>
                        {course.progress}%
                      </span>
                    </div>

                    <div className="h-3 overflow-hidden rounded-full border-[2px] border-black bg-neutral-200">
                      <div
                        className="h-full bg-black transition-all duration-500"
                        style={{
                          width: `${course.progress}%`,
                        }}
                      />
                    </div>

                  </div>
                )}

                {course.skills &&
                  course.skills.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {course.skills.map(
                      (skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                        >
                          {skill}
                        </Badge>
                      )
                    )}
                  </div>
                )}

                {course.courseUrl && (
                  <Link
                    href={course.courseUrl}
                    target="_blank"
                    className="mt-6 inline-flex items-center gap-2 font-semibold hover:underline"
                  >
                    View Course
                    <ExternalLink
                      size={16}
                    />
                  </Link>
                )}

              </div>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}