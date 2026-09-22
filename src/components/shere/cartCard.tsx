"use client";

import React, { useContext } from "react";
import { IBook } from "../type/bookstype";
import { FiHeart, FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
import Image from "next/image";
import { BooksContext } from "@/contexts/BookContexts";
import { toast } from "react-toastify";

const CartCard = ({ book }: { book: IBook }) => {
  const { count, setCount, addToCart, setAddToCart, wishlist, setWishlist } =
    useContext(BooksContext);
  const isAddWish = wishlist.some(
    (isBook: IBook) => isBook.bookId === book.bookId,
  );
  const hendleRemove = () => {
    const deleteBook = addToCart.filter(
      (cartBook: IBook) => cartBook.bookId !== book.bookId,
    );
    setAddToCart(deleteBook);
    setCount(count - 1);
  };
  const hendelWishList = () => {
    if (isAddWish) {
      toast.error(`${book.bookName} already add wish List`);
      return;
    }
    setWishlist([...wishlist, book]);
    toast.success(`${book.bookName} is add to wish list`);
  };

  return (
    <div className="flex w-full items-center justify-between border-b border-slate-200 py-7">
      {/* Left Side */}
      <div className="flex items-center gap-5">
        {/* Book Image */}
        <div className="h-28 w-20 shrink-0 overflow-hidden rounded-md bg-slate-100">
          <Image
            src={book.image}
            alt={book.bookName}
            width={800}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Book Information */}
        <div className="min-w-0">
          <h3 className="max-w-md truncate text-base font-semibold text-slate-800">
            {book.bookName}
          </h3>

          <p className="mt-1 text-sm text-slate-500">by {book.author}</p>

          <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span className="rounded-full bg-slate-100 px-2 py-1">
              {book.category}
            </span>

            <span>•</span>

            <span>{book.publisher}</span>
          </div>

          {/* Quantity + Actions */}
          <div className="mt-4 flex items-center gap-4">
            {/* Quantity */}
            <div className="flex items-center gap-3">
              <button
                // onClick={onDecrease}
                // disabled={quantity <= 1}
                className="btn btn-circle btn-sm btn-outline border-slate-300 text-slate-500 hover:border-pink-500 hover:bg-pink-500 hover:text-white disabled:bg-white"
              >
                <FiMinus size={15} />
              </button>

              <span className="w-4 text-center font-semibold text-slate-700">
                {/* {quantity} */}
              </span>

              <button
                // onClick={onIncrease}
                className="btn btn-circle btn-sm btn-outline border-slate-300 text-slate-500 hover:border-pink-500 hover:bg-pink-500 hover:text-white"
              >
                <FiPlus size={15} />
              </button>
            </div>

            {/* Delete */}
            <button
              onClick={() => hendleRemove()}
              className="rounded-full p-2 text-slate-500 transition hover:bg-red-50 hover:text-red-500"
              title="Remove"
            >
              <FiTrash2 size={18} />
            </button>

            {/* Wishlist */}
            <button
              onClick={() => hendelWishList()}
              className="rounded-full p-2 text-slate-500 transition hover:bg-pink-50 hover:text-pink-500"
              title="Add to wishlist"
            >
              <FiHeart size={19} />
            </button>
          </div>
        </div>
      </div>

      {/* Right Side */}
      {/* <div className="hidden text-right sm:block">
        <p className="text-sm font-medium text-slate-500">Rating</p>

        <p className="mt-1 font-semibold text-slate-800">⭐ {book.rating}</p>

        <p className="mt-2 text-xs text-slate-400">{book.totalPages} pages</p>

        <p className="text-xs text-slate-400">{book.yearOfPublishing}</p>
      </div> */}
    </div>
  );
};

export default CartCard;
