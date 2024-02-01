import { useState } from "react";
export function useBookSorter(books, sortBy) {
  const [sortedBooks, setSortedBooks] = useState(books);

  const sortBooks = () => {
    if (sortBy === "title") {
      books.sort((book1, book2) => {
        return book1.title - book2.title;
      });
    } else if (sortBy === "year") {
      books.sort((book1, book2) => {
        return book1.year - book2.year;
      });
    }
    setSortedBooks(books);
  };

  return [sortedBooks, sortBooks];
}
