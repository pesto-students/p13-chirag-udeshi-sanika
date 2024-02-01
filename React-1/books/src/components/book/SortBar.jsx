import React, { useState, useEffect } from "react";
import classes from "./SortBar.module.css";
import { useBookSorter } from "../../hooks/useBookSorter";

function SortBar(props) {
  const [sortBy, setSortBy] = useState("title");
  const [sortedBooks, sortBooks] = useBookSorter(props.books, sortBy);

  useEffect(() => {
    if (sortedBooks);
    props.showSortedBooks(sortedBooks);
  }, [sortedBooks]);

  return (
    <div className={classes.sortBar}>
      <label htmlFor="sortBy">Sort Books by : </label>
      <select
        type="select"
        name="sortBy"
        id="sortBy"
        onChange={(evt) => {
          setSortBy(evt.target.value);
        }}
        defaultValue={sortBy}
      >
        <option value="title">Title</option>
        <option value="year">Year</option>
      </select>

      <button
        onClick={() => {
          sortBooks();
        }}
      >
        Sort
      </button>
    </div>
  );
}

export default SortBar;
