import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-emerald-700 flex justify-evenly px-12'>
      <div>
        {/* <img src="#" alt="" /> */}
        <h1 className='text-2xl w-70 p-3 font-bold text-yellow-300'>SpendTechShop</h1>
      </div>
      <div className='p-3 w-full'>
        <input type="text" placeholder='Search by name, brand, etc...'  className='bg-white w-full p-2 focus:outline-none'/>
      </div>
      <div className='text-amber-50 flex justify-between items-center uppercase font-semibold'>
        <nav className='flex gap-4 p-3'>
          <Link to={"/"} >Home</Link>
          <Link to={"/"} >Categories</Link>
          <Link to={"/"} >About</Link>
          <Link to={"/"} >Contact</Link>
        </nav>

        <div className='flex gap-4 ml-16 p-3'>
          <Link to={"/"}>Cart</Link>
          <Link to={"/"}>Account</Link>
        </div>
      </div>
    </div>
  )
}

export default Header
