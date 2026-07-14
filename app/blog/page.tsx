import { BlogsGrid } from "@/components/blog/blog-grid";
import { getBlogs } from "@/sanity/services/blog";

export default async function BlogPage() {
  const blogs = await getBlogs();

  return <BlogsGrid blogs={blogs} />;
}