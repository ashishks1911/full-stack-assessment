import React, { useContext } from 'react'
import { data, Link } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import SearchBox from './SearchBox';

const Header = () => {

  return (
    <div className='bg-emerald-700 flex justify-evenly items-center px-12 w-full'>
      <div>
        {/* <img src="#" alt="" /> */}
        <Link to={"/"} className='text-2xl md:w-70 p-3 font-bold text-yellow-300 cursor-pointer'>SpendTechShop</Link>
      </div>
      <div className='lg:block hidden'>
      <SearchBox />
      </div>
      <div className='text-amber-50 flex justify-between items-center uppercase font-semibold'>
        <nav className='hidden md:flex gap-4 p-3'>
          <Link to={"/"} >Home</Link>
          <Link to={"/"} >Categories</Link>
          <Link to={"/"} >About</Link>
          <Link to={"/"} >Contact</Link>
        </nav>
        <div className='flex gap-4 lg:ml-16 ml-5 py-3'>
          <Link to={"/"}><IoCartOutline className='w-6 h-6' /></Link>
          <Link to={"/"}><CgProfile className='w-6 h-6' /></Link>
        </div>
      </div>
    </div>
  )
}

export default Header
