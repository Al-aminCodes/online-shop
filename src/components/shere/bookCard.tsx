import Image from "next/image";
import { IBook } from "../type/bookstype";
import Link from "next/link";
export interface IBookProb {
  book: IBook;
}

const BookCard = ({ book }: IBookProb) => {
  return (
    <div className="group w-full max-w-65 overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl">
      {/* Image */}
      <div className="relative flex h-52 items-center justify-center overflow-hidden rounded-xl bg-slate-100">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          sizes="(max-width: 768px) 50vw, 260px"
          className="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
        />

        {/* Rating */}
        <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold shadow-sm">
          {book.rating}
        </div>
      </div>

      {/* Tags */}
      <div className="mt-3 flex gap-1.5">
        {book.tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-medium text-emerald-600"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Book Info */}
      <div className="mt-2">
        <h2 className="truncate text-base font-bold text-slate-800">
          {book.bookName}
        </h2>

        <p className="mt-1 truncate text-xs text-slate-500">By {book.author}</p>
      </div>

      {/* Meta */}
      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
        <span className="text-xs font-medium text-slate-500">
          {book.category}
        </span>

        <span className="text-xs text-slate-400">{book.totalPages} pages</span>
      </div>

      {/* Buttons */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        <button
          type="button"
          className="flex items-center justify-center gap-1.5 rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white transition hover:bg-slate-700"
        >
          Add
        </button>

        <Link
          href={`/books/${book.bookId}`}
          className="flex items-center justify-center rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
