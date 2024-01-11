import React, { memo } from "react";
import BookDetails from "./BookDetails";

const Book = (props) => {
  return (
    <>
      <BookDetails
        title={props.title}
        author={props.author}
        year={props.year}
        genre={props.genre}
        description={props.description}
      />
    </>
  );
};
export default memo(Book);
