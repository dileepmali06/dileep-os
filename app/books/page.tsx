import BookHero from "@/components/books/book-hero";
import Bookshelf from "@/components/books/bookshelf";
import CurrentlyReading from "@/components/books/currently-reading";
import FeaturedBooks from "@/components/books/featured-books";
import ReadingStats from "@/components/books/reading-stats";
import { ContactCTA } from "@/components/sections/contact";
import { FEATURED_BOOKS_QUERY } from "@/sanity/queries/book";
import {
  getAllBooks,
  getBookStats,
  getFeaturedBooks,
  getCurrentlyReadingBooks,
} from "@/sanity/services/book";


export default async function BooksPage() {
  const [books, stats, featured, reading] = await Promise.all([
    getAllBooks(),
    getBookStats(),
    getFeaturedBooks(),
    getCurrentlyReadingBooks(),
  ]);

  return (
    <main>
      <BookHero
        totalBooks={stats.totalBooks}
        completedBooks={stats.completedBooks}
        currentlyReading={stats.currentlyReading}
      />
      <ReadingStats stats={stats} />
      <CurrentlyReading books={reading} />
      <FeaturedBooks books={featured} />
      <Bookshelf books={books} />
      <ContactCTA />
    </main>
  );
}