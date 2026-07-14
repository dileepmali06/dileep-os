import { getBlogs } from "@/sanity/services/blog";
import { Container } from "@/components/ui/container";
import { BlogCard } from "@/components/blog/blog-card";

interface Props {
  currentBlogId: string;
  category?: string;
}

export async function RelatedBlogs({ currentBlogId, category }: Props) {
  const allBlogs = await getBlogs();

  const related = allBlogs
    .filter(
      (blog: any) =>
        blog._id !== currentBlogId &&
        (category ? blog.category === category : true)
    )
    .slice(0, 3);

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="pb-24">
      <Container>
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-3xl font-black sm:text-4xl">
            More Articles
          </h2>
          <p className="mt-2 text-neutral-500">
            Keep exploring — a few more posts you might like.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {related.map((blog: any) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}