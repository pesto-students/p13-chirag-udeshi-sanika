import React from "react";

const BookDetails = (props) => {
  return (
    <>
      <h3>{props.title}</h3>
      <p>Author: {props.author}</p>
      <p>Year: {props.year}</p>
      </>
  );
};
export default BookDetails;
