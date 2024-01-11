import React, { useState } from "react";
import classes from "./BookForm.module.css";

function BookForm(props) {
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    year: "",
    genre: "",
    description: "",
  });

  const titleChangeHandler = (evt) => {
    setNewBook((prevState) => {
      return {
        ...prevState,
        title: evt.target.value,
      };
    });
  };

  const yearChangeHandler = (evt) => {
    setNewBook((prevState) => {
      return {
        ...prevState,
        year: evt.target.value,
      };
    });
  };

  const authorChangeHandler = (evt) => {
    setNewBook((prevState) => {
      return {
        ...prevState,
        author: evt.target.value,
      };
    });
  };
  const genreChangeHandler = (evt) => {
    setNewBook((prevState) => {
      return {
        ...prevState,
        genre: evt.target.value,
      };
    });
  };

  const descriptionChangeHandler = (evt) => {
    setNewBook((prevState) => {
      return {
        ...prevState,
        description: evt.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.addNewBook(newBook);
    setNewBook({
      title: "",
      author: "",
      year: "",
      genre: "",
      description: "",
    });
  };
  return (
    <div className={`half-desktop ${classes["book-form"]}`}>
      <h2>Enter New Book Details</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            onChange={titleChangeHandler}
            value={newBook.title}
          />
        </div>

        <div>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            onChange={authorChangeHandler}
            value={newBook.author}
          />
        </div>

        <div>
          <label htmlFor="year">Year</label>
          <input
            type="number"
            name="year"
            onChange={yearChangeHandler}
            value={newBook.year}
          />
        </div>
        <h3>Additional Details</h3>
        <div>
        <label htmlFor="genre">Genre</label>
          <input
            type="text"
            name="genre"
            id="genre"
            onChange={genreChangeHandler}
            value={newBook.genre}
          />
        </div>
        <div>
        <label htmlFor="decription">Decription</label>
          <input
            type="textarea"
            name="decription"
            id="description"
            onChange={descriptionChangeHandler}
            value={newBook.description}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookForm;
