import React from 'react'
import BannerCard from '../home/BannerCard'
const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-200 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
          <div className='md:w-1/2 space-y-8 h-full '>
              <h2 className='text-3xl font-bold leading-snug text-black'><span className='text-blue-700'>Buy and sell</span> your books</h2>
              <p className='md:w-4/5'>Bookshop.org is an online bookshop with a mission to financially support local, independent bookshops. We believe that bookshops are essential to a healthy culture. They are where authors can connect with readers, where we discover new writers, where children get hooked on the thrill of reading that can last a lifetime. They are also anchors for our communities -- owned, staffed, run and full of real people who have a genuine love of books and reading. As more and more people buy their books online, we wanted to create an easy, convenient way for you to get your books and support independent bookshops at the same time. If you want to support a specific bookshop, select them from our map and they’ll receive 30% of the cover price (or almost all of the profit) on your orders for a year. Otherwise, 10% of the cover price of your order will contribute to an earnings pool that will be evenly distributed among participating independent bookshops each month. By design, we give away the vast majority of our profit to bookshops, publications, authors and the many others who make up the thriving, inspirational culture around books and reading.</p>
              <div>
                  <input type='search' placeholder='search' id='search' name='search' className="py-2 px-2  outline-none"></input>
                  <button className='bg-blue-700 text-white py-2 px-2 rounded-s-sm rounded-md hover:bg-black transition-all duration-200'>Search</button>
              </div>
          </div>
          <div>
            <BannerCard/>
          </div>

        </div>
    </div>
    
    
  )
}

export default Banner
