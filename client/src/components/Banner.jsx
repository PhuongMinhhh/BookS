import React from 'react'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-200 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-10 py-40'>
        <div>
            <h2 className='text-3xl font-bold leading-snug text-black'>Buy and sell your books</h2>
            <p>description</p>
            <div>
                <input type='search' placeholder='search' id='search' name='search' className="py-2 px-2 rounded-md outline-none"></input>
                <button className='bg-blue-700 text-white py-2 px-2 rounded-s-sm rounded-md '>Search</button>
            </div>
        </div>
        <div></div>
        </div>
    </div>
    
    
  )
}

export default Banner
