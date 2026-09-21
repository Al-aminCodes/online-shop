import ReadsBotton from "@/components/booksDatails/ReadsBotton";
import WishlistButton from "@/components/booksDatails/WishlistButton";
import { IBook } from "@/components/type/bookstype";
import Image from "next/image";
import Link from "next/link";

interface IBookDatailsPros {
  params: Promise<{ bookId: string }>;
}
const getBooks = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Data fetching fills", error);
    return [];
  }
};

const BookDatails = async ({ params }: IBookDatailsPros) => {
  const { bookId } = await params;
  const booksData = await getBooks();
  const book = booksData.find(
    (book: IBook) => String(book.bookId) === String(bookId),
  );

  if (!book) {
    return <div>Book not found</div>;
  }
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        {/* Back */}
        <Link
          href="/"
          className="mb-6 inline-block text-sm font-medium text-slate-500 hover:text-slate-900"
        >
          ← Back to Books
        </Link>

        {/* Main Card */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
          <div className="grid md:grid-cols-2">
            {/* Book Image */}
            <div className="relative flex min-h-125 items-center justify-center overflow-hidden bg-slate-100 p-8">
              {/* Background decoration */}
              <div className="absolute h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />

              <div className="relative h-107.5 w-72.5">
                <Image
                  src={book.image}
                  alt={book.bookName}
                  fill
                  priority
                  sizes="(max-width: 768px) 80vw, 400px"
                  className="object-contain drop-shadow-2xl transition duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Book Information */}
            <div className="p-6 md:p-10">
              {/* Category */}
              <span className="inline-block rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600">
                {book.category}
              </span>

              {/* Title */}
              <h1 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
                {book.bookName}
              </h1>

              {/* Author */}
              <p className="mt-3 text-sm text-slate-500">
                By{" "}
                <span className="font-semibold text-slate-700">
                  {book.author}
                </span>
              </p>

              {/* Rating */}
              <div className="mt-5 flex items-center gap-3">
                <span className="rounded-full bg-yellow-50 px-3 py-1.5 text-sm font-semibold text-yellow-600">
                  ★ {book.rating}
                </span>

                <span className="text-sm text-slate-400">
                  {book.totalPages} Pages
                </span>
              </div>

              {/* Divider */}
              <div className="my-7 border-t border-slate-100" />

              {/* Review */}
              <div>
                <h2 className="mb-2 text-base font-bold text-slate-800">
                  About this book
                </h2>

                <p className="line-clamp-5 text-sm leading-7 text-slate-500">
                  {book.review}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-6">
                <p className="mb-3 text-sm font-semibold text-slate-800">
                  Tags
                </p>

                <div className="flex flex-wrap gap-2">
                  {book.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Book Information */}
              <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-slate-100 py-6">
                <div>
                  <p className="text-xs text-slate-400">Pages</p>
                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    {book.totalPages}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Publisher</p>
                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    {book.publisher}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Published</p>
                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    {book.yearOfPublishing}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Book ID</p>
                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    #{book.bookId}
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-7 flex gap-3">
                <ReadsBotton book={book} />
                <WishlistButton book={book}></WishlistButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookDatails;
