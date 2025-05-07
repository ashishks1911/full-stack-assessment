import React from 'react'
import ProductList from '../components/ProductList'
import SearchBox from '../components/SearchBox'

const Home = () => {
  return (
    <div className='h-full w-full'>
      <div className='bg-gray-300'>
        <SearchBox />
      </div>
      <ProductList />
    </div>
  )
}

export default Home
