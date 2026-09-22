"use client";

import { BooksContext } from "@/contexts/BookContexts";
import React, { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IBook } from "../type/bookstype";
import { toast } from "react-toastify";

const AddtoCard = ({ book }: { book: IBook }) => {
  const { addToCart, setAddToCart, count, setCount } = useContext(BooksContext);
  const isAdd = addToCart.some((id) => id.bookId === book.bookId);
  const handleAddToCart = () => {
    // const newAdd =
    if (isAdd) {
      toast.info(`${book.bookName} alraedy added`);
      return;
    }
    setCount(count + 1);
    const newAdd = [...addToCart, book];
    setAddToCart(newAdd);
    toast.success(`${book.bookName} add to cart`);
  };
  console.log(addToCart);
  return (
    <button
      onClick={handleAddToCart}
      className="
    btn
    bg-linear-to-r from-violet-600 to-indigo-600
    hover:from-violet-700 hover:to-indigo-700
    border-none
    text-white
    rounded-xl
    px-6
    h-12
    min-h-12
    font-semibold
    shadow-md
    hover:shadow-lg
    transition-all
    duration-300
    hover:-translate-y-0.5
    gap-2
  "
    >
      <FiShoppingCart className="text-lg" />
      Add to Cart
    </button>
  );
};

export default AddtoCard;
