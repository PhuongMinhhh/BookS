import React from 'react'
import {useLoaderData} from 'react-router-dom';
export default function SingleBook(){
  const {bookTitle,imageUrl} = useLoaderData();  
  
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <img className='h-96' src={imageUrl}/>
      <h2>{bookTitle}</h2>
    </div>
  )

}


