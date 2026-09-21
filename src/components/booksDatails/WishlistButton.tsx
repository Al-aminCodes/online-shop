"use client";
import { BooksContext } from "@/contexts/BookContexts";
import React, { useContext } from "react";
import { Bounce, toast } from "react-toastify";
import { IBook } from "../type/bookstype";

const WishlistButton = ({ book }: { book: IBook }) => {
  const bookProvider = useContext(BooksContext);
  const { wishlist, setWishlist } = bookProvider;
  const isAddWish = wishlist.some((id) => id.bookId === book.bookId);
  const heandelWishBooks = () => {
    if (isAddWish) {
      toast.error(`${book.bookName} already add Wish list`, {
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
    const newBooks = [...wishlist, book];
    setWishlist(newBooks);
    toast.success(`${book.bookName} add Read Wish List`, {
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
      className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
      onClick={() => heandelWishBooks()}
    >
      ♡ Wishlist
    </button>
  );
};

export default WishlistButton;
