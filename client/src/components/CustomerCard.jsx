import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {FaStar} from 'react-icons/fa'
import { Avatar } from 'flowbite-react';
import { Pagination } from 'swiper/modules';
import profileImg from '../assets/images/CarrotAvatar.png'
export default function CustomerCard({headline}) {
  return (
    <div className='my-16 px-4 lg:px-24 '>
      <h2 className='text-5xl text-center font-bold text-black my-10'>{headline}</h2>
        <div >
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
        <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            <div className='mt-7'>
                <p className='mb-5'>
                Wow, this is the best book store I have ever seen. I am so happy to be a customer of this store. I will definitely come back to buy more books.
                </p>
                <Avatar img={profileImg} className='w-10 mb-4' rounded/>
                <h5 className='text-lg font-medium'>Phúc Huy</h5>
                <p className='text-base'>loyal customer</p>
            </div>
          </div> 
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
        <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            <div className='mt-7'>
                <p className='mb-5'>
                Wow, this is the best book store I have ever seen. I am so happy to be a customer of this store. I will definitely come back to buy more books.
                </p>
                <Avatar img={profileImg} className='w-10 mb-4' rounded/>
                <h5 className='text-lg font-medium'>Phúc Huy</h5>
                <p className='text-base'>loyal customer</p>
            </div>
          </div> 
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
        <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            <div className='mt-7'>
                <p className='mb-5'>
                Wow, this is the best book store I have ever seen. I am so happy to be a customer of this store. I will definitely come back to buy more books.
                </p>
                <Avatar img={profileImg} className='w-10 mb-4' rounded/>
                <h5 className='text-lg font-medium'>Phúc Huy</h5>
                <p className='text-base'>loyal customer</p>
            </div>
          </div> 
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
        <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            <div className='mt-7'>
                <p className='mb-5'>
                Wow, this is the best book store I have ever seen. I am so happy to be a customer of this store. I will definitely come back to buy more books.
                </p>
                <Avatar img={profileImg} className='w-10 mb-4' rounded/>
                <h5 className='text-lg font-medium'>Phúc Huy</h5>
                <p className='text-base'>loyal customer</p>
            </div>
          </div> 
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
        <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            <div className='mt-7'>
                <p className='mb-5'>
                Wow, this is the best book store I have ever seen. I am so happy to be a customer of this store. I will definitely come back to buy more books.
                </p>
                <Avatar img={profileImg} className='w-10 mb-4' rounded/>
                <h5 className='text-lg font-medium'>Phúc Huy</h5>
                <p className='text-base'>loyal customer</p>
            </div>
          </div> 
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
        <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            <div className='mt-7'>
                <p className='mb-5'>
                Wow, this is the best book store I have ever seen. I am so happy to be a customer of this store. I will definitely come back to buy more books.
                </p>
                <Avatar img={profileImg} className='w-10 mb-4' rounded/>
                <h5 className='text-lg font-medium'>Phúc Huy</h5>
                <p className='text-base'>loyal customer</p>
            </div>
          </div> 
        </SwiperSlide>
        
      </Swiper>
    </div>
    </div>
  );
}
