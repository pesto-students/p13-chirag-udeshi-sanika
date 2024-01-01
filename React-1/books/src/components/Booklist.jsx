import React, { Component } from "react";
import Book from "./Book";

class Booklist extends Component {
  constructor(props) {
    super(props);
  }

  deleteClickHandler = (book) => {
    this.props.deleteBook(book);
  };

  render() {
    return (
      <div className="half-desktop">
        <h1>List of Books</h1>
        <ul style={{ listStyleType: "none" }}>
          {this.props.books.length > 0 ? (
            this.props.books.map((book) => (
              <li
                key={book.title + Math.random()}
                style={{
                  backgroundColor: "#d5d5f5",
                  padding: "2%",
                  marginTop: "10px",
                }}
              >
                <Book
                  id={book.title + Math.random()}
                  title={book.title}
                  author={book.author}
                  year={book.year}
                  genre={book.genre}
        description={book.description}
                  deleteBook={this.deleteBook}
                />
                <button
                  onClick={() => {
                    this.deleteClickHandler(book);
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
      </div>
    );
  }
}
export default Booklist;
