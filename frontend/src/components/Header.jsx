import React, { useContext } from 'react'
import { data, Link } from 'react-router-dom'
import { searchProductsInDB } from '../util/ApiFunctions'
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { SearchContext } from '../context/SearchContext'
import { toast } from 'react-toastify'

const Header = () => {
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
    <div className='bg-emerald-700 flex justify-evenly px-12'>
      <div>
        {/* <img src="#" alt="" /> */}
        <h1 className='text-2xl w-70 p-3 font-bold text-yellow-300'>SpendTechShop</h1>
      </div>
      <div className='p-3 w-full'>
        <input type="text" placeholder='Search by name, brand, etc...'
          className='bg-white w-full p-2 focus:outline-none'
          onChange={searchProducts} />
      </div>
      <div className='text-amber-50 flex justify-between items-center uppercase font-semibold'>
        <nav className='flex gap-4 p-3'>
          <Link to={"/"} >Home</Link>
          <Link to={"/"} >Categories</Link>
          <Link to={"/"} >About</Link>
          <Link to={"/"} >Contact</Link>
        </nav>

        <div className='flex gap-4 ml-16 p-3'>
          <Link to={"/"}><IoCartOutline className='w-6 h-6'/></Link>
          <Link to={"/"}><CgProfile className='w-6 h-6'/></Link>
        </div>
      </div>
    </div>
  )
}

export default Header
