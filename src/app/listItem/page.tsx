"use client";

import ListBookCard from "@/components/shere/listBookCard";
import { IBook } from "@/components/type/bookstype";
import { BooksContext } from "@/contexts/BookContexts";
import { useContext, useState } from "react";

const Page = () => {
  const { readBooks, wishlist } = useContext(BooksContext);
  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");

  const sortBooks = (books: IBook[]) => {
    const sortedBooks = [...books];

    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortBy === "year") {
      sortedBooks.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
    }

    return sortedBooks;
  };
  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishlist = sortBooks(wishlist);

  return (
    <div className="container mx-auto py-5">
      <h2 className="my-7 bg-gray-200 rounded-2xl py-16 font-bold text-4xl text-center">
        Books
      </h2>
      <div className="flex justify-center m-5 ">
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "rating" | "pages" | "year")
          }
          className="select select-success"
        >
          <option disabled={true}>Sort by</option>
          <option value={"rating"}>Rating</option>
          <option value={"pages"}>Number of pages</option>
          <option value={"year"}>Publisher year</option>
        </select>
      </div>
      <div>
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-lift">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label={`Read List (${readBooks.length})`}
            defaultChecked
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            {sortedReadBooks.length > 0 ? (
              sortedReadBooks.map((book) => (
                <ListBookCard key={book.bookId} book={book}></ListBookCard>
              ))
            ) : (
              <p className="text-3xl text-center font-bold">
                Read books are empty
              </p>
            )}
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label={`Wish List (${wishlist.length})`}
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            {sortedWishlist.length > 0 ? (
              sortedWishlist.map((book) => (
                <ListBookCard key={book.bookId} book={book}></ListBookCard>
              ))
            ) : (
              <p className="text-3xl text-center font-bold">
                Wish list books are empty
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
