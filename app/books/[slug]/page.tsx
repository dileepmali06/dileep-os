import { notFound } from "next/navigation";

import { getBookBySlug, getRelatedBooks } from "@/sanity/services/book";
import BookDescription from "@/components/books/detail/book-description";
import BookDetailHero from "@/components/books/detail/book-detail-hero";
import BookInformation from "@/components/books/detail/book-information";
import ReadingNotes from "@/components/books/detail/reading-notes";
import PurchaseLinks from "@/components/books/detail/purchase-links";
import RelatedBooks from "@/components/books/detail/related-books";
import BookNavigation from "@/components/books/detail/book-navigation";
import KeyTakeaways from "@/components/books/detail/key-takeaways";



type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const book = await getBookBySlug(slug);

  if (!book) {
    return { title: "Book not found" };
  }

  return {
    title: `${book.title} | Books`,
    description: book.description,
  };
}

export default async function BookDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const book = await getBookBySlug(slug);

  if (!book) {
    notFound();
  }

  const primaryGenre = book.genres?.[0];
  const relatedBooks = primaryGenre ? await getRelatedBooks(primaryGenre, book._id) : [];

  return (
    <main>
      <BookDetailHero book={book} />
      <BookDescription description={book.description} />
      <BookInformation book={book} />
      <KeyTakeaways keyTakeaways={book.keyTakeaways} />
      <ReadingNotes notes={book.notes} />
      <PurchaseLinks
        purchaseLink={book.purchaseLink}
        goodreadsLink={book.goodreadsLink}
        officialLink={book.officialLink}
      />
      <RelatedBooks books={relatedBooks} />
      <BookNavigation genre={primaryGenre} />
    </main>
  );
}