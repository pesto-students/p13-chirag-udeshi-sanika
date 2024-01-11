import React , {useEffect} from 'react'

function BookDataLoader(props) {

    const initialBooks = [
        {
            title : "Think like a Monk",
            author : "Jay Shetty",
            year : 2018,
            genre : "Self-help",
            description : "Book about spirituality"
        },
        {
            title : "Silent Patient",
            author : "Alex Michaelides",
            year : 2019,
            genre : "Mystery",
            description : "psychological thriller"
        },
        {
            title : "Rich Dad Poor Dad",
            author : "Robert Kiyosaki",
            year : 1997,
            genre : "Finance",
            description : "Managing personal finances"
        },

    ]

    useEffect(() => {
        setTimeout(() => {
            props.loadInitialBooks(initialBooks);
        }, 1000);

    }, []);
  return (
    <div>....Loading</div>
  )
}

export default BookDataLoader