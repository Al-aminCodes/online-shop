"use client";
import BookCard from "@/components/shere/bookCard";
import { BooksContext } from "@/contexts/BookContexts";
import { useContext } from "react";

const Page = () => {
  const books = useContext(BooksContext);
  return <div>disply you wish list books</div>;
};

export default Page;
