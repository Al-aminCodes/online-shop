import BookCard from "@/components/shere/bookCard";
import { IBook } from "@/components/type/bookstype";

const getBooks = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Data fetching fills", error);
    return [];
  }
};

const page = async () => {
  const booksData = await getBooks();
  console.log(booksData);
  return (
    <section className="container mx-auto my-8 p6">
      <h1>Books Popular</h1>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {booksData.map((book: IBook, ind: number) => (
          <BookCard key={ind} book={book}></BookCard>
        ))}
      </div>
    </section>
  );
};

export default page;
