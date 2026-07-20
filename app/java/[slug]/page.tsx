import { notFound } from "next/navigation";

import {
    getJavaNavigation,
    getJavaSnippetBySlug,
    getRelatedJavaSnippets,
} from "@/sanity/services/java";
import JavaSnippetHero from "@/components/java/snippet-hero";
import JavaSnippetInfo from "@/components/java/snippet-info";
import JavaTags from "@/components/java/snippet-tags";
import RelatedJavaSnippets from "@/components/java/related-snippets";
import SnippetCode from "@/components/java/snippet-code";
import SnippetNavigation from "@/components/java/snippet-navigation";


type PageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateMetadata({
    params,
}: PageProps) {
    const { slug } = await params;

    const snippet = await getJavaSnippetBySlug(slug);

    if (!snippet) {
        return {
            title: "Snippet Not Found",
        };
    }

    return {
        title: `${snippet.title} | Java Snippets`,
        description: snippet.description,
    };
}

export default async function JavaSnippetPage({
    params,
}: PageProps) {
    const { slug } = await params;

    const snippet = await getJavaSnippetBySlug(slug);

    if (!snippet) {
        notFound();
    }

    const relatedSnippets =
        await getRelatedJavaSnippets(
            snippet.category,
            slug
        );

    const navigation =
        await getJavaNavigation(
            snippet.order
        );

    return (
        <main className="pb-20">
            <JavaSnippetHero
                snippet={snippet}
            />

            <JavaSnippetInfo
                snippet={snippet}
            />

            <SnippetCode
                snippet={snippet}
            />

            <JavaTags
                tags={snippet.tags}
            />

            <SnippetNavigation
                previous={navigation.previous}
                next={navigation.next}
            />

            <RelatedJavaSnippets
                snippets={relatedSnippets}
            />
        </main>
    );
}