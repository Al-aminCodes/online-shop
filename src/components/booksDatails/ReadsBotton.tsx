"use client";

import { useContext } from "react";
import { IBook } from "../type/bookstype";
import { BooksContext } from "@/contexts/BookContexts";
import { Bounce, toast } from "react-toastify";

const ReadsBotton = ({ book }: { book: IBook }) => {
  const bookProvider = useContext(BooksContext);
  const { readBooks, setReadBooks } = bookProvider;
  const isAddRead = readBooks.some((id) => id.bookId === book.bookId);
  const heandelReadBook = () => {
    if (isAddRead) {
      toast.error(`${book.bookName} already add ReadList`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    const newBooks = [...readBooks, book];
    setReadBooks(newBooks);
    toast.success(`${book.bookName} add Read list`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  return (
    <button
      type="button"
      className="flex-1 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
      onClick={() => heandelReadBook()}
    >
      Read Book
    </button>
  );
};

export default ReadsBotton;
