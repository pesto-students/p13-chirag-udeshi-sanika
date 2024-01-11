import React, {useState} from "react";
import classes from "./BookDetails.module.css";
const BookDetails = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleClickHandler = () => {
    isVisible ? setIsVisible(false) : setIsVisible(true);
  }
  return (
    <>
    <div className={`${classes["bookDetailsMain"]}`}>
    <h3>{props.title}</h3>
      <p>Author: {props.author}</p>
      <p>Year: {props.year}</p>
    </div>
    <button onClick={toggleClickHandler}> { isVisible ? 'Hide Additional Details' : 'Show Additional Details'}</button>
    {
      isVisible ? <div className={`${classes["bookDetailsExtra"]}`}>
      <p>Genre: {props.genre}</p>
      <p>Description: {props.description}</p>
      </div> : ''
    }
      
      </>
  );
};
export default BookDetails;
