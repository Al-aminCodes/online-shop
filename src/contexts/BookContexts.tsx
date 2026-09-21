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
}
export const BooksContext = createContext<IBookContext>({
  readBooks: [],
  setReadBooks: () => {},
  wishlist: [],
  setWishlist: () => {},
});

const BookProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<IBook[]>([]);
  const [wishlist, setWishlist] = useState<IBook[]>([]);
  const shareData = {
    readBooks,
    setReadBooks,
    wishlist,
    setWishlist,
  };
  return (
    <BooksContext.Provider value={shareData}> {children}</BooksContext.Provider>
  );
};

export default BookProvider;
