"use client";

import CartCard from "@/components/shere/cartCard";
import { BooksContext } from "@/contexts/BookContexts";
import React, { useContext } from "react";

const Cart = () => {
  const { addToCart } = useContext(BooksContext);
  if (addToCart.length < 0) {
    return (
      <h2 className="container mx-auto text-4xl font-bold text-center">
        {" "}
        No books Adds
      </h2>
    );
  }

  return (
    <div className="container mx-auto m-10 border border-gray-300 p-10 rounded-2xl">
      {addToCart.length > 0 ? (
        addToCart.map((book) => (
          <CartCard key={book.bookId} book={book}></CartCard>
        ))
      ) : (
        <div className="border border-gray-300 rounded-2xl m-10">
          <h2 className="text-4xl font-bold text-center my-20">
            Products not Added{" "}
          </h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
