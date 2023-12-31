import React, {memo} from "react";
import BookDetails from "./BookDetails";


const Book = (props) => {
  return (
    <div
      style={{
        "background-color": "#d5d5f5", 'padding': "2%",'margin-top' : '10px'
      }}
    >
     <BookDetails title={props.title} author={props.author} year={props.year}/>
    </div>
  );
};
export default memo(Book);
