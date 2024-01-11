import React, { useState, useContext, useEffect } from "react";
import BookForm from "./BookForm";
import Book from "./Book";
import BookDataLoader from "./BookDataLoader";
import classes from "./BookList.module.css";

import FilterBar from "./FilterBar";

import { ThemeContext } from "./../../App";
import SortBar from "./SortBar";

const Booklist = () => {
  const theme = useContext(ThemeContext);
  const [books, setBooks] = useState(null);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {}, [books]);
  const deleteBook = (book) => {
    let fBooks = books.filter((i) => {
      return i.title !== book.title;
    });

    setBooks(fBooks);
  };

  const addNewBookDetails = (newBook) => {
    setBooks((prevState) => {
      return [...prevState, newBook];
    });
  };

  const loadInitialBooks = (initialBooks) => {
    setBooks(initialBooks);
  };

  const showFilteredBooks = (filteredBooks) => {
    setFilteredBooks(filteredBooks);
  };
  const showSortedBooks = (sortedBooks) => {
    setBooks(sortedBooks);
  };
  const getCurrentBooks = () => {
    if (filteredBooks.length > 0) return filteredBooks;
    return books;
  };

  return (
    <>
      <BookForm addNewBook={addNewBookDetails} />
      <div className="half-desktop">
        <h1>List of Books</h1>

        <FilterBar showFilteredBooks={showFilteredBooks} books={books} />
        <SortBar books={books} showSortedBooks={showSortedBooks} />
        {books ? (
          <ul style={{ listStyleType: "none" }}>
            {getCurrentBooks().length > 0 ? (
              getCurrentBooks().map((book) => (
                <li
                  className={classes[`${theme}-li`]}
                  key={book.title + Math.random()}
                >
                  <Book
                    id={book.title + Math.random()}
                    title={book.title}
                    author={book.author}
                    year={book.year}
                    genre={book.genre}
                    description={book.description}
                  />
                  <button
                    onClick={() => {
                      deleteBook(book);
                    }}
                  >
                    Delete
                  </button>
                </li>
              ))
            ) : (
              <p>Book List is currently empty</p>
            )}
          </ul>
        ) : (
          <BookDataLoader loadInitialBooks={loadInitialBooks} />
        )}
      </div>
    </>
  );
};

export default Booklist;
