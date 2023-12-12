import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
const BookCards = ({headline, books}) => {
    
  return (
    <div className='my-16 px-4 lg:px-24 '>
      <h2 className='text-5xl text-center font-bold text-black my-10'>{headline}</h2>
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                clickable: true,
                }}  
                breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
                }}
                modules={[Pagination]}
                className="mySwiper w-full h-full"
            >
               
                {
                    books.map(book => <SwiperSlide key={book._id}>
                        <div>
                            <img  src={book.imageUrl}></img>
                        </div>
                        <div>
                            <div>
                            <h3 className='font-bold'>{book.bookTitle}</h3>
                            <p >{book.authorName}</p>
                            </div>
                            <div>Price</div>
                        </div>

                    </SwiperSlide>)
                    
                }
            
            </Swiper>
        </div>
     
    
    </div>
  )
}

export default BookCards
