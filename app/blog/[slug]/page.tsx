import { notFound } from "next/navigation";

import { getBlogBySlug } from "@/sanity/services/blog";

import { BlogHero } from "@/components/blog/blog-hero";
import { BlogContent } from "@/components/blog/blog-content";
import { RelatedBlogs } from "@/components/blog/related-blogs";
import { BlogTags } from "@/components/blog/blog-tags";
import { ReadingProgress } from "@/components/blog/reading-progress";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailsPage({ params }: Props) {
  const { slug } = await params;

  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <ReadingProgress />
      <BlogHero blog={blog} />
      <BlogContent blog={blog} />
      <BlogTags tags={blog.tags || []} />
      <RelatedBlogs currentBlogId={blog._id} category={blog.category} />
    </>
  );
}