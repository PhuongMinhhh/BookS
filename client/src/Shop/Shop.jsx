import React,{useState, useEffect} from 'react'
import { Card } from 'flowbite-react';
const Shop = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/all-books/').then(res => res.json()).then(data => setBooks(data));
    },[]);
    
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>All books</h2>
      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
      {
        books.map(book =>
          <Card>
            <img className='h-96' src={book.imageUrl} alt="Book" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900">
              <p>{book.bookTitle}</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>{book.authorName}</p>
            </p>
          <button className='bg-blue-700 font-semibold text-white py-2 rounded'>Buy now</button>
          </Card>)
      }
      </div>
    </div>
  )
}

export default Shop;
