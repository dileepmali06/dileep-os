import { notFound } from "next/navigation";

import {
  getDSAProblemBySlug,
  getPreviousNextDSAProblems,
  getRelatedDSAProblems,
} from "@/sanity/services/dsa";

import ProblemHero from "@/components/dsa/listing/problem-hero";
import ProblemApproach from "@/components/dsa/listing/problem-approach";
import ProblemSolution from "@/components/dsa/listing/problem-solution";
import ComplexityCard from "@/components/dsa/listing/complexity-card";
import KeyLearning from "@/components/dsa/listing/key-learning";
import NavigationCard from "@/components/dsa/listing/navigation-card";
import RelatedProblems from "@/components/dsa/listing/related-problems";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const problem = await getDSAProblemBySlug(slug);

  if (!problem) {
    return {
      title: "Problem not found",
    };
  }

  return {
    title: `${problem.title} | DSA`,
    description: problem.keyLearning,
  };
}

export async function generateStaticParams() {
  return [];
}

export default async function DSAProblemPage({ params }: PageProps) {
  const { slug } = await params;
  const problem = await getDSAProblemBySlug(slug);

  if (!problem) {
    notFound();
  }

  const { previousProblem, nextProblem } = await getPreviousNextDSAProblems(
    problem.solvedAt
  );
  const relatedProblems = await getRelatedDSAProblems(problem);

  return (
    <main>
      <ProblemHero problem={problem} />

      <ProblemApproach
        bruteForceApproach={problem.bruteForceApproach}
        optimalApproach={problem.optimalApproach}
      />

      <ProblemSolution javaSolution={problem.javaSolution} />

      <ComplexityCard
        timeComplexity={problem.timeComplexity}
        spaceComplexity={problem.spaceComplexity}
      />

      <KeyLearning keyLearning={problem.keyLearning} />

      <NavigationCard
        previousProblem={previousProblem}
        nextProblem={nextProblem}
      />

      <RelatedProblems problems={relatedProblems} />
    </main>
  );
}