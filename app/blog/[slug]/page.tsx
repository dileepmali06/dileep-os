import { notFound } from "next/navigation";

import { getBlogBySlug } from "@/sanity/services/blog";

import { BlogHero } from "@/components/blog/blog-hero";
import { BlogContent } from "@/components/blog/blog-content";
import { RelatedBlogs } from "@/components/blog/related-blogs";
import { BlogTags } from "@/components/blog/blog-tags";
import { ReadingProgress } from "@/components/blog/reading-progress";
import { urlFor } from "@/sanity/lib/image";
import { Metadata } from "next";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}


export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Dilip OS",
    };
  }

  const image =
    blog.coverImage
      ? urlFor(blog.coverImage).width(1200).height(630).url()
      : "/og-image.png";

  return {
    title: `${blog.title} | Dilip OS`,
    description: blog.excerpt,

    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      url: `https://yourdomain.com/blog/${slug}`,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [image],
    },

    alternates: {
      canonical: `https://yourdomain.com/blog/${slug}`,
    },
  };
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