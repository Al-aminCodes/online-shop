import Image from "next/image";
import Link from "next/link";

import { IBook } from "../type/bookstype";

import DeleteButton from "./deleteList";

const ListBookCard = ({ book }: { book: IBook }) => {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg">
      <div className="flex gap-5">
        {/* Book Image */}
        <div className="relative h-36 w-28 shrink-0 overflow-hidden rounded-xl bg-slate-100">
          <Image
            src={book.image}
            alt={book.bookName}
            fill
            sizes="112px"
            className="object-contain p-3 transition duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          {/* Title + Delete */}
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h2 className="truncate text-lg font-bold text-slate-800">
                {book.bookName}
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                By{" "}
                <span className="font-medium text-slate-700">
                  {book.author}
                </span>
              </p>
            </div>

            {/* Delete */}
            <DeleteButton book={book}></DeleteButton>
          </div>

          {/* Tags + Year */}
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-semibold text-slate-700">Tags</span>

            {book.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-emerald-50 px-2.5 py-1 font-medium text-emerald-600"
              >
                #{tag}
              </span>
            ))}

            <span className="hidden text-slate-300 sm:inline">•</span>

            <span className="text-slate-500">
              Year:{" "}
              <span className="font-medium text-slate-700">
                {book.yearOfPublishing}
              </span>
            </span>
          </div>

          {/* Publisher + Pages */}
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-slate-500">
            <span>
              Publisher:{" "}
              <span className="font-medium text-slate-700">
                {book.publisher}
              </span>
            </span>

            <span>
              Pages:{" "}
              <span className="font-medium text-slate-700">
                {book.totalPages}
              </span>
            </span>
          </div>

          {/* Divider */}
          <div className="my-3 border-t border-slate-100" />

          {/* Bottom */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-600">
              {book.category}
            </span>

            <span className="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-600">
              ★ {book.rating}
            </span>

            <Link
              href={`/books/${book.bookId}`}
              className="rounded-full bg-slate-900 px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-indigo-600"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListBookCard;
