import {
    getAllJavaSnippets,
    getFeaturedJavaSnippets,
    getJavaStats,
} from "@/sanity/services/java";

import JavaHero from "@/components/java/java-hero";
import JavaStats from "@/components/java/java-stats";
import FeaturedSnippets from "@/components/java/featured-snippets";
import JavaGrid from "@/components/java/java-grid";
import { ContactCTA } from "@/components/sections/contact";

export const metadata = {
    title: "Java Snippets | Dileep OS",
    description:
        "Production-ready Java snippets, interview-ready examples, collections, streams, OOP, DSA utilities and more.",
};

export default async function JavaPage() {
    const [snippets, featuredSnippets, stats] = await Promise.all([
        getAllJavaSnippets(),
        getFeaturedJavaSnippets(),
        getJavaStats(),
    ]);

    return (
        <main className="pb-20">
            <JavaHero
                totalSnippets={stats.totalSnippets}
                totalCategories={stats.totalCategories}
                featuredSnippets={stats.featuredSnippets}
            />
            <JavaStats stats={stats} />
            <FeaturedSnippets snippets={featuredSnippets} />
            <JavaGrid
                snippets={snippets}
            />
            <ContactCTA />
        </main>
    );
}