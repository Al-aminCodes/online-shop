"use client";
import { BooksContext } from "@/contexts/BookContexts";

import React, { useContext } from "react";
import { IoCart } from "react-icons/io5";

const CartButton = () => {
  const { count } = useContext(BooksContext);

  return (
    <div className="mx-4">
      <button className="relative flex h-12 w-12 items-center justify-center rounded-full text-2xl text-white shadow-lg transition bg-slate-700">
        <IoCart />

        {/* Show count only when count > 0 */}
        {count > 0 && (
          <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-red-700 px-1 text-xs font-bold text-white">
            {count}
          </span>
        )}
      </button>
    </div>
  );
};

export default CartButton;
