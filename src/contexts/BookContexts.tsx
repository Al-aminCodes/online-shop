"use client";

import { IBook } from "@/components/type/bookstype";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface IBookContext {
  readBooks: IBook[];
  setReadBooks: Dispatch<SetStateAction<IBook[]>>;
  wishlist: IBook[];
  setWishlist: Dispatch<SetStateAction<IBook[]>>;
  addToCart: IBook[];
  setAddToCart: Dispatch<SetStateAction<IBook[]>>;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}
export const BooksContext = createContext<IBookContext>({
  readBooks: [],
  setReadBooks: () => {},
  wishlist: [],
  setWishlist: () => {},
  addToCart: [],
  setAddToCart: () => {},
  count: 0,
  setCount: () => {},
});

const BookProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<IBook[]>([]);
  const [wishlist, setWishlist] = useState<IBook[]>([]);
  const [addToCart, setAddToCart] = useState<IBook[]>([]);
  const [count, setCount] = useState(0);
  const shareData = {
    readBooks,
    setReadBooks,
    wishlist,
    setWishlist,
    addToCart,
    setAddToCart,
    count,
    setCount,
  };
  return (
    <BooksContext.Provider value={shareData}> {children}</BooksContext.Provider>
  );
};

export default BookProvider;
