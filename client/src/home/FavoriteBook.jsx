import React from 'react'
import {Link} from 'react-router-dom';
import favBook from "../assets/images/book1.jpg";

const FavoriteBook = () => {
    

   
  return (
    <div className='my-20 px-4 lg:px-24 flex flex-col md:flex-row justify-between items-center'>
      <div className='md:w-1/2'>
        <img className='rounded md:w-7/12' src={favBook}></img>
      </div>
      <div className='md:w-1/2 space-y-6'>
        <h2 className='text-5xl  font-bold my-5 md:w-3/4 leading-snug'>Find your favorite. <br/>
        <span className='text-blue-700'>Book Here!</span>
        </h2>
        <p className='md:w-4/5 mb-5 text-lg'>Bookshop.org is an online bookshop with a mission to financially support local, independent bookshops. We believe that bookshops are essential to a healthy culture. They are where authors can connect with readers, where we discover new writers, where children get hooked on the thrill of reading that can last a lifetime. </p>
        <div className='flex flex-col sm:flex-row justify-between my-14 gap-6 md:w-3/4 '>
          <div>
              <h3 className='font-bold text-4xl'>500+</h3>
              <p className='text-base'>Book listing</p>
          </div>
          <div>
              <h3 className='font-bold text-4xl'>500+</h3>
              <p className='text-base'>Book listing</p>
          </div>
          <div>
              <h3 className='font-bold text-4xl'>500+</h3>
              <p className='text-base'>Book listing</p>
          </div>
          </div>
          <div className='mt-12 block'>
            <Link className="bg-blue-500 px-5 py-2 rounded hover:bg-blue-700 text-white" to="/shop">Explore More</Link>
          </div>
      </div>
      
    </div>
  )
}

export default FavoriteBook
