
import './App.css';
import React , {useState} from 'react';
import BookForm from './components/BookForm';
import Booklist from './components/Booklist';


function App() {
 
  const [books, setBooks] = useState([]);
  const sendNewBookDetails = (newBook) => {
    setBooks((prevState) => {
      return [...prevState, newBook]
      
    });
  }

  const deleteBook = (book) => {
    debugger;
    let index = books.indexOf(book);
    books.splice(index,1)
    setBooks(books);
  }
  return (
    <div className="main">
      <BookForm addNewBook={sendNewBookDetails}/>
     <Booklist books={books} deleteBook={deleteBook}/>
    </div>
  );
}

export default App;
