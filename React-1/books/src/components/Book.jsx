import React from "react";

const Book = (props) => {
  return (
    <div
      style={{
        "background-color": "#d5d5f5", 'padding': "2%",'margin-top' : '10px'
      }}
    >
      <h3>{props.title}</h3>
      <p>Author: {props.author}</p>
      <p>Year: {props.year}</p>
    </div>
  );
};
export default Book;
