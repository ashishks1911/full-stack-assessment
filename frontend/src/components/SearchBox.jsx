import React, { useContext } from 'react'
import { SearchContext } from '../context/SearchContext';
import { searchProductsInDB } from '../util/ApiFunctions';

const SearchBox = () => {
  const { setState } = useContext(SearchContext);
  const searchProducts = (event) => {
    searchProductsInDB(event.target.value)
      .then((data) =>
        setState(data)
      ).catch((error) => {
        toast.error(error);
      })
  }

  return (
    <div className='p-3 w-full min-w-2xl'>
      <input type="text" placeholder='Search by name, brand, etc...'
        className='bg-white w-full p-2 focus:outline-none'
        onChange={searchProducts} />
    </div>
  )
}

export default SearchBox
