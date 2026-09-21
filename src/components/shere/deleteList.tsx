"use client";

import React, { useContext } from "react";
import { FiTrash2 } from "react-icons/fi";
import { IBook } from "../type/bookstype";
import { BooksContext } from "@/contexts/BookContexts";

const DeleteButton = ({ book }: { book: IBook }) => {
  const { readBooks, wishlist, setReadBooks, setWishlist } =
    useContext(BooksContext);
  const onDelete = () => {
    const removeReadBook = readBooks.filter(
      (books) => books.bookId !== book.bookId,
    );
    setReadBooks(removeReadBook);
    const removeWishList = wishlist.filter(
      (books) => books.bookId !== book.bookId,
    );
    setWishlist(removeWishList);
  };
  return (
    <button
      type="button"
      onClick={() => onDelete()}
      aria-label={`Delete ${book.bookName}`}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-400 transition-all duration-200 hover:border-red-100 hover:bg-red-50 hover:text-red-500"
    >
      <FiTrash2 size={16} />
    </button>
  );
};

export default DeleteButton;
