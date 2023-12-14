import React from 'react'
import Banner from '../components/Banner'
import BestSellBook from './BestSellBook'
import FavoriteBook from './FavoriteBook'
import PromoBook from './PromoBook'
import OtherBook from './OtherBook'
import OurCustomer from './OurCustomer'
const Home = () => {
  return (
    <>
      <div className=''>
        <Banner />
        <BestSellBook/>
        <FavoriteBook/>
        <PromoBook/>
        <OtherBook/>
        <OurCustomer/>

      </div>
    </>
  )
}

export default Home;