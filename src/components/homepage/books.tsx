import React from "react";
import BookCard from "../shere/bookCard";
import { IBook } from "../type/bookstype";
import { getBooks } from "@/lib/booksDate";

const BooksPage = async () => {
  const booksData = await getBooks();
  console.log(booksData);
  return (
    <section className="container mx-auto my-8 p6">
      <div className="grid justify-center">
        <h1 className="text-4xl font-bold text-center text-green-500  my-10 ">
          Books Popular
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {booksData.slice(0, 6).map((book: IBook, ind: number) => (
          <BookCard key={ind} book={book}></BookCard>
        ))}
      </div>
    </section>
  );
};

export default BooksPage;
