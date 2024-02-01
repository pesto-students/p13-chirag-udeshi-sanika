import React, { useEffect, useState } from "react";
import classes from "./FilterBar.module.css";
import { useBookFilter } from "../../hooks/useBookFilter";

const FilterBar = (props) => {
  const [filterTerm, setFilterTerm] = useState("");
  const [filteredBooks, filterBooks] = useBookFilter(props.books, filterTerm);

  useEffect(() => {
    if (filteredBooks.length > 0) props.showFilteredBooks(filteredBooks);
  }, [filteredBooks]);

  const getFilteredBooks = () => {
    filterBooks();
  };

  return (
    <div className={classes.filterBar}>
      <label htmlFor="filterTerm">Filter Books by term</label>
      <input
        type="text"
        name="filterTerm"
        id="filterTerm"
        onChange={(evt) => {
          setFilterTerm(evt.target.value);
        }}
        value={filterTerm}
      />
      <button onClick={getFilteredBooks}>Filter</button>
      <button
        onClick={() => {
          setFilterTerm("");
          props.showFilteredBooks([]);
        }}
      >
        Remove Filter
      </button>
    </div>
  );
};

export default FilterBar;
