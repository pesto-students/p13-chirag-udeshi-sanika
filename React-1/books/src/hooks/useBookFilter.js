
import { useState } from "react"; 
export function useBookFilter(books, term){

    const [filteredBooks, setFilteredBooks] = useState([]);

    const filterBooks = () => {
        debugger;
        let filteredBooks = [];
        for(let book of books){
            for(let key in book){
                if(book[key].toString().toLowerCase().includes(term.toLowerCase())){
                    filteredBooks.push(book);
                    break;
                }
                    
            }
        }
        setFilteredBooks(filteredBooks);
    }
    

   return [filteredBooks, filterBooks];
    
}