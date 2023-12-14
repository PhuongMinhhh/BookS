import React from 'react'
import {Link} from 'react-router-dom'
import promoBook from '../assets/images/Book3.jpg'
const PromoBook = () => {
  return (
    <div className='bg-teal-300 px-4 py-12 mt-16 lg:px-24'>
       <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
      
       <div className='md:1/2'>
            <h2 className='text-4xl font-bold mb-6 leading-snug'>
               Get 30% off on your first order 
            </h2>
            <Link className='block'  to="/shop">
            <button className="bg-blue-500 px-5 py-2 rounded transition-all duration-300 hover:bg-blue-700 text-white">Get Promo Code</button></Link>
        </div>
        <div>
         <img className='w-32' src={promoBook}></img>
       </div>
       </div>
    </div>
  )
}

export default PromoBook
