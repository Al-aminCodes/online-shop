export const getBooks = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
      { cache: "force-cache" },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Data fetching fills", error);
    return [];
  }
};
