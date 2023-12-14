import React, {useState, useEffect} from 'react'
import BookCards from '../components/BookCards'
const OtherBook = () => {
    const [books, setBooks] = useState([]);

    useEffect (() => {
        fetch("http://localhost:3000/all-books").then(res => res.json()).then(data => setBooks(data.slice(2, 8)))
    },[])
  return (
    <div >
      <BookCards books={books} headline="Other Books"/>
    </div>
  )
}

export default OtherBook
