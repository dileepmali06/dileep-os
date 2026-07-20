import { notFound } from "next/navigation";

import LearningDetailHero from "@/components/learning/detail/learning-detail-hero";
import LearningContent from "@/components/learning/detail/learning-content";
import KeyTakeaways from "@/components/learning/detail/key-takeaways";
import Resources from "@/components/learning/detail/resources";
import FeaturedLearning from "@/components/learning/featured-learning";

import {
  getLearningLogBySlug,
  getPreviousNextLearningLogs,
  getRelatedLearningLogs,
} from "@/sanity/services/learning";
import LearningNavigation from "@/components/learning/detail/learning-navigation";
import RelatedLearning from "@/components/learning/detail/related-learning";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  const log = await getLearningLogBySlug(slug);

  if (!log) {
    return {
      title: "Learning Not Found",
    };
  }

  return {
    title: `${log.title} | Learning Log`,
    description: log.summary,
  };
}

export default async function LearningDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const log = await getLearningLogBySlug(slug);

  if (!log) {
    notFound();
  }

  const { previousLog, nextLog } = await getPreviousNextLearningLogs(log.date);
  const relatedLogs = await getRelatedLearningLogs(log.category, log._id);

  return (
    <main>
      <LearningDetailHero log={log} />

      <LearningContent summary={log.summary} />

      <KeyTakeaways
        keyTakeaways={log.keyTakeaways}
      />

      <Resources
        resources={log.resources}
      />

      {relatedLogs?.length > 0 && (
        <FeaturedLearning logs={relatedLogs} />
      )}

      <LearningNavigation previousLog={previousLog} nextLog={nextLog} />

      <RelatedLearning logs={relatedLogs} />
    </main>
  );
}